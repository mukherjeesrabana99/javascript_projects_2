const form=document.querySelector(".todo-form");
const btn=document.querySelector(".btn");
let todo_input=document.querySelector(".todo-value");
const list=document.querySelector(".list");

btn.addEventListener("click", (e)=>{
	e.preventDefault();
	if(todo_input.value.length>=10){


	    alert("not more than 10 chars")
    }else{
    	alert("ok");
    }
	let para=document.createElement("p");
	para.innerHTML=todo_input.value.substr(0, 10);
	todo_input.value="";
	list.appendChild(para);
	para.classList.add("para")
	para.addEventListener("click", ()=>list.removeChild(para));
	

})
let today=new Date();
let day=""
switch(today.getDay()){
	case 0:
		day="Sunday";
		break;
		case 1:
		day="Monday";
		break;
	    case 2:
		day="Tuesday";
		break;
		case 3:
		day="Wednesday";
		break;
	    case 4:
		day="Thursday";
		break;
		case 5:
		day="Friday";
		break;
		case 6:
		day="Saturday";
		break;
	
}

document.querySelector(".date-container").innerHTML=`<h3>It's${day}</h3>`


