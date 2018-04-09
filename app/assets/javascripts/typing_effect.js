$(document).ready(function(){
  var x = null;
  var content = '';
  var headEl = $('#head');
  var head = '';
  var headers = ['Oh, hey there!','Welcome to my site!', "My name is Elise Bassett. I'm a Full Stack Web Developer"]; 
  var headLength = 0;
  var lineCount = 0;
  
  function typeHeader() {
    x = 0;
    head = headers[lineCount];
    headLength = head.length;
    
    if(lineCount < headers.length) {
      type();
      lineCount = lineCount + 1
    }
    console.log(lineCount, headers.length);
  }//typeHeader
  
  function type() {
    headEl.html(head.substr(0, x++));
    if(x < head.length + 1) {
      setTimeout(type, 100); 
    } else if(lineCount < headers.length) {
      erase();
    }
  }//typeEffect
  
  function erase() {
    content = headEl.html();
    console.log(content);
    headEl.html(content.substring(0, headLength--));
    if(headLength >= 0) {
      setTimeout(erase, 100);
    } else if(lineCount < headers.length) {
      typeHeader();
    }
  }
  
  function cursorAnimation(){
    cursor = $('#cursor');
    cursor.fadeOut('fast');
    cursor.fadeIn('fast');
  }//cursor animation
  
  
  setInterval(cursorAnimation, 600);
  typeHeader(); 

});