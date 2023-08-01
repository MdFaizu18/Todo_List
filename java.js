const inputBox = document.querySelector('#input-box');
const listCont = document.querySelector('.list-container');

function addTask() {
    if(inputBox ===" "){
        alert("Please write your task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        

        // for cancellation cross bar on right side 
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span)
      

    }
    inputBox.value="" ;
}
listCont.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
   
}
)