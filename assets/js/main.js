// Start of navbar

//Getters for arrows to control the navigation in navbar

let navbar_offCanvas = document.querySelector("[navbar-Offcanvas]");
let arrows_first_layer_home = navbar_offCanvas.querySelector('[navbar-zip-1st]');
let home_list = navbar_offCanvas.querySelector('[list_Of_home]');
let back_arrows_style_1 = navbar_offCanvas.querySelectorAll('[back-arrow-style-1]');
let back_arrows_style_2 = navbar_offCanvas.querySelectorAll('[back-arrow-style-2]'); // Must be deleted

let arrows_first_layer_Shope = navbar_offCanvas.querySelector('[shop-arrow-list]');
let shop_list = navbar_offCanvas.querySelector('[shop-list]');

let arrows_first_layer_Pages = navbar_offCanvas.querySelector('[pages-arrow-list]');
let pages_list = navbar_offCanvas.querySelector('[pages-list]');

let category_pages_list = navbar_offCanvas.querySelector('[category-pages]');
let arrow_category_pages_list = navbar_offCanvas.querySelector('[category-pages-list]');

let product_pages_list = navbar_offCanvas.querySelector('[product-pages]');
let arrows_arrow_product_pages = navbar_offCanvas.querySelector('[product-pages-arrow]');

let product_layouts_list = navbar_offCanvas.querySelector('[product-layouts]');
let arrows_arrow_product_layouts = navbar_offCanvas.querySelector('[product-layouts-arrow]');

// Start ofArrow controlling the responsive navigation in navbar

arrows_arrow_product_pages.onclick = function(){
    product_pages_list.style.width = "100%";
    product_pages_list.style.zIndex =  "10";
}

arrows_arrow_product_layouts.onclick = function(){
    product_layouts_list.style.width = "100%";
    product_layouts_list.style.zIndex =  "10";
}



arrow_category_pages_list.onclick = function(){
    category_pages_list.style.width = "100%";
    category_pages_list.style.zIndex =  "10";
}


arrows_first_layer_Pages.onclick = function(){
    pages_list.style.width = "100%";
    pages_list.style.zIndex =  "10";
}

arrows_first_layer_Shope.onclick = function(){
    shop_list.style.width = "100% ";
    shop_list.style.zIndex =  "10";
}


arrows_first_layer_home.onclick = function(){
    home_list.style.width = "100% ";
    home_list.style.zIndex =  "10";
}
// End of Arrow controlling the responsive navigation in navbar

for(let i =0;i<back_arrows_style_1.length;i++){
back_arrows_style_1[i].onclick = function(){
    let parent = this.parentElement.parentElement;
    parent.style.width = "0%";
}
}

for(let i =0;i<back_arrows_style_2.length;i++){
    back_arrows_style_2[i].onclick = function(){
        let parent = this.parentElement.parentElement.parentElement;
        parent.style.width = "0%";
    }
}

//heart icon 
 let heart_icon = document.querySelector('[heart_icon]')
    heart_icon.onclick = function(){
    window.location.href = "wishlist.html";
}

// Image click
let navbar_logo = document.getElementById("bisum-nav-logo");
navbar_logo.onclick = function(){
    window.location.href = "index.html";
}


// Start of hidden lists of nav-tabs
//Home tab and list
let nav_home_list = document.getElementById("nav-home-list");
let home_tab = nav_home_list.parentElement;

home_tab.onmouseenter = function(){
    nav_home_list.classList.remove('noOpacity');
    nav_home_list.style.transform = "translateY(19px)";
   
    
}
home_tab.onmouseleave =function(){
    nav_home_list.classList.add('noOpacity');
    nav_home_list.style.transform = "translateY(0px)";
    
    
}

let homeList_enter;
home_tab.addEventListener("mouseenter",()=>{
    
    clearTimeout(homeList_leave);
    homeList_enter = setTimeout( ()=>{

        nav_home_list.classList.remove("invisible");
        nav_home_list.classList.add("visible");

    },50)
    
})

