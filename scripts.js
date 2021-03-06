// ALL HOMEWORKS
function changePart(element) {
  let items = document.getElementsByClassName("part");
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
// END ALL HOMEWORKS

// FOR JQUERY
$(document).ready(function () {
  // HOMEWORK 2 JQUERY
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
  // END HOMEWORK 2 JQUERY

  // HOMEWORK 3 JQUERY
  $("#hw3part1form").submit(function (event) {
    event.preventDefault();
  });

  $("#salesperson").tooltip();
  $("#hw3part2form")
    .submit(function (event) {
      event.preventDefault();
    })
    .validate({
      rules: {
        salesperson: {
          required: true,
        },
        item1: {
          required: true,
          digits: true,
        },
        item2: {
          required: true,
          digits: true,
        },
        item3: {
          required: true,
          digits: true,
        },
        item4: {
          required: true,
          digits: true,
        },
      },
      messages: {
        item1: "Please input positive integers.",
        item2: "Please input positive integers.",
        item3: "Please input positive integers.",
        item4: "Please input positive integers.",
      },
      submitHandler: function (form) {
        calculateEarnings();
        return false;
      },
    });
  $("#hw3part3form")
    .submit(function (event) {
      event.preventDefault();
    })
    .validate({
      rules: {
        temperature: {
          required: true,
          number: true,
        },
      },
      submitHandler: function (form) {
        var name = $("input[type=submit][clicked=true]").attr("name");
        var temp = $("#temperature").val();
        calculateTemperature(name, temp);
        return false;
      },
    });
  $("#hw3part3form input[type=submit]").click(function () {
    $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
    $(this).attr("clicked", "true");
  });
  multiplyRandomZeroToNine();

  $("#hw3part4").submit(function (event) {
    event.preventDefault();
    var answer = $("#hw3part4answer").val();
    checkProduct(answer);
    $("#hw3part4answer").val("");
  });

  // END HOMEWORK 3 JQUERY

  // HOMEWORK 4 JQUERY
  $("#drag").draggable();

  $("#squareForm").submit(function (event) {
    event.preventDefault();
    var squareLength = $("#sideLength").val();
    generateSquare(squareLength);
  });
  // END HOMEWORK 4 JQUERY

  // HOMEWORK 5 JQUERY

  $("#hw5part1form").validate({
    rules: {
      hw5part1text: "required",
      hw5part1radio: "required",
      hw5part1cb: "required",
      hw5part1select: "required",
    },
    errorPlacement: function (error, element) {
      var elementForm = "",
        containerError = "";
      offset = element.offset();
      elementForm = element.attr("name");
      containerError = "#" + elementForm + "error";
      error.prependTo(containerError);
      error.addClass("message");
    },
    submitHandler: function () {
      var body = $("#hw5part1modalbody");
      var name = $(`<p>Name: ${$("#hw5part1text").val()}</p>`);
      var age = $(
        `<p>Age: ${$("input[name='hw5part1radio']:checked").val()}</p>`
      );
      var interests = $("<p></p>");
      var str = "Interests: ";
      $("input[name=hw5part1cb]:checked").each(function () {
        str = str + $(this).val() + ", ";
      });
      str = str.substring(0, str.length - 2);
      interests.text(str);
      var flavor = $(
        `<p>Flavor: ${$("#hw5part1select option:selected").text()}</p>`
      );
      body.append(name, age, interests, flavor);
      $("#hw5part1modal").modal();
      $("#hw5part1form")[0].reset();
    },
  });

  $("#hw5part1button").on("click", function () {
    var body = $("#hw5part1modalbody");
    body.empty();
    $("#hw5part1form").submit();
  });

  // END HOMEWORK 5 JQUERY

  // HOMEWORK 6 JQUERY

  $("#hw6part3input").mask("(000) 000-0000");

  // END HOMEWORK 6 JQUERY

  // HOMEWORK 7 JQUERY

  $('input:radio[name="radioBackground"]').change(function () {
    $("#hw7part1").removeClass("backgroundRed backgroundWhite backgroundBlue");
    $("#hw7part1").addClass(this.value);
  });

  $("select#fontFamily").change(function () {
    $("#hw7part1").removeClass("serif sansserif monospace");
    $("#hw7part1").addClass(this.value);
  });

  $("div#hw7checkbox input[type=checkbox]").change(function () {
    if ($(this).is(":checked")) {
      $("#hw7part1").addClass(this.value);
    } else {
      $("#hw7part1").removeClass(this.value);
    }
  });

  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );
  // END HOMEWORK 7 JQUERY

  $("#pokemonForm").submit(function (event) {
    event.preventDefault();
    var pokemon = $("#pokemon").val();
    searchPokemon(pokemon);
  });
});
// END JQUERY

