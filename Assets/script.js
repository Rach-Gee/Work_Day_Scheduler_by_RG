//redering time and date to current day ID
var today = moment().format('LLL');
$("#currentDay").text(today);

// local time for planner
var localTime = moment().format('HH');
console.log(localTime)

// save to local storage 
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var userInfo = $(this).prev().val();
    console.log(userInfo)
    localStorage.setItem($(this).prev().attr("id"), userInfo)
});

// change colors of schedule depending on local time for planner

$("input").each(function () {
    var time = parseInt($(this).attr("id"));
    if (time > localTime) {
        $(this).addClass("future")
    } else if (time == localTime) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("past")
    };
    $("#" + time).val(localStorage.getItem(time))
});