let homeList_leave;
home_tab.addEventListener("mouseleave",()=>{

    clearTimeout(homeList_leave);
    homeList_leave = setTimeout( ()=>{

        nav_home_list.classList.remove("visible");
        nav_home_list.classList.add("invisible");

    },300) 
    
})


//Shop tab and list
let nav_shop_list = document.getElementById("nav-shop-list");
let shop_tab = nav_shop_list.previousElementSibling;

shop_tab.onmouseenter = function(){
    nav_shop_list.classList.remove('noOpacity');
    nav_shop_list.style.transform = "translateY(0px)";
    
}

let ShopTimer;
shop_tab.onmouseleave =function(){
    clearTimeout(ShopTimer);
    ShopTimer = setTimeout(()=>{ 
        nav_shop_list.classList.add('noOpacity');
        nav_shop_list.style.transform = "translateY(-25px)"
    },300)
      
}

let shopList_enter;
shop_tab.addEventListener("mouseenter",()=>{
    
    clearTimeout(shopList_leave);
    shopList_enter = setTimeout( ()=>{

        nav_shop_list.classList.remove("invisible");
        nav_shop_list.classList.add("visible");

    },50)
    
})

let shopList_leave;
shop_tab.addEventListener("mouseleave",()=>{

    clearTimeout(shopList_leave);
    shopList_leave = setTimeout( ()=>{

        nav_shop_list.classList.remove("visible");
        nav_shop_list.classList.add("invisible");

    },1300) 
    
})

nav_shop_list.addEventListener("mousemove",()=>{ //* <=== this requires throttle in future

    clearTimeout(shopList_leave);
    clearTimeout(ShopTimer);
    shopList_leave = setTimeout( ()=>{
        
        nav_shop_list.classList.add('noOpacity');
        nav_shop_list.style.transform = "translateY(-25px)"
        nav_shop_list.classList.remove("visible");
        nav_shop_list.classList.add("invisible");

    },900) 
})


//Blog tab and list
let nav_blog_list = document.getElementById("nav-blog-list");
let blog_tab = nav_blog_list.parentElement;


blog_tab.onmouseenter = function(){
    nav_blog_list.classList.remove('noOpacity');
    nav_blog_list.style.transform = "translateY(0px)";
}
blog_tab.onmouseleave =function(){
    nav_blog_list.classList.add('noOpacity');
    nav_blog_list.style.transform = "translateY(-25px)";
}

let blogList_enter;
blog_tab.addEventListener("mouseenter",()=>{
    
    clearTimeout(blogList_leave);
    blogList_enter = setTimeout( ()=>{

        nav_blog_list.classList.remove("invisible");
        nav_blog_list.classList.add("visible");

    },50)
    
})

let blogList_leave;
blog_tab.addEventListener("mouseleave",()=>{

    clearTimeout(blogList_leave);
    blogList_leave = setTimeout( ()=>{

        nav_blog_list.classList.remove("visible");
        nav_blog_list.classList.add("invisible");

    },300) 
    
})

//Pages tab and list
let nav_pages_list = document.getElementById("nav-pages-list");
let pages_tab = nav_pages_list.parentElement;

pages_tab.onmouseenter = function(){
    nav_pages_list.classList.remove('noOpacity');
    nav_pages_list.style.transform = "translateY(14.7px)";
}
pages_tab.onmouseleave =function(){
    nav_pages_list.classList.add('noOpacity');
    nav_pages_list.style.transform = "translateY(-25px)";
}

let pagesList_enter;
pages_tab.addEventListener("mouseenter",()=>{
    
    clearTimeout(pagesList_leave);
    pagesList_enter = setTimeout( ()=>{

        nav_pages_list.classList.remove("invisible");
        nav_pages_list.classList.add("visible");

    },50)
    
})

let pagesList_leave;
pages_tab.addEventListener("mouseleave",()=>{

    clearTimeout(pagesList_leave);
    pagesList_leave = setTimeout( ()=>{

        nav_pages_list.classList.remove("visible");
        nav_pages_list.classList.add("invisible");

    },300) 
    
})

