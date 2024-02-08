// Start of Carrousels Main Page

// Clients and Blogs carousels
let clients = document.getElementById("clients");
let slow_show_carousel_btns_clients; 
let fast_show_carousel_btns_clients;

let blogs = document.getElementById("blogs");
let slow_show_carousel_btns_blogs;
let fast_show_carousel_btns_blogs;

// Clients part

clients.onmouseenter = function(){
    slow_show_carousel_btns_clients = clients.querySelector('[slow-disappear]');
    fast_show_carousel_btns_clients = clients.querySelector('[fast-disappear]');
    
    slow_show_carousel_btns_clients.style.transition = "0s";
    fast_show_carousel_btns_clients.style.transition = "0s";

    slow_show_carousel_btns_clients.style.opacity = "1";
    fast_show_carousel_btns_clients.style.opacity = "1";
    slow_show_carousel_btns_clients.style.visibility = "visible";
    fast_show_carousel_btns_clients.style.visibility = "visible";
}

clients.onmouseleave = function(){
    slow_show_carousel_btns_clients = clients.querySelector('[slow-disappear]');
    fast_show_carousel_btns_clients = clients.querySelector('[fast-disappear]');

    slow_show_carousel_btns_clients.style.transition = "0.4s 0.3s";
    fast_show_carousel_btns_clients.style.transition = "0.4s";

    slow_show_carousel_btns_clients.style.opacity = "0";
    fast_show_carousel_btns_clients.style.opacity = "0";
    slow_show_carousel_btns_clients.style.visibility = "hidden";
    fast_show_carousel_btns_clients.style.visibility = "hidden";
    
    
}

// Blogs part
blogs.onmouseenter = function(){
    slow_show_carousel_btns_blogs = blogs.querySelector('[slow-disappear]');
    fast_show_carousel_btns_blogs = blogs.querySelector('[fast-disappear]');

    slow_show_carousel_btns_blogs.style.transition = "0s";
    fast_show_carousel_btns_blogs.style.transition = "0s";

    slow_show_carousel_btns_blogs.style.opacity = "1";
    fast_show_carousel_btns_blogs.style.opacity = "1";
    slow_show_carousel_btns_blogs.style.visibility = "visible";
    fast_show_carousel_btns_blogs.style.visibility = "visible";
    
}

blogs.onmouseleave = function(){
    slow_show_carousel_btns_blogs = blogs.querySelector('[slow-disappear]');
    fast_show_carousel_btns_blogs = blogs.querySelector('[fast-disappear]');
    
    
    slow_show_carousel_btns_blogs.style.transition = "0.4s 0.5s";
    fast_show_carousel_btns_blogs.style.transition = "0.4s";

    slow_show_carousel_btns_blogs.style.opacity = "0";
    fast_show_carousel_btns_blogs.style.opacity = "0";
    slow_show_carousel_btns_blogs.style.visibility = "hidden";
    fast_show_carousel_btns_blogs.style.visibility = "hidden";
 }

//  Main Carrousel

let main_carousel = document.getElementById("main-carousel");
let main_carousel_right_arrow;
let main_carousel_left_arrow ;


main_carousel.onmouseenter = function(){
    if(window.innerWidth > 767){
        main_carousel_right_arrow = main_carousel.querySelector("[main-carousel-right-arrow]");
        main_carousel_left_arrow =  main_carousel.querySelector("[main-carousel-left-arrow]");
        main_carousel_right_arrow.style.opacity = "1" ;
        main_carousel_left_arrow.style.opacity = "1" ;
    }
}

main_carousel.onmouseleave = function(){
    if(window.innerWidth > 767){
        main_carousel_right_arrow.style.opacity =  "0" ;
        main_carousel_left_arrow.style.opacity = "0" ;
    }
}
// End of Carousels main page


// Start of Modal

let modalCloseBtn = document.getElementById("modal-close-btn");
let Modal = modalCloseBtn.parentElement.parentElement.parentElement;
let Modal_Layer = Modal.querySelector('[Modal-layer]');

setTimeout(function(){
    Modal.classList.remove("d-none");
    document.body.classList.add("overflow-hidden");
},3000)
modalCloseBtn.onclick = function(){
    Modal.remove();
    document.body.classList.remove("overflow-hidden");
}
Modal_Layer.onclick = function(){
    this.parentElement.remove();
    document.body.classList.remove("overflow-hidden");
}
// End of Modal

// Start of Navigation functionality for some buttons

let navToShopBtns = document.querySelectorAll("[navToShop]");
let navToBlogDetailsBtns = document.querySelectorAll("[navToBlogDetails]");

for(let i=0;i<navToShopBtns.length;i++){
    navToShopBtns[i].onclick = function(){
        window.location.href = "collection-left-sidebar.html";
    }
}

for(let i=0;i<navToBlogDetailsBtns.length;i++){
    navToBlogDetailsBtns[i].onclick = function(){
        window.location.href = "BlogsDetails.html";
    }
}

// End of Navigation functionality for some buttons

// Start of video marketing

const videoCloseBtn = document.querySelector(".video-marketing .btn-close");
videoCloseBtn.onclick = (e)=>{
    const iframe = e.target.closest(".video-marketing").querySelector("iframe");
    const url = "https://www.youtube.com/embed/tvPnrfQCiCo";
    
    iframe.src = "";
    iframe.src = url;
}

const startVideoBtn = document.querySelector('.video-marketing button');
startVideoBtn.onclick = ()=>{
    let modal = document.querySelector(".modal-backdrop");
    modal.onclick = (e)=>{
        const closeBtn = e.target.closest("body").querySelector(".video-marketing .btn-close");
        closeBtn.click();
    }
}

// End of video marketing