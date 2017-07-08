function _handleSlider()
  {
     "use strict";
     let matchMedia = window.matchMedia("(min-width: 1024px)").matches;
     const wrapperSlider = document.getElementById("wrapperSlider");
     let autoSlide = true;
     if(matchMedia === true)
      {
          let constructSlider = `<section id="slider">
          <div id="slider1" class="slide">
            <p id="text1" class="wrapper_text">
             <span id="first_text">FOURNIR UN SOUTIEN SCOLAIRE</span>
             <span id="second_text">EasyRepet est la solution id&eacute;ale pour apporter tout soutien scolaire a domicile a vos enfants </span>
            </p>
          </div>
          <div id="slider2" class="slide">
           <p id="text1" class="wrapper_text">
             <span id="first_text">FOURNIR UNE ASSISTANCE AUX PARENTS</span>
             <span id="second_text">EasyRepet fournit aux parents des r&eacute;p&eacute;titeurs triés sur le volet pour assurer a leurs enfants un succes total en fin d'ann&eacute;e.</span>
            </p>
          </div>
          <div id="slider3" class="slide">
           <p id="text1" class="wrapper_text">
             <span id="first_text">DEVENIR R&Eacute;P&Eacute;TITEUR</span>
             <span id="second_text">Easy Repet permet a tout &eacute;tudiant de mettre en valeur ses connaissances en devenant un r&eacute;p&eacute;</span>
            </p>
          </div>
          </section>
          <div id="controls_slider">
           <span class="arrow" id="l-arrow"></span>
           <span class="arrow" id="r-arrow"></span>
          </div>
          `;
          wrapperSlider.innerHTML = constructSlider;
          const slider = document.getElementById("slider");
          const controls_slider = document.getElementById("controls_slider");
          _slider(wrapperSlider,slider);
      } 
     else
      {
        let constructBg = `
           <div class="mobile-slide">
           <p id="text1" class="wrapper_text">
             <span id="first_text">SAAR SANTE CONFORT</span>
             <span id="second_text">Une assurance sant&eacute; individuelle avec une couverture de soins illimit&eacute;e </span>
             <span id="last_text"><a href="#">En savoir plus</a></span>
            </p>
          </div>
         `;
		    wrapperSlider.classList.add("boxShadow", "bgCover");
		    wrapperSlider.style.backgroundImage = "url(img/slider/slider_index/slider_index1.jpg)";
            wrapperSlider.innerHTML = constructBg;
      }
    // Cette fonction permet de parametrer et de gerer le slider
function _slider(wrapperSliderBlock, sliderBlock)
 {
 	let execSlideMove;
 	let sliderNumber = 1;
  controls_slider.onclick = (e) =>
   {
     if(e.target !== e.currentTarget)
      {
        let targetId = e.target.id;
        if(targetId === "l-arrow")
         {
           execSlideMove = new SlideMove(false);
         }
        else if(targetId === "r-arrow")
         {
           execSlideMove = new SlideMove(true);
         }
        else
         {
           e.stopPropagation();
           return false;
         }
      }
   },{passive:true};
 	 setInterval(function()
    {
      execSlideMove = new SlideMove(autoSlide);
    },6000);
 	
   
  function SlideMove(movement)
 	     {
 	     	if(movement === true)
 	     	 {
 	     	 	 if(sliderNumber === 1)
                      {
                       requestAnimationFrame( () =>
                        {
                           sliderBlock.style.transform = "translate3d(-100%,0,0)";
                           sliderNumber = 2;
                        }, sliderBlock);
                      	
                      }
                     else if(sliderNumber === 2)
                      {
                      	requestAnimationFrame( () =>
                        {
                         sliderBlock.style.transform = "translate3d(-200%,0,0)";
                         sliderNumber = 3;
                        },sliderBlock);
                        autoSlide = false;
                      }
                     else
                      {

                      	return false;
                      }
 	     	 }
 	     	else
 	     	 {
 	     	  if(sliderNumber === 3)
               {
               	 requestAnimationFrame( () =>
               	  {
                     sliderBlock.style.transform = "translate3d(-100%,0,0)";
                     sliderNumber = 2;
               	  	}, sliderBlock);
               	 }
              else if(sliderNumber === 2)
               	{
               	 requestAnimationFrame( () =>
               	  {
                    sliderBlock.style.transform = "translate3d(0,0,0)";
                    sliderNumber = 1;
               	 }, sliderBlock);
                 autoSlide = true;
               	}
              else
               {
               	  return false;
               }
 	     	 }
 	     }

    
 }
  }
  
// Cette Fonction permet d'afficher le slider ou pas quand on redimensionne la page
// function _redimWindow()
//  {
// 	 window.addEventListener("resize",_handleSlider);
//  }