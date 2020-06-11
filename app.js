var count = document.getElementById('count');
var comment = document.getElementById('comment');
var countleft=document.getElementById('countleft');
var userlimit=document.getElementById('limit');
var globalWordCounter = 0;
var WORD_LIMIT;
userlimit.addEventListener('input',function(e){
    if(e.target.value<=0 || null){
        WORD_LIMIT=60;
        }
        else{
            WORD_LIMIT=e.target.value;     }


})
comment.addEventListener('keyup', function(e){
    wordCounter(e.target.value);
  });
comment.addEventListener('keydown', function(e) {
    if (globalWordCounter > WORD_LIMIT && e.code !== "Backspace") {
      e.preventDefault();
      return alert("You have reached the word limit");
    }
  });
function wordCounter(text) {
    var text = comment.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
        wordCount++;
      }
    }
    globalWordCounter = wordCount;
    count.innerText = wordCount;
    if(WORD_LIMIT-wordCount>=0){
    countleft.innerText = WORD_LIMIT-wordCount;}
    
    
  }
function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  }
  