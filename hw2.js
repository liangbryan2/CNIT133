function changePart(element) {
    let items = document.getElementsByClassName('part');
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    document.getElementById(element).style.display = "block";
}

function active(element) {
    let items = document.getElementsByClassName('hw2-nav');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    element.classList.add("active");
}

$(document).ready(function () {
    $("#fade").click(function () {
        $("#result").fadeTo("slow", 0.4);
    })
    $("#reset").click(function () {
        $("#result").fadeTo("fast", 1);
    })
})

function process() {
    var num1, num2, num3, min, max;
    num1 = parseInt(document.forms["part2"].elements["num1"].value);
    num2 = parseInt(document.forms["part2"].elements["num2"].value);
    num3 = parseInt(document.forms["part2"].elements["num3"].value);
    min = Math.min(num1, num2, num3);
    max = Math.max(num1, num2, num3);
    if (typeof num1 != undefined && typeof num2 != undefined && typeof num3 != undefined) {
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
    if (typeof p3num1 != undefined && typeof p3num2 != undefined && typeof p3num3 != undefined && typeof p3num4 != undefined && typeof p3num5 != undefined) {
        document.forms["part3"].elements["p3result"].value =
            `Number of positive integers: ${positive}\nNumber of negative integers: ${negative}\nNumber of zeros: ${zero}`
    } else {
        document.forms["part3"].elements["p3result"].value = "Please enter 5 integer numbers.";
    }
}