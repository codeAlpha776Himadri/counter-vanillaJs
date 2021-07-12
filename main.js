let btn = document.getElementById('btn');
let text = document.getElementById('text');

console.log(btn);
console.log(text);
let i = 0; //global scope variable

btn.addEventListener('click', () => {
    //Check whether btn is working
    console.log("I am working");

    // let i = 0;
    setTimeout(clock, 50);

    function clock() {

        console.log(`clock is running at ${i} `);

        text.style.color = "red";
        text.style.fontSize = "150px";
        text.textContent = i;
        btn.textContent = "Count";
        i++;
        let j = i;
        i = j;
        console.log(j);

    };

});

const container = document.querySelector('.container')


const main = document.querySelector('.main');
console.log(main)
const display_text = document.querySelector('.display_text');
const footer = document.querySelector('.footer')

const btnn_close = document.querySelector('.btn-close')

const screen_bg = document.querySelector('.screen-bg') 

btnn_close.addEventListener('click',() => {
    main.classList.add('main-visibility-close')
    main.classList.remove('main-visibility-open')
    container.classList.add('.container-come')
    btnn_close.classList.add('btn-close-back')
    btnn_open.classList.remove('btn-open-back')
    screen_bg.classList.add('screen-bg-animation')
    
    display_text.classList.add('display-text-vanish')
    footer.classList.add('footer-vanish')
})

const btnn_open = document.querySelector('.btn-open')

btnn_open.addEventListener('click',() => {
    main.classList.add('main-visibility-open')
    main.classList.remove('main-visibility-close')
    btnn_open.classList.add('btn-open-back')
    btnn_close.classList.remove('btn-close-back')
    screen_bg.classList.remove('screen-bg-animation')

    display_text.classList.remove('display-text-vanish')
    footer.classList.remove('footer-vanish')
})