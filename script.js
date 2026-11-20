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


/* CRAMPUS — static image activation and viral Naughty Audit, no backend */
(function () {
  'use strict';
  document.querySelectorAll('img[data-asset]').forEach(function (img) {
    function ready() {
      if (img.naturalWidth > 0) img.parentElement.classList.add('has-image');
    }
    img.addEventListener('load', ready);
    if (img.complete) ready();
  });

  var form = document.getElementById('audit-form');
  if (!form) return;
  var input = document.getElementById('audit-name');
  var nameBox = document.getElementById('verdict-subject');
  var caseBox = document.getElementById('verdict-case');
  var chargeBox = document.getElementById('verdict-charge');
  var sentenceBox = document.getElementById('verdict-sentence');
  var status = document.getElementById('audit-feedback');
  var again = document.getElementById('audit-again');
  var download = document.getElementById('audit-download');
  var copy = document.getElementById('audit-copy');
  var share = document.getElementById('audit-share');
  var current = null;

  var charges = [
    "Told the group chat 'almost there' while still looking for socks.",
    "Put 'CEO' in the bio and then asked somebody to spot ten dollars.",
    "Opened a gift, said 'I love it,' and immediately checked the return policy.",
    "Started playing Christmas music while everybody was still eating Halloween candy.",
    "Sent a good-morning text at 3:41 PM and demanded a response.",
    "Called three different people 'the one' before the Christmas tree went up.",
    "Bought matching pajamas but couldn't match anybody's energy.",
    "Posted 'big things coming' four years in a row. No things have arrived.",
    "Showed up to the holiday cookout with one bag of ice and six empty containers.",
    "Told Santa to send a 100x but never even bought the wrapping paper.",
    "Used a six-year-old profile picture and called it 'recent.'",
    "Borrowed somebody's charger and returned it with a completely different cord.",
    "Posted 'protect your peace' immediately after starting the argument.",
    "Promised to bring the mac and cheese, then arrived with napkins.",
    "Asked for a Christmas bonus after taking a three-hour lunch.",
    "Said 'I'm keeping it low-key this year' and posted 43 holiday photos.",
    "Sent a voice note longer than the Christmas Eve church service.",
    "Left somebody on read but watched every single story.",
    "Told the family 'I got the drinks' and pulled up with two warm sodas.",
    "Wore a Santa hat to a business meeting and called it holiday branding."
  ];
  var sentences = [
    "SENTENCE: SIX HOURS OF FAMILY GROUP CHAT DUTY.",
    "SENTENCE: CHRISTMAS DINNER CLEANUP. NO PAROLE.",
    "SENTENCE: REINDEER COMMUNITY SERVICE UNTIL NEW YEAR'S.",
    "SENTENCE: FORCED TO EXPLAIN YOUR SEARCH HISTORY TO AN ELF.",
    "SENTENCE: NO AUX CORD PRIVILEGES UNTIL DECEMBER 26.",
    "SENTENCE: 30 DAYS OF UNPAID NORTH POLE CUSTOMER SUPPORT.",
    "SENTENCE: YOU MUST BUY THE ENTIRE FAMILY MATCHING SOCKS.",
    "SENTENCE: ALL FUTURE TEXTS MUST BEGIN WITH 'MY BAD.'",
    "SENTENCE: CHRISTMAS DAY DISHES. INCLUDING THE BIG POTS.",
    "SENTENCE: YOUR CHRISTMAS BONUS IS A LUMP OF PREMIUM COAL."
  ];
  function randomInt(max) {
    if (window.crypto && window.crypto.getRandomValues) {
      var data = new Uint32Array(1);
      window.crypto.getRandomValues(data);
      return data[0] % max;
    }
    return Math.floor(Math.random() * max);
  }
  function cleanName() {
    return input.value.trim().replace(/\s+/g, ' ').slice(0, 28);
  }
  function postText() {
    if (!current) return '';
    return 'CRAMPUS NAUGHTY LIST AUDIT 👹🎄\nSUBJECT: ' + current.name +
      '\nCHARGE: ' + current.charge +
      '\n' + current.sentence +
      '\n#CRAMPUS #GrinchesInTheTrenches';
  }
  function audit() {
    var subject = cleanName();
    if (!subject) { input.focus(); status.textContent = 'THE DEMON NEEDS A NAME TO INVESTIGATE.'; return; }
    var charge = charges[randomInt(charges.length)];
    var sentence = sentences[randomInt(sentences.length)];
    var caseId = '1225-' + String(randomInt(90000) + 10000);
    current = { name:subject, charge:charge, sentence:sentence, caseId:caseId };
    nameBox.textContent = subject.toUpperCase();
    caseBox.textContent = caseId;
    chargeBox.textContent = charge;
    sentenceBox.textContent = sentence;
    [again, download, copy].forEach(function(button){ button.disabled = false; });
    share.classList.remove('is-disabled');
    share.setAttribute('aria-disabled','false');
    share.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(postText());
    status.textContent = 'THE VERDICT IS IN. THERE IS NO APPEALS DEPARTMENT.';
  }
  form.addEventListener('submit',function (event){ event.preventDefault(); audit(); });
  again.addEventListener('click',audit);
  share.addEventListener('click',function(e){if(!current){e.preventDefault();status.textContent='GET A VERDICT FIRST.';}});
  copy.addEventListener('click',function(){
    if(!current)return;
    if(navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(postText()).then(function(){status.textContent='VERDICT COPIED. TELL THE GROUP CHAT.';}).catch(function(){status.textContent='COPY BLOCKED. SELECT THE VERDICT TEXT.';});
    } else {
      var selection=window.getSelection();
      var range=document.createRange();
      range.selectNodeContents(document.getElementById('verdict-card'));
      selection.removeAllRanges(); selection.addRange(range);
      status.textContent='VERDICT SELECTED. USE YOUR BROWSER COPY COMMAND.';
    }
  });
  function wrap(ctx,content,x,y,maxWidth,lineHeight,maxLines) {
    var words=content.split(/\s+/),line='',lines=0;
    for(var i=0;i<words.length;i++){
      var test=line ? line+' '+words[i] : words[i];
      if(ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line,x,y+lines*lineHeight);
        lines++;line=words[i];
        if(lines>=maxLines)return y+lines*lineHeight;
      } else {line=test;}
    }
    if(line && lines<maxLines){ctx.fillText(line,x,y+lines*lineHeight);lines++;}
    return y+lines*lineHeight;
  }
  download.addEventListener('click',function(){
    if(!current)return;
    var canvas=document.createElement('canvas');
    canvas.width=1080;canvas.height=1350;
    var c=canvas.getContext('2d');
    if(!c){status.textContent='YOUR BROWSER COULD NOT MAKE THE CARD.';return;}
    var bg=c.createLinearGradient(0,0,1080,1350);
    bg.addColorStop(0,'#31121b');bg.addColorStop(.5,'#140d14');bg.addColorStop(1,'#431f24');
    c.fillStyle=bg;c.fillRect(0,0,1080,1350);
    c.strokeStyle='#b88a55';c.lineWidth=8;c.strokeRect(40,40,1000,1270);
    c.strokeStyle='#6d4539';c.lineWidth=2;c.strokeRect(58,58,964,1234);
    for(var i=0;i<55;i++){ c.fillStyle='rgba(255,230,190,0.12)';c.fillRect((i*179)%1080,(i*319)%1350,3,3); }
    c.textAlign='center'; c.fillStyle='#f3d39c';c.font='bold 54px Georgia,serif';c.fillText('CRAMPUS',540,148);
    c.fillStyle='#d8af7d';c.font='bold 25px Arial,sans-serif';c.fillText('DEPARTMENT OF FESTIVE MISCONDUCT',540,198);
    c.strokeStyle='#957049';c.beginPath();c.moveTo(140,240);c.lineTo(940,240);c.stroke();
    c.fillStyle='#b82f40';c.font='bold 115px Georgia,serif';c.fillText('♈',540,370);
    c.fillStyle='#e1c19a';c.font='bold 25px Arial,sans-serif';c.fillText('OFFICIAL NOTICE OF HOLIDAY VIOLATION',540,434);
    c.fillStyle='#fff0d2';c.font='bold 70px Georgia,serif';
    var displayName=current.name.toUpperCase();
    while(c.measureText(displayName).width>880 && parseInt(c.font,10)>33) { var n=parseInt(c.font,10)-2; c.font='bold '+n+'px Georgia,serif'; }
    c.fillText(displayName,540,530);
    c.fillStyle='#d1a577';c.font='bold 27px Arial,sans-serif';c.fillText('CASE FILE: '+current.caseId,540,598);
    c.fillStyle='#e7c99f';c.font='bold 30px Arial,sans-serif';c.fillText('CHARGED WITH:',540,700);
    c.fillStyle='#fff0df';c.font='bold 38px Arial,sans-serif';
    var y=wrap(c,current.charge,540,770,820,53,5);
    c.fillStyle='#ef8990';c.font='bold 30px Arial,sans-serif';
    wrap(c,current.sentence,540,Math.max(1010,y+72),820,46,4);
    c.strokeStyle='#957049';c.beginPath();c.moveTo(150,1212);c.lineTo(930,1212);c.stroke();
    c.fillStyle='#cfad85';c.font='bold 23px Arial,sans-serif';
    c.fillText('GRINCHES IN THE TRENCHES  •  #CRAMPUS',540,1265);
    var a=document.createElement('a');
    a.download='crampus-verdict-'+current.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.png';
    a.href=canvas.toDataURL('image/png');
    document.body.appendChild(a);a.click();a.remove();
    status.textContent='YOUR OFFICIAL VERDICT CARD IS READY TO SHARE. NO APPEAL.';
  });
})();
