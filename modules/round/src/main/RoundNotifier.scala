package lila.round

import lila.hub.actorApi.timeline.{ Propagate, GameEnd => TLGameEnd }
import lila.notify.{ GameEnd, Notification, NotifyApi }

import lila.game.Game
import lila.user.User

private final class RoundNotifier(
    timeline: akka.actor.ActorSelection,
    isUserPresent: (Game, User.ID) => Fu[Boolean],
    notifyApi: NotifyApi) {

  def gameEnd(game: Game)(color: chess.Color) = {
    if (!game.aborted) game.player(color).userId foreach { userId =>
      game.perfType foreach { perfType =>
        timeline ! (Propagate(TLGameEnd(
          playerId = game fullIdOf color,
          opponent = game.player(!color).userId,
          win = game.winnerColor map (color ==),
          perf = perfType.key)) toUser userId)
      }
      isUserPresent(game, userId) foreach {
        case false => notifyApi.addNotification(Notification(
          Notification.Notifies(userId),
          GameEnd(
            GameEnd.GameId(game.id),
            game.opponent(color).userId map GameEnd.OpponentId.apply,
            game.wonBy(color) map GameEnd.Win.apply)))
        case _ =>
      }
    }
  }
}
