function changePart(element) {
    let items = document.getElementsByClassName('part');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    document.getElementById(element).style.display = "block";
}

function active(element, hw) {
    let items = document.getElementsByClassName(hw);
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    element.classList.add("active");
}

$(document).ready(function () {
    $("#fade").click(function () {
        $("#result").fadeTo("slow", 0.4);
    });
    $("#reset").click(function () {
        $("#result").fadeTo("fast", 1);
    });
    $("#us-value").click(() => {
        $("#us-value").addClass("backgroundGray");
    });
    $("#instructions").click(function () {
        $("#ec-form").slideToggle("slow");
    });
    $("#ec-form").submit(function () {
        exchangeRate();
        return false;
    });
    $("#salesperson").tooltip();
    $("#hw3part2form").submit(function (event) {
        event.preventDefault();
    }).validate({
        rules: {
            salesperson: {
                required: true
            },
            item1: {
                required: true,
                digits: true
            },
            item2: {
                required: true,
                digits: true
            },
            item3: {
                required: true,
                digits: true
            },
            item4: {
                required: true,
                digits: true
            }
        },
        submitHandler: function (form) {
            calculateEarnings();
            return false;
        }
    });
    $("#hw3part3form").submit(function (event) {
        event.preventDefault();
    }).validate({
        rules: {
            temperature: {
                required: true,
                number: true
            }
        },
        submitHandler: function (form) {
            var name = $("input[type=submit][clicked=true]").attr("name");
            var temp = $("#temperature").val();
            calculateTemperature(name, temp);
            return false;
        }
    });
    $("#hw3part3form input[type=submit]").click(function () {
        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
        $(this).attr("clicked", "true");
    });
});

function exchangeRate() {
    var usValue = $("#us-value").val();
    usValue = parseFloat(usValue);
    if (Number.isNaN(usValue)) {
        $("#warning").removeClass("displayNone");
    } else {
        $("#warning").addClass("displayNone");
        $("#euro-value").text((usValue * 0.89).toFixed(2));
        $("#canada-value").text((usValue * 1.31).toFixed(2));
        $("#hk-value").text((usValue * 7.80).toFixed(2));
        $("#yen-value").text((usValue * 108.38).toFixed(2));
        $("#peso-value").text((usValue * 19.11).toFixed(2));
    }
}

function process() {
    var num1, num2, num3, min, max;
    num1 = parseInt(document.forms["part2"].elements["num1"].value);
    num2 = parseInt(document.forms["part2"].elements["num2"].value);
    num3 = parseInt(document.forms["part2"].elements["num3"].value);
    min = Math.min(num1, num2, num3);
    max = Math.max(num1, num2, num3);
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        document.forms["part2"].elements["result"].value =
            `The sum is ${num1 + num2 + num3}.\nThe average is ${((num1 + num2 + num3)/3).toFixed(2)}.\nThe product is ${num1 * num2 * num3}.\nThe min is ${min}.\nThe max is ${max}.`;
    } else {
        document.forms["part2"].elements["result"].value = "Please enter integer numbers.";
    }
}

function processp3() {
    var p3num1, p3num2, p3num3, p3num4, p3num5, positive = 0,
        negative = 0,
        zero = 0;
    var numArr = [];
    p3num1 = parseInt(document.forms["part3"].elements["p3num1"].value);
    numArr.push(p3num1);
    p3num2 = parseInt(document.forms["part3"].elements["p3num2"].value);
    numArr.push(p3num2);
    p3num3 = parseInt(document.forms["part3"].elements["p3num3"].value);
    numArr.push(p3num3);
    p3num4 = parseInt(document.forms["part3"].elements["p3num4"].value);
    numArr.push(p3num4);
    p3num5 = parseInt(document.forms["part3"].elements["p3num5"].value);
    numArr.push(p3num5);
    numArr.forEach(num => {
        if (num < 0) {
            negative++;
        } else if (num == 0) {
            zero++;
        } else {
            positive++;
        }
    })
    if (!isNaN(p3num1) && !isNaN(p3num2) && !isNaN(p3num3) && !isNaN(p3num4) && !isNaN(p3num5)) {
        document.forms["part3"].elements["p3result"].value =
            `Number of positive integers: ${positive}\nNumber of negative integers: ${negative}\nNumber of zeros: ${zero}`
    } else {
        document.forms["part3"].elements["p3result"].value = "Please enter 5 integer numbers.";
    }
}

function calculateGrade() {
    var hwAvg = parseInt($("#hwAvg").val());
    var midExam = parseInt($("#midExam").val());
    var finalExam = parseInt($("#finalExam").val());
    var participation = parseInt($("#participation").val());
    var finalAvg = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
    if (!isNaN(hwAvg) && !isNaN(midExam) && !isNaN(finalExam) && !isNaN(participation)) {
        if (finalAvg <= 59) {
            $("#finalGrade").val("Final grade: " + Math.round(finalAvg) + "\nStudent must retake the course.");
        } else if (finalAvg <= 69) {
            $("#finalGrade").val("Final grade: " + Math.round(finalAvg) + "\nStudent must retake the course.");
        } else if (finalAvg <= 79) {
            $("#finalGrade").val("Final grade: " + Math.round(finalAvg));
        } else if (finalAvg <= 89) {
            $("#finalGrade").val("Final grade: " + Math.round(finalAvg));
        } else {
            $("#finalGrade").val("Final grade: " + Math.round(finalAvg));
        }
    } else {
        $("#finalGrade").val("Please enter valid grades.");
    }
}
const item1price = 239.99;
const item2price = 129.75;
const item3price = 99.95;
const item4price = 350.89;

function calculateEarnings() {
    var item1 = parseInt($("#item1").val());
    var item2 = parseInt($("#item2").val());
    var item3 = parseInt($("#item3").val());
    var item4 = parseInt($("#item4").val());
    var totalSold = (item1 * item1price + item2 * item2price + item3 * item3price + item4 * item4price).toFixed(2);
    var commission = (totalSold * 0.09).toFixed(2);
    var weeklyEarnings = (200 + +commission).toFixed(2);
    if (!isNaN(item1) && !isNaN(item2) && !isNaN(item3) && !isNaN(item4)) {
        $("#numberSold1").val(item1);
        $("#total1").val((item1 * item1price).toFixed(2));
        $("#numberSold2").val(item2);
        $("#total2").val((item2 * item2price).toFixed(2));
        $("#numberSold3").val(item3);
        $("#total3").val((item3 * item3price).toFixed(2));
        $("#numberSold4").val(item4);
        $("#total4").val((item4 * item4price).toFixed(2));
        $("#totalSold").val(totalSold);
        $("#totalEarnings").val(weeklyEarnings);
    }
}

function calculateTemperature(name, temp) {
    var newTemp;
    switch (name) {
        case "ctof": {
            newTemp = (9 / 5 * +temp) + 32;
            $("#temperatureResult").val(Math.round(newTemp) + "F");
            break;
        }
        case "ftoc": {
            newTemp = 5 / 9 * (+temp - 32);
            $("#temperatureResult").val(Math.round(newTemp) + "C");
            break;
        }
    }
}