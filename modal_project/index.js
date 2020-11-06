const toys=[
{
	'image':'toy1.png',
	'name':'toy1',
	'price':5,
},
{
	'image':'toy2.png',
	'name':'toy2',
	'price':10,
},
{
	'image':'toy3.png',
	'name':'toy3',
	'price':10,
}, 
{
	'image':'toy4.png',
	'name':'toy4',
	'price':5,
}
]



const modal_btn=document.querySelector("#modal-btn")
const modal_container=document.querySelector(".modal-container")
const toy_container=document.querySelector("#toy-container")
const close_btn=document.querySelector("#close-btn")
const prev_btn=document.querySelector("#prev-btn")
const next_btn=document.querySelector("#next-btn")
const random_btn=document.querySelector("#random-btn")
modal_btn.addEventListener("click", ()=>modal_container.classList.remove("hidden"))
close_btn.addEventListener("click", ()=>modal_container.classList.add("hidden"))
let index=0

prev_btn.addEventListener("click", ()=>{
	console.log("prev btn clicked")
	index--
	if(index<0){
		index=toys.length-1
	}
	showToy(index)
})
next_btn.addEventListener("click", ()=>{
	console.log("next btn clicked")
	index++
	if(index>toys.length){
		index=0
	}
	showToy(index)
})
showToy=(curindex)=>{
	toy_container.innerHTML=`
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${toys[curindex].image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${toys[curindex].name}</p>
    <h6 class="card-text">${toys[curindex].price}</h6>
  </div>
</div>
	`
}