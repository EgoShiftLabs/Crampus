'use strict';
(function () {
  var evergreenPosts = [
    "Santa work ONE night a year. I need a bag EVERY month. 👹 #CRAMPUS",
    "Been alive 900 years. Still ain't found a job with decent benefits. I'ma just keep doing me. 💀",
    "The horns are hereditary. The bad decisions? That's all me. 👹",
    "Somebody said get a real job. BRO, I been haunting villages since before direct deposit. 😂",
    "I don't need a rebrand. I need y'all to start paying attention. And maybe some gas money. 👹",
    "Ain't no off-season when you owe the underworld rent. 😭",
    "They told me to touch grass. I invented being outside. Y'all just got here. 💀",
    "I got two horns, a thousand-year résumé, and still no verified check. WHAT THE HELL?!",
    "Everybody want motion till the ancient demon show up asking for his percentage. 👹",
    "I'm not saying I'm the villain. I'm saying whoever told the story left some details out. 😂",
    "My financial advisor told me to diversify. So now I ruin every holiday equally. 👹",
    "If the bag don't show up by midnight, somebody getting haunted. Respectfully. 💀",
    "They said I needed a niche. I'm an ANCIENT DEMON. How much more niche can I get?! 😂",
    "I used to scare whole villages. Now I gotta compete with people posting their breakfast. 😭",
    "Been alive longer than compound interest. Still chasing this damn bag. 👹",
    "My accountant asked where I got these gold chains. Sir, that's generational demon wealth. 😂",
    "I ain't jealous of Santa. I'm just looking at his logistics, his labor costs, and them damn margins. 👹",
    "The underworld got a group chat now. I'm muted in all of them. 😭",
    "Everybody a CEO till the reindeer union come knocking. 💀",
    "You can't cancel me. I was here before customer service. 👹",
    "I told y'all I'm outside year round. Why you looking surprised in August? 😂",
    "Got kicked out the North Pole. Started an empire in the trenches. Same old story. 👹",
    "Somebody called me seasonal. Nah, BRO. Christmas just when I wear the good coat. 💀",
    "A bag, a plan, and a little disrespect. That's a complete business model. 👹",
    "I do not chase clout. I walk into the room and the temperature drops. 😂",
    "They ain't ready for an 800-year-old demon with Wi-Fi and a business plan. 👹",
    "No more free haunting. The economy changed. Prices went UP. 💀",
    "The difference between me and Santa? He delivers presents. I deliver problems. YEAR ROUND. 👹",
    "My therapist said let go of the past. Ma'am, the past is literally my whole résumé. 😭",
    "I got a problem with people acting brand new. I've seen you in THREE centuries. 👹",
    "The horns stay on. I paid too much for this outfit to blend in. 😂",
    "They want me to be nicer. Cool. My consultation fee just doubled. 👹",
    "You think I wake up in December? Shiiiiit, the bills wake ME up every morning. 💀",
    "Folks say the trenches are dead. Funny, I just climbed out the underworld. 👹",
    "I came for the culture, the comedy, and whatever bag Santa left unattended. 😂"
  ];
  var winterPosts = [
    "I RUN CHRISTMAS NOW. Somebody send Santa the paperwork. 👹🎄",
    "Santa got one night. I got the whole calendar. WHO REALLY GOT MOTION?! 🎅💀",
    "The Grinch stole Christmas. I came to audit the acquisition. There's LEVELS. 😂",
    "You still leaving out milk and cookies? I'm charging appearance fees now. 👹🎄",
    "The reindeer requested holiday pay. Santa left the group chat. 😭",
    "Ain't nothing merry about these North Pole profit margins. WHO BEEN COUNTING THE MONEY?! 💀",
    "Santa checks the nice list twice. I'm checking who been lying about bringing the mac and cheese. 👹",
    "They said Christmas spirit. I said where's the Christmas REVENUE? 😂🎄",
    "December is my home court. The other eleven months? I'm on tour. 👹",
    "How you got matching Christmas pajamas and still can't match nobody's energy? 😭",
    "The elves told me it's peak season. I told 'em I BEEN at work. 👹🎄",
    "I didn't cancel Christmas. I just put Santa on a performance improvement plan. 💀",
    "I'm NOT doing Secret Santa. Either say my name or keep the gift. 😂",
    "Y'all want a holiday miracle. I want direct deposit. Merry Christmas. 👹",
    "If you see my shadow by the tree, don't panic. I'm checking inventory. 💀🎄",
    "Everybody acting holy in December. Where was this energy in JULY?! 😂"
  ];
  var month = new Date().getMonth();
  var posts = (month === 10 || month === 11)
    ? evergreenPosts.concat(winterPosts)
    : evergreenPosts;

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
    feedback.textContent = 'HE AIN’T EVEN WARMED UP YET. 👹';
    updateShare();
  }
  if (gen && copy && body && feedback) {
    gen.addEventListener('click', generate);
    copy.addEventListener('click', function () {
      var text = body.textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          feedback.textContent = 'COPIED. GO STIR SOME SHIT UP. 👹';
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
  function christmasTarget() { var year = new Date().getFullYear(); var t = new Date(year + '-12-25T00:00:00-05:00').getTime(); return Date.now() >= t + 86400000 ? new Date((year + 1) + '-12-25T00:00:00-05:00').getTime() : t; }
  function countdown() {
    var gap = Math.max(0, christmasTarget() - Date.now());
    var parts = [Math.floor(gap / 86400000), Math.floor(gap / 3600000) % 24, Math.floor(gap / 60000) % 60, Math.floor(gap / 1000) % 60];
    ['days','hours','minutes','seconds'].forEach(function (id, i) {
      var el = document.getElementById(id);
      if (el) el.textContent = String(parts[i]).padStart(2,'0');
    });
    var label = document.querySelector('.countdown-label');
    if (label) label.textContent = gap === 0 ? 'CHRISTMAS TAKEOVER IS LIVE. GET TO THE BAG.' : 'COUNTDOWN TO THE NEXT CHRISTMAS TAKEOVER';
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
    "Put CEO in the bio and asked somebody to spot ten dollars.",
    "Posted 'big things coming' four years in a row. STILL nothing.",
    "Told the group chat 'almost there' while still in the shower.",
    "Texted 'I'm outside' from six exits away.",
    "Called three different people 'the one' in the same fiscal quarter.",
    "Said 'I'm protecting my peace' right after starting the argument.",
    "Talked about generational wealth while borrowing gas money.",
    "Said the play was guaranteed, then disappeared when it rugged.",
    "Posted a motivational quote with an unpaid parking ticket.",
    "Borrowed a charger and gave back a cord from the stone age.",
    "Told everybody you was a private person. Then posted 47 stories.",
    "Said 'no new friends' and immediately asked for followers.",
    "Left somebody on read but watched every single story.",
    "Started a podcast and made everybody listen to the first episode.",
    "Said you been getting to the bag but can't find the receipt.",
    "Used a six-year-old picture and called it yesterday.",
    "Announced a retirement from the trenches. Came back 19 minutes later.",
    "Told the timeline 'I move in silence' and posted the whole itinerary.",
    "Said you don't do drama, then brought screenshots to the cookout.",
    "Claimed the market was back because your $14 buy went to $16.",
    "Tried to charge admission to a group chat with six people in it.",
    "Said 'trust the process' but couldn't explain the process.",
    "Asked for an investor after buying a fifth bottle of cologne.",
    "Promised to bring the food and showed up with an appetite.",
    "Told everybody to DYOR, then asked the chat what the ticker was.",
    "Wore sunglasses indoors to avoid accountability.",
    "Called yourself a legend. Your own cousin asked 'WHO?!'",
    "Sent a seven-minute voice note that could have been three words.",
    "Asked for one more chance after using up all the free trials.",
    "Got caught talking big motion on a borrowed Wi-Fi connection."
  ];
  var winterCharges = [
    "Showed up to Christmas dinner with one bag of ice and six empty containers.",
    "Bought matching pajamas but couldn't match nobody's energy.",
    "Told Santa to send a 100x and forgot to buy wrapping paper.",
    "Promised the mac and cheese and arrived with napkins.",
    "Said you love the gift, then immediately searched the return policy.",
    "Played Christmas songs in October and asked why everybody was mad.",
    "Took the good leftovers before the host even sat down.",
    "Started a family argument right next to the Christmas tree."
  ];
  var sentences = [
    "SENTENCE: SIX HOURS OF GROUP CHAT MODERATION. NO PAY.",
    "SENTENCE: ALL FUTURE TEXTS MUST BEGIN WITH 'MY BAD.'",
    "SENTENCE: 30 DAYS OF UNPAID DEMON CUSTOMER SERVICE.",
    "SENTENCE: YOU OWE THE GROUP CHAT A PUBLIC APOLOGY.",
    "SENTENCE: NO AUX CORD PRIVILEGES UNTIL FURTHER NOTICE.",
    "SENTENCE: YOU MUST EXPLAIN YOUR LAST FIVE POSTS UNDER OATH.",
    "SENTENCE: PERMANENT PROBATION IN THE TRENCHES.",
    "SENTENCE: YOUR NEXT FLEX REQUIRES A RECEIPT.",
    "SENTENCE: ONE WEEK OF MINDING YOUR DAMN BUSINESS.",
    "SENTENCE: CRAMPUS GETS 10% OF YOUR NEXT FAKE FLEX.",
    "SENTENCE: YOU ARE NOW THE GROUP CHAT'S UNPAID TREASURER.",
    "SENTENCE: REPEAT OFFENDERS HAVE TO HOST THE NEXT COOKOUT."
  ];
  var winterSentences = [
    "SENTENCE: CHRISTMAS DAY DISHES. INCLUDING THE BIG POTS.",
    "SENTENCE: SIX HOURS OF REINDEER COMMUNITY SERVICE.",
    "SENTENCE: NO CHRISTMAS AUX CORD PRIVILEGES.",
    "SENTENCE: WRAPPING EVERYBODY'S GIFTS. NO COMPLAINTS."
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
    return 'CRAMPUS RECEIPT CHECK 👹\nSUBJECT: ' + current.name +
      '\nCHARGE: ' + current.charge +
      '\n' + current.sentence +
      '\n#CRAMPUS #GrinchesInTheTrenches\nhttps://egoshiftlabs.github.io/Crampus/#audit';
  }
  function audit() {
    var subject = cleanName();
    if (!subject) { input.focus(); status.textContent = 'THE DEMON NEEDS A NAME TO INVESTIGATE.'; return; }
    var inSeason = new Date().getMonth() >= 10;
    var allCharges = inSeason ? charges.concat(winterCharges) : charges;
    var allSentences = inSeason ? sentences.concat(winterSentences) : sentences;
    var charge = allCharges[randomInt(allCharges.length)];
    var sentence = allSentences[randomInt(allSentences.length)];
    var caseId = 'CR-' + new Date().getFullYear() + '-' + String(randomInt(90000) + 10000);
    current = { name:subject, charge:charge, sentence:sentence, caseId:caseId };
    nameBox.textContent = subject.toUpperCase();
    caseBox.textContent = caseId;
    chargeBox.textContent = charge;
    sentenceBox.textContent = sentence;
    [again, download, copy].forEach(function(button){ button.disabled = false; });
    share.classList.remove('is-disabled');
    share.setAttribute('aria-disabled','false');
    share.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(postText());
    status.textContent = 'RECEIPTS PULLED. APPEALS DEPARTMENT BEEN CLOSED. 😂';
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
    c.fillStyle='#d8af7d';c.font='bold 25px Arial,sans-serif';c.fillText('DEPARTMENT OF PETTY BUSINESS',540,198);
    c.strokeStyle='#957049';c.beginPath();c.moveTo(140,240);c.lineTo(940,240);c.stroke();
    c.fillStyle='#b82f40';c.font='bold 115px Georgia,serif';c.fillText('♈',540,370);
    c.fillStyle='#e1c19a';c.font='bold 25px Arial,sans-serif';c.fillText('THE OFFICIAL RECEIPT REPORT',540,434);
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
    c.fillText('THE BAG NEVER SLEEPS  •  #CRAMPUS',540,1265);
    var a=document.createElement('a');
    a.download='crampus-verdict-'+current.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.png';
    a.href=canvas.toDataURL('image/png');
    document.body.appendChild(a);a.click();a.remove();
    status.textContent='CARD READY. GO PUT SOMEBODY ON BLAST. 😂';
  });
})();

/* Official CA quick-copy: no network calls, transactions, or wallet connections */
(function () {
  'use strict';
  var btn=document.getElementById('copy-ca');
  var code=document.getElementById('token-ca');
  var note=document.getElementById('token-copy-feedback');
  if(!btn||!code||!note)return;
  btn.addEventListener('click',function(){
    var value=code.textContent.trim();
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(value).then(function(){
        note.textContent='CA COPIED. NOW YOU KNOW WHICH DEMON YOU LOOKING AT. 👹';
        btn.textContent='COPIED ✓';
      }).catch(function(){
        note.textContent='LONG-PRESS THE ADDRESS ABOVE TO COPY IT.';
      });
    }else{
      var selection=window.getSelection();
      var range=document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();selection.addRange(range);
      note.textContent='CA SELECTED. COPY IT FROM YOUR BROWSER.';
    }
  });
})();
