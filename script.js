const timeLine = document.getElementById("timeline");
const prev = document.getElementById("next");
const next = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
let step = 1;
function mainCode(){
    circles.forEach((circles,index)=>{
        if(index < step){
            circles.classList.add("active");

        }else{
            circles.classList.remove("active");
        }

        });
        const actives = document.querySelectorAll(".active");
        timeLine.style.width =`${
            ((actives.length -1)/(circles.length -1))*100

        }%`;
        if(step === 1){
        prev.disabled = true;




            // prev.disabled = true;
        } else if(step === circles.length){
            next.innerText = "Finesh"
            next.style.background = "green";
        }
        else {
            prev.disabled = false;
            next.disabled = false;
        }
        if(next.innerText == "Finesh"){
            next.addEventListener("click", function(){
                alert("You Have Fineshed Successfully!");
            });

            
        }






    }




next.addEventListener("click", ()=> {
    step++;
    if(step > circles.length){
        step = circles.length;

    }
    mainCode();

});

prev.addEventListener("click", ()=> {
    next.style.background = "red";
    next.innerText = "Next";
    step--;
    if(step< 1){
        step = 1;
    }
    mainCode();
});