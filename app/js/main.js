window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.header__btn'),
    formName = document.querySelectorAll('.form-name'),
    formPassword = document.querySelectorAll('.form-password'),
    popupContent = document.querySelector('.popup__content'),
    headerUserName = document.querySelector('.header__user-name');

    let width = document.documentElement.clientWidth;
      
    let count = 50;
      let popupDown = () => {
      count++;
      popupContent.style.top = count + 'px';
      if(count < 400){
        setTimeout(popupDown, 5);
        }
      };

      window.addEventListener("resize", function() {
        width = document.documentElement.clientWidth;
        }, false);
      
    popupBtn.forEach((elem) =>  {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';      
        if(width > 768){
          popupDown();
        }else{
          popupContent.style.top = 'none';
        }      
      });
    });

    popup.addEventListener('click', (event) => {
      // event.preventDefault();
      let target = event.target;
      if(target.classList.contains('form__btn')){
        if(!formName && !formPassword){
          popup.style.display = 'none';
          console.log(formName.value);
          // headerUserName.innerHTML = formName.values;
        }
      } 
      else {
        target = target.closest('.popup__content');
        if(!target){
          popup.style.display = 'none';
        }
      }
        
    });

  };
  togglePopUp();

  // tabs
  const tabs = () =>{
    const tabHeader = document.querySelector('.tabs__title'),
    tab = tabHeader.querySelectorAll('.tabs__title-text'),
    tabContent = document.querySelectorAll('.tabs__content');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++){
        if(index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }else{
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) =>{
      let target = event.target;
      target = target.closest('.tabs__title-text');
      if(target){
        tab.forEach((item, i) => {
          if(item === target){
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

});