// HOMEWORK 2
function exchangeRate() {
  var usValue = $("#us-value").val();
  usValue = parseFloat(usValue);
  if (Number.isNaN(usValue)) {
    $("#warning").removeClass("displayNone");
  } else {
    $("#warning").addClass("displayNone");
    $("#euro-value").text((usValue * 0.89).toFixed(2));
    $("#canada-value").text((usValue * 1.31).toFixed(2));
    $("#hk-value").text((usValue * 7.8).toFixed(2));
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
    document.forms["part2"].elements["result"].value = `The sum is ${
      num1 + num2 + num3
    }.\nThe average is ${((num1 + num2 + num3) / 3).toFixed(
      2
    )}.\nThe product is ${
      num1 * num2 * num3
    }.\nThe min is ${min}.\nThe max is ${max}.`;
  } else {
    document.forms["part2"].elements["result"].value =
      "Please enter integer numbers.";
  }
}

function processp3() {
  var p3num1,
    p3num2,
    p3num3,
    p3num4,
    p3num5,
    positive = 0,
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
  numArr.forEach((num) => {
    if (num < 0) {
      negative++;
    } else if (num == 0) {
      zero++;
    } else {
      positive++;
    }
  });
  if (
    !isNaN(p3num1) &&
    !isNaN(p3num2) &&
    !isNaN(p3num3) &&
    !isNaN(p3num4) &&
    !isNaN(p3num5)
  ) {
    document.forms["part3"].elements[
      "p3result"
    ].value = `Number of positive integers: ${positive}\nNumber of negative integers: ${negative}\nNumber of zeros: ${zero}`;
  } else {
    document.forms["part3"].elements["p3result"].value =
      "Please enter 5 integer numbers.";
  }
}

function calculateGrade() {
  var hwAvg = parseInt($("#hwAvg").val());
  var midExam = parseInt($("#midExam").val());
  var finalExam = parseInt($("#finalExam").val());
  var participation = parseInt($("#participation").val());
  var finalAvg =
    0.5 * hwAvg + 0.2 * midExam + 0.2 * finalExam + 0.1 * participation;
  if (
    !isNaN(hwAvg) &&
    !isNaN(midExam) &&
    !isNaN(finalExam) &&
    !isNaN(participation)
  ) {
    if (finalAvg <= 59) {
      $("#finalGrade").val(
        "Final grade: " +
          Math.round(finalAvg) +
          "\nStudent must retake the course."
      );
    } else if (finalAvg <= 69) {
      $("#finalGrade").val(
        "Final grade: " +
          Math.round(finalAvg) +
          "\nStudent must retake the course."
      );
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
// END HOMEWORK 2

// HOMEWORK 3
const item1price = 239.99;
const item2price = 129.75;
const item3price = 99.95;
const item4price = 350.89;

function calculateEarnings() {
  var item1 = parseInt($("#item1").val());
  var item2 = parseInt($("#item2").val());
  var item3 = parseInt($("#item3").val());
  var item4 = parseInt($("#item4").val());
  var totalSold = (
    item1 * item1price +
    item2 * item2price +
    item3 * item3price +
    item4 * item4price
  ).toFixed(2);
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
      newTemp = (9 / 5) * +temp + 32;
      $("#temperatureResult").val(Math.round(newTemp) + "F");
      break;
    }
    case "ftoc": {
      newTemp = (5 / 9) * (+temp - 32);
      $("#temperatureResult").val(Math.round(newTemp) + "C");
      break;
    }
  }
}

var product;

function multiplyRandomZeroToNine() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  $(".multiplicationQuestion").empty();
  $("#hw3part4response").empty();
  $(".multiplicationQuestion").html(`How much is ${num1} times ${num2}?`);
  product = num1 * num2;
  $(".multiplicationQuestion").append(`<form id='hw3part4'>
                                            <input type='number' id='hw3part4answer'>
                                            <input type="submit" value="SUBMIT">
                                        </form>`);
  $("#hw3part4answer").focus();
}

