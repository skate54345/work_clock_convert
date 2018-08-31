//1 - copy code below
//2 - inspect a "punch total" element in browser
//3 - open dev tools console and paste code

///////////////////////////////////////////////////////////////////////////////
var punchTotal = document.querySelectorAll('[id^=PUNCH_TOTAL]');
var weekTotal = document.querySelector('[id^=DERIVED_TL_WEEK_TL_QUANTITY]');
var time;
var shift = 1;
for(var i in punchTotal){
  time = punchTotal[i].innerText;
  if(time){
    var hrs = time.toString().split(".")[0];
    var hundredth = time * 100 % 100;
    var mins = Math.floor((hundredth/100)*60);
    if(mins!=0){
      console.log('shift '+ shift + ': '+ hrs + 'h ' + mins + 'm');
    }
    shift++;
  }
}
if(weekTotal.innerText){
  var hrs = weekTotal.innerText.toString().split(".")[0];
  var hundredth = weekTotal.innerText * 100 % 100;
  var mins = Math.floor((hundredth/100)*60);
  console.log('total  : ' + hrs + 'h ' + mins + 'm');
}
///////////////////////////////////////////////////////////////////////////////
