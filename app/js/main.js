$(function () {

  
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
