let Offcanvas_Carousel_Object;

$(document).ready(function(){
    $('.multiple-items.products_Carousel').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        prevArrow:
        `
        <button class="position-absolute border-0 rounded-1 caro-arrow-left bg-MainColor svg-arrow-size">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FEFEFE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        `,

        nextArrow:
        `
        <button class="position-absolute border-0 rounded-1 caro-arrow-right bg-MainColor svg-arrow-size">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FEFEFE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        `,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow: 3,
                },
            },
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 2,
                },
            },
            {
                breakpoint:575,
                settings:{
                    slidesToShow: 1,
                },
            }
            
        ]

      });

      $('.slider-for.product-large-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav.thumbnail-slider',
        
        infinite:false,
        
      });

        //   Animation of clicking on large image product 
      let largeProductsImg = document.querySelector(".slider-for.product-large-img");
      let imagesOflargeProductsImg = largeProductsImg.querySelectorAll(".slick-track img");

      let initialSlideForOffcanvasCarousel;
  
      imagesOflargeProductsImg.forEach((e)=>{
        e.addEventListener("click",img=>{
     
            let fakeImg_ = document.createElement("img");
            fakeImg_.src= `${img.target.currentSrc}`;
            fakeImg_.width = `${img.target.clientWidth}`;
            fakeImg_.height = `${img.target.clientHeight}`;
            fakeImg_.style.position = `absolute`;
            fakeImg_.style.top = `${img.pageY - img.offsetY}px`;
            fakeImg_.style.left = `${img.pageX - img.offsetX}px`;
            fakeImg_.style.transition = "0.4s";

            let animationOfFakeImg = setTimeout(()=>{
                fakeImg_.style.top = `${window.innerHeight/2 + window.scrollY}px`;
                fakeImg_.style.left = "50%";
                fakeImg_.style.transform = `translate(-50%,-50%) scale(1.5)`;
                fakeImg_.style.opacity = "0";   
            },10)

            let deleteThefakeImg = setTimeout(()=>{
                fakeImg_.remove();
            },400)
            
            document.body.appendChild(fakeImg_);
        })
      })
    //   End of Animation of licking on large image product


    //   Start of OffCanvas Carousel
        $('.Offcanvas-Carousel').slick(Offcanvas_Carousel_Object = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            infinite: false,
            autoplay:false,
            autoplaySpeed: 500,
            slickPlay:null,
             
            prevArrow:
            `
            <button class="position-absolute border-0 rounded-1 offcanvas-carousel-arrow-left">
                <svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg>
            </button>
            `
            ,
            nextArrow:
            `
            <button class="position-absolute border-0 rounded-1 offcanvas-carousel-arrow-right">
                <svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg>
            </button>
            `
            ,
            
        });
        for(let i=0;i<imagesOflargeProductsImg.length;i++){
            imagesOflargeProductsImg[i].addEventListener("click",e=>{
                initialSlideForOffcanvasCarousel = imagesOflargeProductsImg[i].getAttribute("indexOfEle");
                $('.Offcanvas-Carousel').slick("slickGoTo",initialSlideForOffcanvasCarousel);
            })
        }

        let offCanvasCarousel = document.getElementById("offcanvasBottom");
        let slides_coutner = offCanvasCarousel.querySelector("[slides-counter]");
        let autoplayBtn = offCanvasCarousel.querySelector('[autoplay]')
        let pause_autoplayBtn = offCanvasCarousel.querySelector('[pause-autoplay]');

        $('.Offcanvas-Carousel').on('afterChange' , function(event,slick){   
            for(let k=0;k<slick.$slides.length;k++){
                if(slick.$slides[k].classList.contains("slick-current")){
                    slides_coutner.innerHTML = `${slick.$slides[k].getAttribute("slide_number")} / 7`;

                    slidesOfRightCarousel.forEach((e)=>{
                        e.classList.remove("active-slide");
                    })

                    slidesOfRightCarousel.forEach((e)=>{
                        
                        if(e.getAttribute("slide_number") == slick.$slides[k].getAttribute("slide_number")){
                            e.classList.add("active-slide");
                        }
                    }) 

                }
            }
        });


        autoplayBtn.onclick = function(){
            this.classList.add("d-none");
            pause_autoplayBtn.classList.remove("d-none");
            $('.Offcanvas-Carousel').slick('slickPlay');
            
        }
        pause_autoplayBtn.onclick = function(){
            this.classList.add("d-none");
            autoplayBtn.classList.remove("d-none");
            $('.Offcanvas-Carousel').slick('slickPause');
            
        } 

    //   End of OffCanvas Carousel


    // Start of right offcanvas
        let rigthtOffcanvasToggler = Offcanvas_Carousel.querySelector("[right-off-canvas-toggler]");
        let rightOffcanvas = document.getElementById("offcanvasRightCarousel");
        let closeBtn = rightOffcanvas.querySelector(".btn-close");
         
        
        
        // start of Toggling right side
        rigthtOffcanvasToggler.onclick = function(){
            rightOffcanvas.classList.toggle("toggle_class");
            Offcanvas_Carousel.classList.toggle("width-toggle-class");
        }
          
        closeBtn.onclick = function(){
            rightOffcanvas.classList.toggle("toggle_class");
            Offcanvas_Carousel.classList.toggle("width-toggle-class");
        }
        // End of Toggling right side
        
        let slidesOfRightCarousel = rightOffcanvas.querySelectorAll(".rightOffcanvasCarouselSlide");
        
        
        slidesOfRightCarousel.forEach((e)=>{
            e.onclick = function(){
                $('.Offcanvas-Carousel').slick("slickGoTo",`${this.getAttribute("slide_number")-1}`);

                slides_coutner.innerHTML = `${this.getAttribute("slide_number")} / 7`;

                slidesOfRightCarousel.forEach((e)=>{
                    e.classList.remove("active-slide");
                })
                    e.classList.add("active-slide");   
            } 
        })

        // Start if fullscreen mode

        let fullscreenBtn = offCanvasCarousel.querySelector("[fullscreen-requester]");
        let CarouselToFullscreen = offCanvasCarousel.querySelector(".Offcanvas-Carousel");

        fullscreenBtn.onclick = function(){
            CarouselToFullscreen.requestFullscreen();
        }
        CarouselToFullscreen.addEventListener("fullscreenchange",e=>{
                if (document.fullscreenElement){
                CarouselToFullscreen.classList.add("fullscreen");
                }else if(!document.fullscreenElement){
                CarouselToFullscreen.classList.remove("fullscreen");
                } 
        })
        // End of full screen mode

        // Start of share menu 
        let share_btn = offCanvasCarousel.querySelector("[share-menu]");
        let share_menu = offCanvasCarousel.querySelector(".share-menu");
        let share_menu_close_btn = offCanvasCarousel.querySelector("[share-menu-close-btn]");

        let url = window.location.href;
        let share_Facebook_btn = share_menu.querySelector("[facebook-share-btn]");
        let share_Pinterest_btn = share_menu.querySelector("[pinterest-share-btn]");
        let share_Twitter_btn = share_menu.querySelector("[twitter-share-btn]");
        let share_menu_input = share_menu.querySelector("input");

        share_menu_input.value = url;

        share_btn.onclick = function(){
            share_menu.classList.toggle("show-share-menu");
        }
        share_menu_close_btn.onclick = function(){
            share_menu.classList.toggle("show-share-menu");
        }

        share_Facebook_btn.addEventListener('click', function() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
                'facebook-share-dialog',
                'width=800,height=600'
            );
            return false;
        });

        share_Pinterest_btn.addEventListener('click', function() {
            window.open('http://pinterest.com/pinthis?url=' + url,
                '_blank',
                'width=800,height=600'
            );
            return false;
        });

        share_Twitter_btn.addEventListener('click', function() {
            window.open('https://www.twitter.com/intent/tweet?url=' + url,
                '_blank',
                'width=800,height=600'
            );
            return false;
        });
        // End of share menu
        
    // End fo right offcanvas


      $('.slider-nav.thumbnail-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for.product-large-img',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        vertical:true,
        draggable:true,
        infinite:false,
    
        prevArrow:
        `
        <a class="rounded-1 bg-MainColor border-none px-2 py-1 thumbnail-arrow-up" Arrows-thumbnail>
            <i class="fa-solid fa-chevron-up fa-sm" style="
            color: #ffffff;"></i></a>
        `,
        nextArrow:
        `
        <a class="rounded-1 bg-MainColor border-none px-2 py-1 thumbnail-arrow-down" Arrows-thumbnail><i
                      class="fa-solid fa-chevron-up fa-flip-vertical fa-sm" style="color: #ffffff;"></i></a>
        `,
    
        responsive: [
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 5,
                    vertical:false,
                    arrows:false,
                }
            }
        ],
    
      });

});

