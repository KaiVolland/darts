(function () {
  'use strict';

  const view = {
    scorelines: document.querySelector('.scorelines'),
    newScore: document.querySelector('.new-score'),
    sendScoreForm: document.querySelector('.send-score-form'),

    render (scorelines) {
      const html = scorelines.map(scoreline =>
        `<li class="scoreline" data-scoreline-id="${scoreline.id}">
          <div class="label">${scoreline.points}</div>
        </li>`
      ).join('');

      view.scorelines.innerHTML = html;
    }
  };

  window.view = view;
})();
