$(document).ready(function(){
 
  var x = 0;
  var content = '';
  var headEl = $('#head');
  var head = '';
  var headers = ['Oh, hey there!','Welcome to my Pen!', 'check it out at my website: elisebassett.com']; 
  var headLength = x;
  var lineCount = 0;
  
  function typeHeader() {
    head = headers[lineCount];
    headLength = head.length;
    if(lineCount < head.length) {
      type();
    }
    
  }//typeHeader
  
  function type() {
    headEl.html(head.substr(0, x++));
    if(x < headLength+1) {
      setTimeout(type, 100); 
      
    } else {
      erase();
    }
  }//typeEffect
  
  function erase() {
    content = headEl.html();
    console.log(content);
    headEl.html(content.substr(0, headLength--));
    if(headLength >= 0) {
      setTimeout(erase, 100);
    }
  }
  
  function cursorAnimation(){
    cursor = $('#cursor');
    cursor.fadeOut('fast');
    cursor.fadeIn('fast');
  }//cursor animation
  
  
  setInterval(cursorAnimation, 600);
  
  $('#go').click(function(){
    console.log('clicked');
    typeHeader();
    
  });//click go
 
  
});