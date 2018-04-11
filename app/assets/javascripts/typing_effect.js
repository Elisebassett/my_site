$(document).on('turbolinks:load', function(){
  $('.sub').hide();
});


$(document).ready(function(){

  var x = null;
  var content = '';
  var headEl = $('#head');
  var subEl = $('#sub');
  var string = '';
  var subString = '';
  // var strings = ['test 1', 'testasd 2', 'tedfsaastkjhkkjlkjlk 3'];
  var strings = ['Oh, hey there!','Welcome to my site!', "My name is Elise Bassett", "A Full Stack Web Developer"]; 
  var stringLength = 0;
  var lineCount = 0;
  
  function typeHeader() {
    x = 0;
    string = strings[lineCount];
    stringLength = string.length;
    
    if(lineCount < strings.length) {
      type();
      lineCount = lineCount + 1
    }
    console.log(lineCount, strings.length);
  }//typeHeader
  
  function type() {
    headEl.html(string.substr(0, x++));
    if(x < string.length + 1) {
      setTimeout(type, 120); 
    } else if(lineCount < strings.length - 1) {
      setTimeout(erase, 700);
    } else if(lineCount === strings.length - 1) {
      console.log('sub');
      $('#cursor_sub').addClass('cursor');
      $('#cursor_head').removeClass('cursor').remove();
      $('.sub').show();
      x = 0;
      subType();
    }//else ifs
  }//typeEffect

  function subType(){
    subString = strings[lineCount];
    subEl.html(subString.substr(0, x++));    
    if(x < subString.length + 1) {
      setTimeout(subType, 120); 
    }//ifelse
  }//subtype 
  
  function erase() {
    content = headEl.html();
    console.log(content);

    headEl.html(content.substring(0, stringLength--));
    if(stringLength >= 0) {
      setTimeout(erase, 100);
    } else if(lineCount < strings.length) {
      typeHeader();
    }//ifelse
  }
  
  function cursorAnimation(){
    cursor = $('.cursor');
    cursor.fadeOut('fast');
    cursor.fadeIn('fast');
  }//cursor animation
  

//// Document Ready


  
  setInterval(cursorAnimation, 600);
  typeHeader(); 



});