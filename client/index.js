(function () {
  'use strict';

  wolkenkit.connect({ host: 'local.wolkenkit.io', port: 3000 }).
    then(darts => {
      view.sendScoreForm.addEventListener('submit', event => {
        event.preventDefault();
        // debugger

        // const scorelineId = document.querySelector('.scoreline').dataset.scorelineId;
        // darts.game.scoreline(scorelineId).score({
        //   points: view.newScore.value
        // }).
        darts.game.scoreline().score({
          points: view.newScore.value
        }).
          failed(err => console.error(err)).
          delivered(() => {
            view.newScore.value = '';
            view.newScore.focus();
          });
      });

      darts.lists.scorelines.readAndObserve({
        orderBy: {
          timestamp: 'descending'
        },
        take: 50
      }).
        failed(err => console.error(err)).
        started(view.render).
        updated(view.render);

      view.newScore.focus();
    }).
    catch(err => {
      console.error(err);
    });
})();
