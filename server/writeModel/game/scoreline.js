'use strict';

const initialState = {
  points: 501,
  isAuthorized: {
    commands: {
      score: { forPublic: true }
    },
    events: {
      scored: { forPublic: true }
    }
  }
};

const commands = {
  score (scoreline, command, mark) {
    scoreline.events.publish('scored', {
      points: scoreline.state.points - command.data.points
    });
    mark.asDone();
  }
};

const events = {
  scored (scoreline, event) {
    scoreline.setState({
      points: event.data.points
    });
  }
};

module.exports = { initialState, commands, events };
