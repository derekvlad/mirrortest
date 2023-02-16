
$(function () {
  $('.title-slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });

  $('.product-slider__items').slick({
    centerMode: true,
    infinite:false,
    slidesToShow: 4,
    slidesToScroll: 2,
    
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="images/products-slider/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="images/products-slider/arrow-next.svg" alt=""></button>',
  });
    
});


const menuBtn = document.querySelector('.header-bottom__btn');
const exitBtn = document.querySelector('.menu-catalog__exit-btn');
const catalog = document.querySelector('.menu-catalog');

menuBtn.addEventListener("click",()=>{
    catalog.classList.add('menu-catalog--active')
})
exitBtn.addEventListener("click", ()=>{
    catalog.classList.remove('menu-catalog--active')
})
document.addEventListener('click', (e)=>{
    if (e.target === catalog){
      catalog.classList.remove('menu-catalog--active')
  
    }
   
  });



const tabsBtn = document.querySelectorAll('.type-mirror__btn-tab')
const tabsItems = document.querySelectorAll('.type-mirror__item-tab')

tabsBtn.forEach(function(item){
  item.addEventListener('click',function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let = currentTab = document.querySelector(tabId)
    console.log(tabId)
    tabsBtn.forEach(function(item){
      item.classList.remove('active')
    });
    tabsItems.forEach(function(item){
      item.classList.remove('active')
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active')

  })

});



class HvrSlider {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      if (el.querySelectorAll('img').length > 1) {
        const hvr = document.createElement('div');
        hvr.classList.add('hvr');

        const hvrImages = document.createElement('div');
        hvrImages.classList.add('hvr__images');
        hvr.appendChild(hvrImages);

        const hvrSectors = document.createElement('div');
        hvrSectors.classList.add('hvr__sectors');
        hvrImages.appendChild(hvrSectors);

        const hvrDots = document.createElement('div');
        hvrDots.classList.add('hvr__dots');
        hvr.appendChild(hvrDots);

        el.parentNode.insertBefore(hvr, el);
        hvrImages.prepend(el);

        const hvrImagesArray = hvr.querySelectorAll('img');
        hvrImagesArray.forEach(() => {
          hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
          hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
        });
        hvrDots.firstChild.classList.add('hvr__dot--active');
        const setActiveEl = function (targetEl) {
          const index = [...hvrSectors.children].indexOf(targetEl);
          hvrImagesArray.forEach((img, idx) => {
            if (index == idx) {
              img.style.display = 'block';
            } else {
              img.style.display = 'none';
            }
          });
          hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
            if (index == idx) {
              dot.classList.add('hvr__dot--active');
            } else {
              dot.classList.remove('hvr__dot--active');
            }
          });
        };
        hvrSectors.addEventListener('mouseover', function (e) {
          if (e.target.matches('.hvr__sector')) {
            setActiveEl(e.target);
          }
        });
        hvrSectors.addEventListener('touchmove', function (e) {
          const position = e.changedTouches[0];
          const target = document.elementFromPoint(position.clientX, position.clientY);
          if (target.matches('.hvr__sector')) {
            setActiveEl(target);
          }
        });
      }
    });
  }
}

new HvrSlider('.product-slider__images');