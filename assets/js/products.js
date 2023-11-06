let form_wrapper = document.querySelector('[form-wrapper]');
let target_form_wrapper = document.querySelector('[target-form-wrapper]');

let target_form_wrapper_flag = 0;
form_wrapper.onclick  = function(){
    if(target_form_wrapper_flag == 0){
        target_form_wrapper.style.height = "700px";
        target_form_wrapper_flag++;
    }
    else{
        target_form_wrapper.style.height = "0px";
        target_form_wrapper_flag--;
    }
}


// Start of scaling functionality
let Offcanvas_Carousel = document.getElementById("offcanvasBottom");
let scalling_icon = Offcanvas_Carousel.querySelector(".scaling-icon");
let Offcanvas_Carousel_slider = Offcanvas_Carousel.querySelector(".Offcanvas-Carousel");
let imgs_Of_Offcanvas_Carousel = Offcanvas_Carousel.querySelectorAll("img");


let scalling_Counter=0;
scalling_icon.addEventListener("click",()=>{
    let imgs_parent_Of_Offcanvas_Carousel = Offcanvas_Carousel.querySelectorAll(".slick-slide");
    let Offcanvas_Carousel_slick_list = Offcanvas_Carousel.querySelector(".slick-list");
    let Offcanvas_body = Offcanvas_Carousel.querySelector(".offcanvas-body");
    


    for(let i=0;i<imgs_parent_Of_Offcanvas_Carousel.length;i++){
        if(window.innerWidth > 767){
            imgs_Of_Offcanvas_Carousel[i].classList.toggle("scale-up");
        }else{
            imgs_Of_Offcanvas_Carousel[i].classList.toggle("scale-up-low-screens");
        }

        if(scalling_Counter == 1){
            setTimeout(()=>{
                Offcanvas_body.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slick_list.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slider.classList.toggle("overflow-visible");
                scalling_Counter--;
                
                
            },300)
            }else{
                Offcanvas_body.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slick_list.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slider.classList.toggle("overflow-visible");
                scalling_Counter++;
                
            }
        
    }

    
})

for(let j=0;j<imgs_Of_Offcanvas_Carousel.length;j++){
    
    
    imgs_Of_Offcanvas_Carousel[j].addEventListener("click",()=>{
        

        for(let i=0;i<imgs_Of_Offcanvas_Carousel.length;i++){
            let Offcanvas_body = Offcanvas_Carousel.querySelector(".offcanvas-body");
            let Offcanvas_Carousel_slick_list = Offcanvas_Carousel.querySelector(".slick-list");
            if(window.innerWidth > 767){
                imgs_Of_Offcanvas_Carousel[i].classList.toggle("scale-up");
            }else{
                imgs_Of_Offcanvas_Carousel[i].classList.toggle("scale-up-low-screens");
            }


            if(scalling_Counter == 1){
            setTimeout(()=>{
                Offcanvas_body.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slick_list.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slider.classList.toggle("overflow-visible");
                scalling_Counter--;
                
            },300)
            }else{
                Offcanvas_body.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slick_list.classList.toggle("overflow-visible");
                Offcanvas_Carousel_slider.classList.toggle("overflow-visible");
                scalling_Counter++;
            }
            
        }
    })

    
}
// End of scalling functionality


