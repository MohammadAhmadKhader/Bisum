$(document).ready(function(){
    
    $('.single-item.main-Carousel').slick({
        dots:true,
        nextArrow:`
        <button type="button" class="slick-next" main-carousel-right-arrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right">
            <polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        `,
        prevArrow:`
        <button type="button" class="slick-prev" main-carousel-left-arrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-left">
            <polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        `,
      
        responsive:[
            {
              breakpoint: 767,
              settings: {
                nextArrow:`
        <button type="button" class="slick-next d-none" main-carousel-right-arrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right">
            <polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        `,
        prevArrow:`
        <button type="button" class="slick-prev d-none" main-carousel-left-arrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-left">
            <polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        `
              }
            },
        ]
    });
    let mainCarousel_ = document.getElementById("main-carousel");
    let caro_text_element = mainCarousel_.querySelectorAll("[caro-text-element]");

    $('.single-item.main-Carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let target = mainCarousel_.querySelector(".slick-current");
        
        let firstShow = setTimeout(e=>{
            target.lastElementChild.children[0].classList.remove("d-none");
        },300)
        let secondShow = setTimeout(e=>{
            target.lastElementChild.children[1].classList.remove("d-none");
        },600)
        let thirdShow = setTimeout(e=>{
            target.lastElementChild.children[2].classList.remove("d-none");
        },900)

        let Total_hide = setTimeout(e=>{
            for(let x=0;x<caro_text_element.length;x++){
            caro_text_element[x].classList.add("d-none");
            }
        },250)


    });

    window.onload = function(){
        let initialCarouselSlide = mainCarousel_.querySelector(".slick-current");

        let firstShow = setTimeout(e=>{
            initialCarouselSlide.lastElementChild.children[0].classList.remove("d-none");
        },300)
        let secondShow = setTimeout(e=>{
            initialCarouselSlide.lastElementChild.children[1].classList.remove("d-none");
        },600)
        let thirdShow = setTimeout(e=>{
            initialCarouselSlide.lastElementChild.children[2].classList.remove("d-none");
        },900)
    }


    $('.single-item.clients-carousel').slick({
 
        infinite:false,
        nextArrow:`
        <button class="position-absolute border-0 rounded-1 caro-arrow-right bg-MainColor svg-arrow-size" fast-disappear>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FEFEFE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        `,
        prevArrow:`
        <button class="position-absolute border-0 rounded-1 caro-arrow-left bg-MainColor svg-arrow-size disabled-clients-carousel" slow-disappear>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FEFEFE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        `,   

    });

    $('.multiple-items.blogs-carousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    
        
        nextArrow:`
            <a class="blogs-arrow-right position-absolute bg-MainColor border-0 rounded-2" slow-disappear>
                <svg class="position-absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#FFF" stroke-width="1.5" stroke-linecap="round" 
                stroke-linejoin="round" class="icon-arrow-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            `,
        prevArrow:`
            <a class="text-center blogs-arrow-left position-absolute bg-MainColor border-0 rounded-2" fast-disappear>
                <svg class="position-absolute"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" 
                stroke-width="1.5" stroke-linecap="round" 
                stroke-linejoin="round" class="icon-arrow-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </a>
            `,
        responsive:[
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 601,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
            ]
      });

    
  });
