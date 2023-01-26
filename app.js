//----------click function for resetting the notifications
document.querySelector(".all-read").addEventListener("click", function(){
//----------VARIABLES 
var elem = document.querySelectorAll(".fa-circle");
var number = document.querySelector(".number")
var notification = document.querySelectorAll(".notification")
//----------NOTIFICATION COUNTER
number.innerHTML = "0";
   
//----------FOR LOOP FOR REMOVING THE RED CIRLCE AND TO ADD THE WHITEBACKGROUND
    for(let i = 0; i< elem.length; i++){
        elem[i].classList.remove("fa-circle")
    }

    for(let i = 0; i< notification.length; i++){
        notification[i].classList.add("white-background")
    }
})