function checkProduct(userAnswer) {
  $("#hw3part4response").text("");
  $("#hw3part4response").html("<p class='green'>Very good!</p>");
  if (userAnswer == product) {
    $("#hw3part4response").html("<p class='green'>Very good!</p>");
    setTimeout(() => {
      var cont = confirm("Would you like to continue?");
      if (cont) {
        multiplyRandomZeroToNine();
      } else {
        $("#hw3part4response").html("<p>Bye!</p>");
      }
    }, 100);
  } else {
    $("#hw3part4response").html("<p class='red'>No. Please try again.</p>");
  }
}

// END HOMEWORK 3

// HOMEWORK 4
function fourthIntegerLoop(a, b) {
  var product = 1;
  var sum = 0;
  var productString = "";
  var sumString = "";
  for (var i = a; i <= b; i += 4) {
    product = product * i;
    productString = productString + " * " + i;
    sum = sum += i;
    sumString = sumString + " + " + i;
  }
  productString = productString.substring(3);
  sumString = sumString.substring(3);
  $("#hw4part1a").append(`<p>${productString} = ${product}</p>
                            <p>${sumString} = ${sum}</p>`);
}
fourthIntegerLoop(5, 21);

function thirdIntegerLoop(a, b) {
  var product = 1;
  var sum = 0;
  var productString = "";
  var sumString = "";
  var i = a;
  do {
    product = product * i;
    productString = productString + " * " + i;
    sum = sum += i;
    sumString = sumString + " + " + i;
    i += 3;
  } while (i <= b);
  productString = productString.substring(3);
  sumString = sumString.substring(3);
  $("#hw4part1b").append(`<p>${productString} = ${product}</p>
                            <p>${sumString} = ${sum}</p>`);
}
thirdIntegerLoop(3, 21);

function generateCoIntTable() {
  var container = $("#tableContainer");
  for (var r = 5; r <= 7; r++) {
    var table = $("<table>");
    table.addClass("interestTable");
    var tr = $("<tr>");
    tr.append("<th>Year</th><th>Amount on deposit</th><th>Interest Rate</th>");
    table.append(tr);
    for (var n = 1; n <= 10; n++) {
      var tr1 = $("<tr>");
      var amount = 1000 * Math.pow(1 + r / 100, n);
      amount = amount.toFixed(2);
      tr1.append("<td>" + n + "</td>");
      tr1.append("<td>" + amount + "</td>");
      tr1.append("<td>0.0" + r + "</td>");
      table.append(tr1);
    }
    container.append(table);
  }
}
generateCoIntTable();

function generateSquare(length) {
  var squareLocation = $("#squareLocation");
  squareLocation.empty();
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (i == 0 || i == length - 1 || j == 0 || j == length - 1) {
        squareLocation.append("*");
      } else {
        squareLocation.append("&nbsp;");
      }
    }
    squareLocation.append("<br>");
  }
}
// END HOMEWORK 4

// HOMEWORK 5
function hw5part2onchange(site) {
  window.location.href = site;
}

function hw5part2onclick() {
  if (document.getElementById("hw5part2onclick").value) {
    window.location.href = document.getElementById("hw5part2onclick").value;
  }
}

