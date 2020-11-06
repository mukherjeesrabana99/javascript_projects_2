const addBtn=document.getElementById("add");
const container=document.getElementById("container");
addBtn.addEventListener("click", ()=>{
	addNote()
})
const addNote=()=>{
	let noteArea=document.createElement("div");
	noteArea.classList.add("noteArea");
	noteArea.innerHTML=`
	<div class="noteArea">
	<div class="toolsdiv">
	<button id="save-btn"><i id="icon" class="fa fa-save"></i></button>
	<button id="del-btn"><i class="fa fa-trash"></i></button>
	</div>
	<div class="saved-text-area hidden"></div>
	<textarea></textarea>
	</div>
	`;
	const saveBtn=noteArea.querySelector("#save-btn");
	const delBtn=noteArea.querySelector("#del-btn");
	const savedArea=noteArea.querySelector(".saved-text-area");
	const textArea=noteArea.querySelector("textarea");
	const icon=noteArea.querySelector("#icon");
	console.log(icon)
	saveBtn.addEventListener("click", (e)=>{
		savedArea.classList.toggle("hidden");
		textArea.classList.toggle("hidden");
		savedArea.innerText=textArea.value;
		console.log(savedArea.innerText)
	})
	delBtn.addEventListener("click", ()=>{
		//noteArea.remove();
		container.removeChild(noteArea)
	})


	container.appendChild(noteArea)
}