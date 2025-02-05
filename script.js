const messages = [
    "What If",
    "Sad ako",
    "Pretty pweaseee?",
    "Sigiii naaaaaa",
    "Naiiyak na ko boss(internally)",
    "Try mo po click mag yes",
    "Halaaaa",
    "bumabaha na dito gawa ng tears ko"
];

const gifs = [
    "https://media.tenor.com/eU0GphP1dRoAAAAj/dudu-cry-dudu-funny.gif",
    "https://media.tenor.com/5t-iIxnzE8MAAAAM/sad-bear-cry.gif",
    "https://media.tenor.com/ktgCLtR2O4YAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/sWXhCC4A2woAAAAj/bubu-bubu-dudu.gif",
];

let messageIndex = 0;
let gifsIndex = 0;

const gifspic = document.querySelector('.gifclass');



const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');

function handleNoClick(){
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;


    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize*1.5}px`; 

    gifspic.src = gifs[gifsIndex % gifs.length];
    gifsIndex = (gifsIndex + 1) % gifs.length;

}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.querySelector('.no-button').addEventListener('click', handleNoClick);
document.querySelector('.yes-button').addEventListener('click', handleYesClick);


document.addEventListener('DOMContentLoaded', function () {
    if (/Mobi|Android|iPhone|Windows Phone/i.test(navigator.userAgent)) {
        document.body.innerHTML = "<h1>Access from mobile devices is restricted.</h1>";
    } else {
        console.log("Access granted to desktop users.");
    }
});




