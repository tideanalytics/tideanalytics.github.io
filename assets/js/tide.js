(function () {
  'use strict';

  /* freshchat */
  function initFreshChat() {
    window.fcWidget.init({
      token: '782ca078-53a3-430c-86e9-f06c6a1f1aa0',
      host: 'https://wchat.freshchat.com'
    });
  }
  (function (d, id) {
    var fcJS;
    if (d.getElementById(id)) {
      initFreshChat();
      return;
    }
    fcJS = d.createElement('script');
    fcJS.id = id;
    fcJS.async = true;
    fcJS.src = 'https://wchat.freshchat.com/js/widget.js';
    fcJS.onload = initFreshChat;
    d.head.appendChild(fcJS);
  }(document, 'freshchat-js-sdk'));

})();