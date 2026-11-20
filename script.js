'use strict';
(function () {
  var posts = [
    "Santa checks his list twice. I check the trenches every five minutes. We are NOT the same. 🎄👹 #CRAMPUS",
    "BREAKING: The North Pole has been placed under new management. Please direct all complaints to CRAMPUS. 👹",
    "Dear Santa, I can explain. Actually, no I can't. And I wouldn't even if I could. 🎅💀",
    "If you're waiting on Santa to save your Christmas, you might want to call customer service. I fired the elves. 👹",
    "The Grinch stole Christmas. CRAMPUS acquired a controlling interest. There's levels to this. 🎄",
    "I don't want a lot for Christmas. Just the whole damn season. 👹 #CRAMPUS",
    "Everybody talking about a Christmas miracle. I'm trying to figure out who ate the last slice of pie. 😭🎄",
    "The nice list got hacked. The naughty list got promoted. CRAMPUS season is officially underway. 👹",
    "Santa got reindeer. I got trench gremlins with a holiday agenda. WHO YOU BETTING ON? 🎄",
    "Rudolph got a red nose. I got red flags and excellent holiday timing. 👹",
    "Dear North Pole HR: Your entire workshop is under investigation for excessive holiday cheer. — CRAMPUS",
    "I came down the chimney and saw cookies with NO milk. The disrespect starts at home. 😭",
    "They said Christmas is for the kids. So why am I the one getting socks every year? 😤🎄",
    "CRAMPUS does NOT do secret Santa. If I'm buying a gift, everybody is going to know. 👹",
    "I'm not saying I ruined Christmas. I'm saying the tree fell down after I walked in. Coincidence? 🎄",
    "The only thing getting wrapped this December is this whole conversation. CRAMPUS has spoken. 👹",
    "I saw somebody put up decorations in October. I respect the hustle, but RELAX. 😭",
    "Santa has a workshop. I have a whole operation. Same industry. Different management. 👹",
    "Holiday spirit? Mine has a parole officer and a suspiciously expensive sleigh. 🎄",
    "All I want for Christmas is accountability from the people who ate my leftovers. 👹",
    "Christmas music been playing since November 1st. At this point the reindeer need overtime pay. 💀",
    "Santa says HO HO HO. CRAMPUS says WHO SENT YOU? 👹",
    "Don't leave cookies out for me. Leave a plate. I had a long night. 🎄",
    "They tried to put CRAMPUS on the naughty list. I bought the list and changed the rules. 👹",
    "How you got matching pajamas for Christmas but not matching energy all year? 😭",
    "This Christmas I'm giving out the gift of minding my business. Limited quantities available. 🎁",
    "The North Pole group chat is in SHAMBLES. CRAMPUS just entered the conversation. 👹",
    "If you see a shadow by your Christmas tree, it's probably just CRAMPUS checking the inventory. 🎄",
    "Santa said he sees you when you're sleeping. Bro, that's a little weird. 😭",
    "Christmas is a season of giving. I'm giving EVERYBODY something to talk about. 👹",
    "I don't believe in being on your best behavior for December. What happened to character development? 🎄",
    "CRAMPUS didn't steal Christmas. The season came with me. 👹",
    "Everybody on the nice list suddenly acting different since the presents arrived. 💀🎁",
    "The elves asked for a Christmas bonus. I told them we can discuss that at the January review. 😭",
    "I RUN CHRISTMAS NOW. Send the memo to Santa, the elves, AND the group chat. 👹",
    "The trenches are colder than the North Pole, but the Christmas memes are HOT. 🎄🔥"
  ];
  var gen = document.getElementById('generate');
  var copy = document.getElementById('copy');
  var body = document.getElementById('tweet-text');
  var feedback = document.getElementById('feedback');
  var share = document.getElementById('share');
  var current = 0;
  function shareUrl(text) { return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text); }
  function updateShare() { if (share && body) share.setAttribute('href', shareUrl(body.textContent)); }
  function generate() {
    var next = Math.floor(Math.random() * posts.length);
    if (next === current) next = (next + 1) % posts.length;
    current = next;
    body.textContent = posts[current];
    feedback.textContent = 'New holiday chaos delivered. The elves are furious.';
    updateShare();
  }
  if (gen && copy && body && feedback) {
    gen.addEventListener('click', generate);
    copy.addEventListener('click', function () {
      var text = body.textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          feedback.textContent = 'COPIED. Go spread the chaos. 👹';
          copy.textContent = 'COPIED ✓';
          setTimeout(function(){ copy.textContent = 'COPY TEXT'; }, 1600);
        }).catch(function () {
          feedback.textContent = 'Copy blocked by browser. Select the post text to copy it manually.';
        });
      } else {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(body);
        selection.removeAllRanges();
        selection.addRange(range);
        feedback.textContent = 'Text selected. Use Copy from your browser.';
      }
    });
    updateShare();
  }
  var menu = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  if (menu && nav) {
    menu.addEventListener('click', function () {
      var opened = !nav.classList.contains('open');
      nav.classList.toggle('open', opened);
      menu.setAttribute('aria-expanded', String(opened));
      menu.textContent = opened ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.textContent = '☰';
      });
    });
  }
  document.querySelectorAll('.gallery-tile img').forEach(function(img) {
    function onLoad() {
      if (img.naturalWidth > 0) img.parentElement.classList.add('has-image');
    }
    img.addEventListener('load', onLoad);
    if (img.complete) onLoad();
  });
  var target = new Date('2026-12-25T00:00:00-05:00').getTime();
  function countdown() {
    var gap = Math.max(0, target - Date.now());
    var parts = [Math.floor(gap / 86400000), Math.floor(gap / 3600000) % 24, Math.floor(gap / 60000) % 60, Math.floor(gap / 1000) % 60];
    ['days','hours','minutes','seconds'].forEach(function (id, i) {
      var el = document.getElementById(id);
      if (el) el.textContent = String(parts[i]).padStart(2,'0');
    });
    var label = document.querySelector('.countdown-label');
    if (gap === 0 && label) label.textContent = 'CRAMPUS SEASON HAS ARRIVED';
  }
  countdown();
  setInterval(countdown, 1000);
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  var snow = document.getElementById('snow');
  if (snow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 28; i++) {
      var flake = document.createElement('span');
      flake.className = 'snowflake';
      flake.style.left = (Math.random() * 100).toFixed(2) + '%';
      flake.style.animationDuration = (12 + Math.random() * 19).toFixed(1) + 's';
      flake.style.animationDelay = (-Math.random() * 25).toFixed(1) + 's';
      var size = (1 + Math.random() * 3).toFixed(1) + 'px';
      flake.style.width = size;
      flake.style.height = size;
      fragment.appendChild(flake);
    }
    snow.appendChild(fragment);
  }
})();
