let burger=document.querySelector(".burger"),menu=document.querySelector(".header__nav"),menuItem=document.querySelectorAll(".list__item");burger.addEventListener("click",function(){burger.classList.toggle("burger--active"),menu.classList.toggle("header__nav--active"),document.body.classList.toggle("stop-scroll")}),menuItem.forEach(function(e){e.addEventListener("click",function(){burger.classList.remove("burger--active"),menu.classList.remove("header__nav--active"),document.body.classList.remove("stop-scroll")})});let tabsHref=document.querySelectorAll(".tabs-nav__href"),tabsItem=document.querySelectorAll(".tabs-item");tabsHref.forEach(function(e){e.addEventListener("click",function(e){const t=e.currentTarget.dataset.path;tabsHref.forEach(function(c){c.classList.remove("tabs-nav__href--active"),e.currentTarget.classList.add("tabs-nav__href--active"),tabsItem.forEach(function(e){e.classList.remove("tabs-item--active"),document.querySelector(`[data-target="${t}"]`).classList.add("tabs-item--active")})})})});let swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,allowTouchMove:!0,pagination:{el:".swiper-pagination",clickable:!0}});new Accordion(".accordion-list",{elementClass:"accordion",triggerClass:"accordion__control",panelClass:"accordion__content",activeClass:"accordion--active"});let headerSearchBtn=document.querySelector(".header__search"),searchForm=document.querySelector(".header__action"),searchCloseBtn=document.querySelector(".header-action__btn-close");headerSearchBtn.addEventListener("click",function(){searchForm.classList.add("header__action--active")}),searchCloseBtn.addEventListener("click",function(){searchForm.classList.remove("header__action--active")}),lazyload();
