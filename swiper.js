alert("Сайн байна уу?\n\nhello")



const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'progressbar',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

const swipering = new Swiper(".swipering", {
    spaceBetween: 30,
    centeredSlides: true,

    // Optional parameter
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: "scrollbar",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
var counter1 = document.querySelector(".counter1");
var counter2 = document.querySelector(".counter2");
var counter3 = document.querySelector(".counter3");


// counters.forEach(counter => {
//     console.log(parseInt(counter.innerHTML))
//     let count = 0;
//     setInterval(() => {
//         let num = parseInt(counter.innerHTML)
//         console.log
//         if (count < num) {
//             count++;
//             console.log(count)
//             counter.innerText = count;
//         }
//     }, 10)

// })
let count = 0
setInterval(() => {
    if (count < 550) {
        count++;
        counter1.innerText = count;
    }

}, 1)
let count2 = 0
setInterval(() => {
    if (count2 < 513) {
        count2++;
        counter2.innerText = count2;
    }

}, 1)
let count3 = 0
setInterval(() => {
    if (count3 < 523) {
        count3++;
        counter3.innerText = count3;
    }

}, 1)
count = 0
    // var counter = document.querySelector(".first");


// let count = 1;


// setInterval(() => {
//         if (count < 205) {
//             count++;
//             counter.innerText = count;
//         }

//     }, 1)
// var counter = document.querySelector(".second");


// let count = 1;


// setInterval(() => {
//     if (count < 9732) {
//         count++;
//         counter.innerText = count;
//     }

// }, 1)
var active_img = document.querySelectorAll('.empathy img')

// // actives.addEventListener('click', e => {
// //     active_img.style.opacity = "1"
// //     console.log('asdf')
// // })

// function active(n) {
//     document.querySelector(`.link${n} img`).style.opacity = '5'
// }

// function remove() {

//     active_img.forEach(active => {
//         active.style.opacity = '0.5'
//     });
// }
// let aTxt = document.querySelector('#')
// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('[role="tab"]');
//     const tabList = document.querySelector('[role="tablist"]');

//     // Add a click event handler to each tab
//     tabs.forEach(tab => {
//         tab.addEventListener('click', changeTabs);
//     });

//     // Enable arrow navigation between tabs in the tab list
//     let tabFocus = 0;

//     tabList.addEventListener('keydown', e => {
//         // Move right
//         if (e.keyCode === 39 || e.keyCode === 37) {
//             tabs[tabFocus].setAttribute('tabindex', -1);
//             if (e.keyCode === 39) {
//                 tabFocus++;
//                 // If we're at the end, go to the start
//                 if (tabFocus >= tabs.length) {
//                     tabFocus = 0;
//                 }
//                 // Move left
//             } else if (e.keyCode === 37) {
//                 tabFocus--;
//                 // If we're at the start, move to the end
//                 if (tabFocus < 0) {
//                     tabFocus = tabs.length - 1;
//                 }
//             }

//             tabs[tabFocus].setAttribute('tabindex', 0);
//             tabs[tabFocus].focus();
//         }
//     });
// });



window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('[role="tab"]');
    const tabList = document.querySelector('.talist');
    // Add a click event handler to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            changeTabs(e)
        });
    });

    // Enable arrow navigation between tabs in the tab list
    let tabFocus = 0;

    tabList.addEventListener('keydown', e => {
        // Move right
        if (e.keyCode === 39 || e.keyCode === 37) {
            tabs[tabFocus].setAttribute('tabindex', -1);
            if (e.keyCode === 39) {
                tabFocus++;
                // If we're at the end, go to the start
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
                // Move left
            } else if (e.keyCode === 37) {
                tabFocus--;
                // If we're at the start, move to the end
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1;
                }
            }

            tabs[tabFocus].setAttribute('tabindex', 0);
            tabs[tabFocus].focus();
        }
    });
});

function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;

    // Remove all current selected tabs
    parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach(t => t.setAttribute('aria-selected', false));

    // Set this tab as selected
    target.setAttribute('aria-selected', true);

    // Hide all tab panels
    grandparent.parentNode
        .querySelectorAll('.tabpanel')
        .forEach(p => p.setAttribute('hidden', true));

    // Show the selected panel
    // console.log(target)
    // console.log(grandparent.parentNode)
    grandparent.parentNode.parentNode.querySelector(`#${target.getAttribute('aria-controls')}`)
        .removeAttribute('hidden');
    
}