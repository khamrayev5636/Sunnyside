const elBurgerBtn = document .querySelector (".js__open-btn")


elBurgerBtn.addEventListener("click",function(){
    elBurgerBtn.closest(".header").classList.toggle("shownav")
})