const stateInfoForm = document.getElementById("stateInfoForm");
if (stateInfoForm) {
  stateInfoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    $("#hw5part3results").empty();
    const stateArray = [
      ["al", "alabama", ["AL", "Alabama", "Montgomery", "4,887,871"]],
      ["ak", "alaska", ["AK", "Alaska", "Juneau", "737,438"]],
      ["az", "arizona", ["AZ", "Arizona", "Phoenix", "7,171,646"]],
      ["ar", "arkansas", ["AR", "Arkansas", "Little Rock", "3,010,825"]],
      ["ca", "california", ["CA", "California", "Sacramento", "39,557,045"]],
      ["co", "colorado", ["CO", "Colorado", "Denver", "5,694,564"]],
    ];
    var stateName = document.getElementById("stateName").value.trim();
    stateName = stateName.toLowerCase();
    var successMessage = $(
      "<p>Thanks for your inquiry, here is the information you requested: </p>"
    );
    var abbr = $("<p>State abbr: </p>");
    var name = $("<p>State name: </p>");
    var capital = $("<p>State capital: </p>");
    var population = $("<p>Population: </p>");
    for (var i = 0; i < stateArray.length; i++) {
      if (stateArray[i].includes(stateName)) {
        abbr.append(`<span>${stateArray[i][2][0]}</span>`);
        name.append(`<span>${stateArray[i][2][1]}</span>`);
        capital.append(`<span>${stateArray[i][2][2]}</span>`);
        population.append(`<span>${stateArray[i][2][3]}</span>`);
      }
    }
    if (abbr.text().length == 14) {
      $("#hw5part3results").append(
        successMessage,
        abbr,
        name,
        capital,
        population
      );
    } else {
      $("#hw5part3results").append(
        '<p class="error">That state does not exist in our database.</p>'
      );
    }
  });
}
// END HOMEWORK 5

// HOMEWORK 6

function hw6part1submit() {
  var input = document.getElementById("hw6part1input").value;
  var inputStr = input + "";
  var decimalPlaces = (inputStr.split(".")[1] || []).length;
  if (decimalPlaces < 4) {
    document.getElementById("hw6part1results").innerHTML =
      "Please enter a number with at least 4 decimal places.";
  } else {
    input = parseFloat(input);
    var integer = Math.round(input);
    var sqrt = Math.round(Math.sqrt(input));
    var tenths = input.toFixed(1);
    var hundredths = input.toFixed(2);
    var thousandths = input.toFixed(3);
    document.getElementById("hw6part1results").innerHTML = `Number: ${input}
Nearest Integer: ${integer}
Square root: ${sqrt}
Rounded to tenths: ${tenths}
Rounded to hundredths: ${hundredths}
Rounded to thousandths: ${thousandths}`;
  }
  return false;
}

function hw6part2submit() {
  var string = document.getElementById("hw6part2input").value.trim();
  var char = document.getElementById("hw6part2char").value;
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char) {
      count++;
    }
  }
  if (count == 0) {
    var myWindow = window.open("", "NoCharFound", "width=300,height=100");
    myWindow.document.write(`<p>No '${char}' were found in ${string}</p>`);
  } else {
    document.getElementById(
      "hw6part2results"
    ).value = `Number of ${char}: ${count}`;
  }
  return false;
}

function hw6part3submit() {
  var input = document.getElementById("hw6part3input").value;
  input = input.replace(/\(|\)/g, " ").replace(/-/g, " ");
  var inputArr = input.split(" ").filter((e) => {
    return e.trim().length > 0;
  });
  if (inputArr.length == 3) {
    document.getElementById("areacode").value = inputArr[0];
    document.getElementById("three").value = inputArr[1];
    document.getElementById("four").value = inputArr[2];
  }
  return false;
}

// END HOMEWORK 6

// HOMEWORK 7
if (window.location.hash) {
  var hash = window.location.hash.substring(1);
  var hw = hash.split(".")[0];
  var part = hash.split(".")[1];
  changePart(hw + part);
  var element = document.getElementById(hw + part + "nav");
  active(element, hw + "-nav");
}

// END HOMEWORK 7

function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "gethint.php?q=" + str, true);
    xmlhttp.send();
  }
}

function searchPokemon(str) {
  var pokemon = str.trim().toLowerCase();
  $.get("https://pokeapi.co/api/v2/pokemon/" + pokemon, function (
    data,
    status
  ) {
    $("#pokemonResults").empty();
    if (status == "success") {
      var name = $("<div class='card-text'>").text("Name: " + data.name);
      var types = $("<div class='card-text'>");
      var typesText = "Types: ";
      data.types.forEach((type) => {
        typesText += type.type.name + ", ";
      });
      typesText = typesText.slice(0, -2);
      types.text(typesText);
      $("#pokemonResults").append(name, types);
    }
  }).fail(function () {
    $("#pokemonResults").empty();
    $("#pokemonResults").append("<p>Not a valid Pokemon name.</p>");
  });
}
