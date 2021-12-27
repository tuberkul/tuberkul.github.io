"use strict";

const type = document.querySelector('#type'),
      option = type.querySelectorAll('option'),
      price = document.querySelector('.price'),
      deadline = document.querySelector('.deadline'),
      design = document.querySelector('#design'),
      adaptability = document.querySelector('#adaptability'),
      button = document.querySelector('.button');
    

      let countDayType = 0,
          priceForSiteType = 0,
          countDayDesign = 0,
          priceForSiteDesign = 0,         
          countDayAdaptability = 0,
          priceForSiteAdaptability = 0,
          priceForSite,
          countDay;

type.addEventListener('change', (item) => {

    let target = item.target,
        value = target.value;
    if (value == 1) {
        priceForSite = 0;
        countDay = 0;
        priceForSiteType = 5000;
        countDayType = 3;
        priceForSite += priceForSiteType;
        countDay += countDayType;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;

    } else if (value == 2){
        priceForSite = 0;
        countDay = 0;
        priceForSiteType = 10000;
        countDayType = 10;
        priceForSite += priceForSiteType;
        countDay += countDayType;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;

    } else if (value == 3){
        priceForSite = 0;
        countDay = 0;
        priceForSiteType = 20000;
        countDayType = 14;
        priceForSite += priceForSiteType;
        countDay += countDayType;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;

    } else if (value == 0){
        priceForSite = 0;
        countDay = 0;
        priceForSiteType = 0;
        countDayType = 0;
        priceForSite += priceForSiteType;
        countDay += countDayType;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;
    }
});

design.addEventListener('change', item => {
    let target = item.target,
        value = target.value;
        if (value == 1) {
            priceForSite = priceForSiteType;
            countDay = countDayType;
            price.innerHTML = `от ${priceForSite} ₽`;
            deadline.innerHTML = `от ${countDay} дней`;
        } else if (value == 2){
            priceForSite = priceForSiteType;
            countDay = countDayType;
            priceForSiteDesign = 5000;
            countDayDesign = 7;
            priceForSite += priceForSiteDesign;
            countDay += countDayDesign;
            price.innerHTML = `от ${priceForSite} ₽`;
            deadline.innerHTML = `от ${countDay} дней`;

        } else if (value == 3){
            priceForSite = priceForSiteType;
            countDay = countDayType;
            priceForSiteDesign = 7000;
            countDayDesign = 12;
            priceForSite += priceForSiteDesign;
            countDay += countDayDesign;
            price.innerHTML = `от ${priceForSite} ₽`;
            deadline.innerHTML = `от ${countDay} дней`;
        } else if (value == 0){
            priceForSite = priceForSiteType;
            countDay = countDayType;
            price.innerHTML = `от ${priceForSite} ₽`;
            deadline.innerHTML = `от ${countDay} дней`;
        }
    
});

adaptability.addEventListener('change', item => {
    let target = item.target,
    value = target.value;
    if (value == 1) {
        priceForSite = priceForSiteDesign + priceForSiteType;
        countDay = countDayType + countDayDesign;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;
    } else if (value == 2){
        priceForSite = priceForSiteDesign + priceForSiteType;
        countDay = countDayType + countDayDesign;
        priceForSiteAdaptability = 5000;
        countDayAdaptability = 3;
        priceForSite += priceForSiteAdaptability;
        countDay += countDayAdaptability;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;
 
    } else if (value == 0){
        priceForSite = priceForSiteDesign + priceForSiteType;
        countDay = countDayType + countDayDesign;
        price.innerHTML = `от ${priceForSite} ₽`;
        deadline.innerHTML = `от ${countDay} дней`;
    }
});

button.addEventListener('click', () => {
    priceForSite = 0;
    countDay = 0;
    price.innerHTML = `0`;
    deadline.innerHTML = `...`;
    type.value = 0;
    design.value = 0;
    adaptability.value = 0;
});






