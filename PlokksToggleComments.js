// ==UserScript==
// @name         PlokksToggleComment
// @namespace    http://defil.de
// @version      0.1
// @description  toggle youtube comments
// @author       Plokks
// @include http://www.youtube.com/*
// @include https://www.youtube.com/*
// @exclude http://www.youtube.com/embed/*
// @exclude https://www.youtube.com/embed/*
// @match http://www.youtube.com/*
// @match https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  console.log("Starting PlokksToggleComment script");

  var checkIfCommentsExist = setInterval(function() {
    if (document.getElementById("comment-section-renderer-items")) {
      console.log("Hiding Comments!");
      document.getElementById("comment-section-renderer-items").style.display = 'none';
      clearInterval(checkIfCommentsExist);
    }
  }, 100); // check every 100ms, should really use observer pattern...

  var btn = document.createElement('button');
  btn.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-opacity';
  btn.style.paddingLeft = '10px';
  btn.style.paddingRight = '10px';
  btn.textContent = 'Toggle Comments';

  btn.onclick = function(e) {
    e.preventDefault();
    var comments = document.getElementById("comment-section-renderer-items");
    if (comments) {
      if (comments.style.display == 'none') {
        comments.style.display = 'block';
      } else {
        comments.style.display = 'none';
      }
    }
    return false;
  };
    document.getElementById("watch8-secondary-actions").appendChild(btn);
})();
