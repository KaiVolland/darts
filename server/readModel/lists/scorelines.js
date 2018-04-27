'use strict';

const fields = {
  points: { initialState: 501 },
  timestamp: { initialState: 0, fastLookup: true }
};

const when = {
  'game.scoreline.scored' (scorelines, event, mark) {
    scorelines.add({
      points: event.data.points,
      timestamp: event.metadata.timestamp
    });
    mark.asDone();
  }
  // 'game.scoreline.scored' (scorelines, event, mark) {
  //   scorelines.update({
  //     where: {
  //       id: event.aggregate.id
  //     },
  //     set: {
  //       points: event.data.points
  //     }
  //   });
  //   mark.asDone();
  // }
}

module.exports = { fields, when };
