
// menu 

const burgerButtons = document.getElementsByClassName('header-burger-icon');
const navMenus = document.getElementsByClassName('menu-container');
const menuCloseButtons = document.getElementsByClassName('menu-close-icon');

const burgerButtonsArray = Array.from(burgerButtons);
const navMenusArray = Array.from(navMenus);
const menuCloseButtonsArray = Array.from(menuCloseButtons);

burgerButtonsArray.forEach(function(burgerButton, index) {
    burgerButton.addEventListener('click', function() {
        navMenusArray[index].classList.toggle('active');
    });
});

menuCloseButtonsArray.forEach(function(menuCloseButton, index) {
    menuCloseButton.addEventListener('click', function() {
        navMenusArray[index].classList.remove('active');
    });
});


// language modal 


const openModalButton = document.querySelector('.header-flag-icon'); 
const modalContainer = document.querySelector('.language-modal-container'); 

function openModal() {
    modalContainer.style.display = 'flex';
}

function closeModal(event) {
    if (event.target !== modalContainer && !modalContainer.contains(event.target)) {
        modalContainer.style.display ='none';
        console.log(event.target.classList);
    }
}

openModalButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Tıklamayı modalContainer'a iletilmemesi için
    openModal();
});


openModalButton.addEventListener('click', openModal);
window.addEventListener('click', closeModal);



// chat modal

const chatModalButton = document.querySelector('.header-chat-container'); 
const chatmodalContainer = document.querySelector('.chat-modal-container'); 
const chatmodalCloseButton = document.querySelector('.chat-modal-close-icon'); 

function openChatModal() {
    chatmodalContainer.style.display = 'flex';
}

function closeChatModal(event) {
    if (event.target === chatmodalCloseButton) {
        chatmodalContainer.style.display ='none';
        
    }
}



chatModalButton.addEventListener('click', openChatModal);
window.addEventListener('click', closeChatModal);


// login modal

const loginButton = document.querySelector('.header-login-button');
const reelAccountButton = document.querySelector('.header-reelaccount-button');
const loginContainer = document.querySelector('.login-container');
const loginModalCloseButton = document.querySelector('.login-modal-close-icon');

function openLoginModal(){
    loginContainer.style.display = 'flex';
}
function closeLoginModal(event){
    if(event.target !== loginModalCloseButton){
        loginContainer.style.display ='none';
    }
}

loginButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Tıklamayı modalContainer'a iletilmemesi için
    openLoginModal();
});

loginButton.addEventListener('click', openLoginModal);
loginModalCloseButton.addEventListener('click', closeLoginModal);








// header animation

const header = document.querySelector('.header');


window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    if (currentScrollPos > 120) {
        header.style.height = "60px"; 
    }
    else{
        header.style.height = "130px";
    } 

});