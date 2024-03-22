const editButton = document.querySelector('.editButton');

console.log("Hello");

editButton.addEventListener("click",(e)=>{
    console.log("clicked")
    console.log(e.target);
    let parent= e.target.parentNode;
    console.log(parent);
})