// Featured collection navigation inside navbar
let featuredCollectionDiv = document.querySelector(".featured-collection");
let imageOfFeaturedCollection = featuredCollectionDiv.querySelector("img");
let titleNextFeaturedCollectionImage =  imageOfFeaturedCollection.nextElementSibling;

imageOfFeaturedCollection.onclick = function(){
    window.location.href="Collection-left-sidebar.html";
}
titleNextFeaturedCollectionImage.onclick = function(){
    window.location.href="Collection-left-sidebar.html";
}
// End of navbar

// start of scroll up button

let scroll_up_buttom = document.getElementById("scroll-top-page-btn");
window.onscroll = function(){
if(window.scrollY >= 700){
    scroll_up_buttom.classList.remove("d-none");
}else{
    scroll_up_buttom.classList.add("d-none");
}
}
scroll_up_buttom.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

// End of scroll up button


// start of search drop down

let search_dropdown = document.querySelector('[search-dropdown]');
let search_icon = document.querySelectorAll('[search-icon]');
let search_close_btn = search_dropdown.querySelector('[close-btn]');

//close button functionality
search_close_btn.onclick = function(){
    search_dropdown.style.height = "0px";
    search_dropdown.style.opacity= "0";
    flag_searchdrop--;
}

//search click functionality
let flag_searchdrop = 0;
for(let i=0;i<search_icon.length;i++){
    search_icon[i].onclick = function(){
    if(flag_searchdrop==0){
        search_dropdown.style.height = "60px";
        search_dropdown.style.opacity = "1";
        flag_searchdrop++;
    }
    else{
        search_dropdown.style.height = "0px";
        search_dropdown.style.opacity= "0";
        flag_searchdrop--;
    }
   }
}

// End of search drop down




// Plus and minus functionality on all the website
let counter = document.querySelectorAll('[counter]');
let minus_sign = document.querySelectorAll('[counter-Minus]');
let positive_sign = document.querySelectorAll('[counter-Plus]');

// Minus functionality
for(let i=0;i<minus_sign.length;i++){
minus_sign[i].onclick = function(){
    let parent = this.parentElement;
    let value = parent.querySelector('[counter]').value;
    if(value > 0){
    value = value -1;
    parent.querySelector('[counter]').value = value;
    }else{
        value=0;
    }
}
}

if(counter.value !== typeof(1)){
    counter.value = "";
}
// Plus functionality
for(let i=0;i<positive_sign.length;i++){
positive_sign[i].onclick = function(){
    let parent = this.parentElement;
    let value = parent.querySelector('[counter]').value;
    value++;
    parent.querySelector('[counter]').value = value;
   
}
}
// End of plus and minus functionality on all the website

// Footer Start
let footer_lists = document.querySelectorAll(".zip-list");
let zip_down = document.querySelectorAll("[zip-down]");

for(let i=0;i<zip_down.length;i++){
    let flag_footer_lists = 0; 

    zip_down[i].onclick = function(){
        let parent = this.parentElement.parentElement;
        let target = parent.querySelector(".zip-list");

        if(flag_footer_lists==0){
            target.style.height = "170px";
            flag_footer_lists++;

            if(target.hasAttribute('help-list')){
                target.style.height = "140px";
            }
        }
        else{
            target.style.height = "0px";
            flag_footer_lists--;
        }  
    }
}

// Footer end

// Start of Navigation functionality for some buttons

let help_list = document.querySelectorAll("[help-list]");

for(let i=0;i<help_list.length;i++){
    help_list[i].firstElementChild.onclick = function(){
        window.location.href = "faq.html";
    }
    help_list[i].lastElementChild.onclick = function(){
        window.location.href = "Contact.html";
    }
}

// End of Navigation functionality for some buttons

// * start of functionality related to screen resizing

// announcement bar hide list on resize!
let announcementBarBtn = document.querySelector(".announcement-bar button");

window.onresize =()=>{
    if(announcementBarBtn.ariaExpanded == "true"){
        announcementBarBtn.click();
    }

// unzip footer lists on resize
    footer_lists.forEach((e)=>{
        e.style = ""
    })
}

// * end of functionality related to screen resizing