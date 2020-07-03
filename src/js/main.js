import ElementQueries from 'css-element-queries/src/ElementQueries';
import { hasClass, removeClass, addClass, toggleDisplay } from "./components/functions";


window.addEventListener('load', () => {
    // медиа выражения на основе ширины элементов, а не окна
    ElementQueries.init();
})


$(document).ready(function () {

    const menuItem = document.querySelectorAll(".item-block"),
        orderBtn = document.querySelectorAll(".order"),
        overlay = document.querySelector(".overlay"),
        closeCrose = document.querySelector(".close"),
        pageBlocks = document.querySelectorAll(".about-left__block")






    orderBtn.forEach((el, index) => {
        el.onclick = (e) => {
            overlay.style.right = "0"
            overlay.style.opacity = "1"
            // toggleDisplay(overlay)
            // addClass(overlay, "slide-left")
            // overlay.addEventListener("animationend", function(){
            //     removeClass(this, "slide-left")
            // });
            console.log(1)
            closeCrose.onclick = () => {
                overlay.style.right = "-100%"
                overlay.style.opacity = "0.7"
                // removeClass(overlay, "slide-left")
                // addClass(overlay, "slide-right")
                // overlay.addEventListener("webkitAnimationEnd", function(){
                //     removeClass(this, "slide-right")
                // });
                // toggleDisplay(overlay)
                console.log(0)
            }
        }
    })


    menuItem.forEach((el, index) => {
        el.onclick = (e) => {
            
            let self = el;
            let last = document.querySelector(".header .bem-active_item");
            let lastPageBlock = document.querySelector(`.page-block[data-tab="${last.dataset.tab}"]`)
            let selfPageBlock = document.querySelector(`.page-block[data-tab="${self.dataset.tab}"]`)
            let lastPictureBlock = document.querySelector(`.picture-block[data-tab="${last.dataset.tab}"]`)
            let selfPictureBlock = document.querySelector(`.picture-block[data-tab="${self.dataset.tab}"]`)


            const spans = lastPageBlock.querySelector(".letter-effect").children
            const text = lastPageBlock.querySelectorAll(".text-effect")
            const spansNew = selfPageBlock.querySelector(".letter-effect").children
            // console.log(spansNew)
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove("js-effect")
            }

            if (last != self) {
                // for (let i = 0; i < spans.length; i++) {
                //     if (i % 2 === 0)
                //         spans[i].style.cssText = "transform: translateY(80px); opacity: 0";
                //     else
                //         spans[i].style.cssText = "transform: translateY(-80px); opacity: 0";
                // }
                // text.forEach((el, index)=>{
                //     el.classList.add("move")
                // })
                // text.classList.add("move")
                removeClass(last, "bem-active_item")
                addClass(self, "bem-active_item")
                removeClass(lastPageBlock, "page-block_active")
                removeClass(lastPictureBlock, "picture-block_active")
                addClass(selfPageBlock, "page-block_active")
                addClass(selfPictureBlock, "picture-block_active")
                // setTimeout(() => {
                //     // removeClass(lastPageBlock, "page-block_active")
                //     // removeClass(lastPictureBlock, "picture-block_active")
                //     // text.forEach((el, index)=>{
                //     //     el.classList.remove("move")
                //     // })
                //     // text.classList.remove("move")
                //     // for (let i = 0; i < spans.length; i++) {
                //     //     spans[i].removeAttribute("style");
                //     // }
                //     // addClass(selfPageBlock, "page-block_active")
                //     // addClass(selfPictureBlock, "picture-block_active")
                // }, 300);


            }
        }
    })









    // menuItem.forEach((el, index) => {
    //     el.onclick = (e) => {
    //         // let self = e.target;
    //         // let last = self.parentElement.getElementsByClassName('bem-active_item')[0];
    //         // let pageBlock = document.querySelector(`.about-left__block[data-tab='${self.dataset.tab}']`);
    //         // // let lastPageBlock = document.querySelector(`.about-left__block[data-tab='${last.dataset.tab}']`);
    //         // // let lastPageBlock = document.querySelector(`.about-left__block[data-tab='${last.dataset.tab}']`);

    //         // if (last) {
    //         //     removeClass(last, "bem-active_item");
    //         //     // removeClass(lastPageBlock, ".about-left__block-active");
    //         // } else {
    //         //     console.log(0)
    //         // }
    //         // addClass(self, "bem-active_item");
    //         // // addClass(pageBlock, ".about-left__block-active")
    //         // // console.log(lastPageBlock)
    //         // // console.log(pageBlock)
    //     }
    // })




    // functions


}) 