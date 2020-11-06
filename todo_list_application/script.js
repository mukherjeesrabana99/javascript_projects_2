const form=document.querySelector(".todo-form");
const btn=document.querySelector(".btn");
let todo_input=document.querySelector(".todo-value");
const items=[];
const list=document.querySelector(".list");
btn.addEventListener("click", ()=>{
	e.preventDefault();
	items.push(todo_input.value);
	items.forEach((item)=>{
		let todo_list=document.createElement("li");
		li.innerText=item
		todo_input.value=""
		list.appendChild(todo_list);
		todo_list.classList.add("para")
	})

})