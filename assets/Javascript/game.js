
// win and lose element

function hide(id){
    var divObject=document.getElementById(id);
    divObject.style.display="none";
}
function show(id){
    var divObject=document.getElementById(id);
    divObject.style.display="block";
}	

//intro timeout
 
var y = document.querySelector("#intro");
setTimeout(function(){ y.style.display = "none" }, 5000);
var x = document.querySelector("#board");
setTimeout(function(){ x.style.display = "none" }, 60000);



   
// User chose


var i = document.querySelector("img");

function hideImage(){
    if (event.key == "k"){
        i.classList.add('hide');
    }
}

document.onkeypress = hideImage;


// document.onmouseup = function(event) {
//     console.log('click')
// }

// i.addEventListener("mouseup", function(event) {
//     i.classList.add('hide');
//     document.mouseup=hideImage;
//     })

// Computer chose

var colleges = ["s0","s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13","s14","s15","s16","s17","s18","s19","s20","s21","s22","s23","s24","s25","s26","s27","s28","s29","s30","s31","s32","s33","s34","s35"]

        console.log(Math.random());
        console.log(Math.random()*colleges.length);
 
	    var com = Math.floor(Math.random()*colleges.length);
        console.log(colleges[Math.floor(Math.random()*colleges.length)]);    
        
         