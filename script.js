var hoursSp = document.getElementById("hours");
var minSp = document.getElementById("min");
var secSp = document.getElementById("sec");

setInterval(() => {
    var time = new Date();

    if (time.getHours() < 12) {
        hoursSp.innerText = time.getHours();
        minSp.innerText = time.getMinutes();
        secSp.innerText = time.getSeconds() + " AM";
    } else {
        hoursSp.innerText = time.getHours() - 12;
        minSp.innerText = time.getMinutes();
        secSp.innerText = time.getSeconds() + " PM";
    }
}, 1000);
