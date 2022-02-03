moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');

$(".box1").text(time1);
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');

$(".box2").text(time2);
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');

$(".box3").text(time3);
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');

$(".box4").text(time4)
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');

$(".box5").text(time5)
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');

$(".box6").text(time6)
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');

$(".box7").text(time7)
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');

$(".box8").text(time8)
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');

$(".box9").text(time9);

$(".saveBtn").click(function () {
    Event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});