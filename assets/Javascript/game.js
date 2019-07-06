//intro timeout
var x = document.querySelector("#board");
setTimeout(function () {
    x.style.display = "none"
}, 60000);



// User chose

//Table win image
var img = new Image();
img.src = "assets/images/enemy.jpg";

// Counters
var counterSpan = document.querySelector("#counterSpan1");
var counterSpan2 = document.querySelector("#counterSpan2");


var counter2 = 0;
counterSpan2.innerText = counter2;

function increaseCounter2() {

    counter2++;
    counterSpan2.innerText = counter2;
}

var counter = 0;
counterSpan.innerText = counter;

function increaseCounter() {

    counter++;
    counterSpan.innerText = counter;
}

var counter3 = 0;

function increaseCounter3() {

    counter3++;


}




// User chose

function tik(clicked_id) {
    var i = clicked_id;



    if (i == r0) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r1) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r2) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r3) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r4) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r5) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r6) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r7) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r8) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r9) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else if (i == r10) {
        var y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
        increaseCounter2();
        increaseCounter3();
        bak();
    } else {
        var y = document.querySelector("#" + i).innerHTML = "MISS";
        increaseCounter();
        increaseCounter3();
        bak();
    }
}


// Computer chose

var colleges = ["S0", " S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18", "S19", "S20", "S21", "S22", "S23", "S24", "S25", "S26", "S27", "S28", "S29", "S30", "S31", "S32", "S33", "S34", "S35"]

console.log(Math.random());
console.log(Math.random() * colleges.length);

var com = Math.floor(Math.random() * colleges.length);
var r0 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r1 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r2 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r3 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r4 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r5 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r6 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r7 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r8 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r9 = (colleges[Math.floor(Math.random() * colleges.length)]);
var r10 = (colleges[Math.floor(Math.random() * colleges.length)]);

//  Game of Win & Lose Elemet

var yoda = document.querySelector("#win");
var darth_vader = document.querySelector("#lose");


function y() {

    yoda.style.display = "block";
    darth_vader.style.display = "none";

}

function d() {
    yoda.style.display = "none";
    darth_vader.style.display = "block";



}

function bak() {
    var n = 20;

    if (counter3 == n) {
        var nu = 8;
        if (counter2 == nu) {

            y();


        } else if (counter > counter2) {


            d();

        }

    } else {


    }

}
