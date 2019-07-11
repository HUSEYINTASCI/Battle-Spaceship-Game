//intro timeout

var x = document.querySelector("#board");
setTimeout(function () {
    x.style.display = "none"
}, 30000);


//Table win image

var img = new Image();
img.src = "assets/images/enemy.jpg";

// Counters

var counterSpan = document.querySelector("#counterSpan1");
var counterSpan2 = document.querySelector("#counterSpan2");

// Catch counter

var counter2 = 0;
counterSpan2.innerText = counter2;

function increaseCounter2() {

    counter2++;
    counterSpan2.innerText = counter2;
}

// MISS Counter

var counter = 0;
counterSpan.innerText = counter;

function increaseCounter() {

    counter++;
    counterSpan.innerText = counter;
}

// General Counter

var counter3 = 0;

function increaseCounter3() {

    counter3++;
}




// User chose

//    User chose sound effect
function bomb(){
    var player= document.querySelector("#bbomb")
    player.play();}


var y;


function tik(clicked_id) {
    var i = clicked_id;

    function addimg() {
        y = document.querySelector("#" + i).innerHTML += '<img src="' + img.src + '" width="90px" height="50px" />';
    }

    function addtext() {
        y = document.querySelector("#" + i).innerHTML = "MISS";

    }

    if ((i == r0) || (i == r1) || (i == r2) || (i == r2) || (i == r3) || (i == r4) || (i == r5) || (i == r6) || (i == r7) || (i == r8) || (i == r9) || (i == r10)) {


        if (y = document.querySelector("#" + i).innerHTML.length == 0) {
            bomb();
            addimg();
            increaseCounter2();
            increaseCounter3();
            check();
        }


    } else if (y = document.querySelector("#" + i).innerHTML.length == 0) {
        addtext();
        increaseCounter();
        increaseCounter3();
        check();
    }
}



// Computer chose

var colleges = ["S0", " S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18", "S19", "S20", "S21", "S22", "S23", "S24", "S25", "S26", "S27", "S28", "S29", "S30", "S31", "S32", "S33", "S34", "S35"]

var r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10

function computer() {
    r0 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r1 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r2 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r3 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r4 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r5 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r6 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r7 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r8 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r9 = (colleges[Math.floor(Math.random() * colleges.length)]);
    r10 = (colleges[Math.floor(Math.random() * colleges.length)]);
}


computer();

//  Game of Win & Lose Elemet and Check

var yoda = document.querySelector("#win");
var darth_vader = document.querySelector("#lose");
var newgamebtn = document.querySelector("#newgame");
var n = 20;
var nu = 7;

function check() {


    if (counter + counter2 == n) {

        if (counter2 > nu) {

            yoda.style.display = "block";
            darth_vader.style.display = "none";
            debugger;
            newgamebtn.style.display = "block";

        } else {


            yoda.style.display = "none";
            darth_vader.style.display = "block";
            newgamebtn.style.display = "block";
        }

    }

}


// New Game Button

var t = document.querySelectorAll("td"),
    i;

function reloadThePage() {

    //Clean Table

    for (i = 0; i < t.length; ++i) {
        t[i].innerHTML = "";
    }

    //    New  Computer Chose
    computer();

    // New Counters
    counter = 0;
    counter2 = 0;
    counter3 = 0;
    counterSpan.innerText = counter;
    counterSpan2.innerText = counter2;

    // Win & Lose Pictures
    yoda.style.display = "none";
    darth_vader.style.display = "none";

    // Button display
    newgamebtn.style.display = "none";

}