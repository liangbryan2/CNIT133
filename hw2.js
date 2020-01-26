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