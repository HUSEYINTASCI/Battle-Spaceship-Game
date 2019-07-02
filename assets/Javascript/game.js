
// win and lose element

function hide(id){
    var divObject=document.getElementById(id);
    divObject.style.display="none";
}
function show(id){
    var divObject=document.getElementById(id);
    divObject.style.display="block";
}	

// User chose

 


// Computer chose

var colleges = ["0","1","2","3","4","5","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]

        console.log(Math.random());
        console.log(Math.random()*colleges.length);
 
	    var ranIndex = Math.floor(Math.random()*colleges.length);
        console.log(colleges[Math.floor(Math.random()*colleges.length)]);    
        
         