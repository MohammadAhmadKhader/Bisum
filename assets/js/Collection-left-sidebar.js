let arrows_left_side_for_lists = document.querySelectorAll("[list-wrapper]");
let arrow_left_special = document.querySelectorAll('[special-wrapper]');

for(let i=0;i<arrows_left_side_for_lists.length;i++){
    arrows_left_side_for_lists[i].onclick = function(){
        this.classList.toggle("arrow-rotation");
        this.parentElement.parentElement.parentElement.querySelector("ul").classList.toggle("list-wrapper");
    }
}

for(let i=0;i<arrow_left_special.length;i++){
    arrow_left_special[i].onclick = function(){
        this.classList.toggle("arrow-rotation");
        console.log(this.parentElement.parentElement.parentElement.querySelector(".left-side-bar-price"))
        this.parentElement.parentElement.parentElement.querySelector(".left-side-bar-price").classList.toggle("list-wrapper");
    }
}
