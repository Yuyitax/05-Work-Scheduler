// Global Variables
var allTextAreas = $('.textarea')
var saveInput = $('.saveBtn');


// Save input to local Storage
saveInput.on('click', function(event){
event.preventDefault()
var text = $(this).siblings('textarea').val()
var time = $(this).siblings('div').text()
console.log(text, time)
localStorage.setItem(time, text);

}) 



//Current Time and Date
var currentTime = function () {
    document.getElementById('currentTime').innerText = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(currentTime, 1000);


// Setting the time by color
allTextAreas.each(function(){

var blockHour = parseInt($(this).parent().attr('id').split('-')[1])
console.log(blockHour)
var currentHour = moment().hour()
console.log(currentHour)




  if (currentHour === blockHour) {
  $(this).removeClass('past');
  $(this).removeClass('future');
  $(this).addClass('present');
} else if (currentHour < blockHour) {
  $(this).removeClass('past');
  $(this).removeClass('present');

  $(this).addClass('future');
 
} else {
  $(this).removeClass('future');
  $(this).removeClass('present');

  $(this).addClass('past');
}
}) 
// Not working:
// var allTextAreas = $('.textarea')

// for (var i = 0; i < currentTime; i++) {

//   if (currentTime > time) {
//   $(allTextAreas).addClass('future');
// }else if (currentTime === time) {
//   $(allTextAreas).addClass('present');
// } else {
//   $(allTextAreas).addClass('past');
// }
// }
