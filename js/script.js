// menu

const burgerButtons = document.getElementsByClassName("header-burger-icon");
const navMenus = document.getElementsByClassName("menu-container");
const menuCloseButtons = document.getElementsByClassName("menu-close-icon");

const burgerButtonsArray = Array.from(burgerButtons);
const navMenusArray = Array.from(navMenus);
const menuCloseButtonsArray = Array.from(menuCloseButtons);

burgerButtonsArray.forEach(function (burgerButton, index) {
  burgerButton.addEventListener("click", function () {
    navMenusArray[index].classList.toggle("active");
  });
});

menuCloseButtonsArray.forEach(function (menuCloseButton, index) {
  menuCloseButton.addEventListener("click", function () {
    navMenusArray[index].classList.remove("active");
  });
});

// language modal

const openModalButton = document.querySelector(".header-flag-icon");
const modalContainer = document.querySelector(".language-modal-container");
let isActive = modalContainer.getAttribute("isActive"); // Let keyword'ü kullanarak değişkeni tanımla

function openModal() {
  if (isActive === "true") {
    modalContainer.style.display = "none";
    isActive = "false"; // isActive değerini güncelle
    modalContainer.setAttribute("isActive", "false");
  } else {
    modalContainer.style.display = "flex";
    isActive = "true"; // isActive değerini güncelle
    modalContainer.setAttribute("isActive", "true");
  }
}

function closeModal(event) {
  if (
    event.target !== modalContainer &&
    !modalContainer.contains(event.target)
  ) {
    modalContainer.style.display = "none";
    isActive = "false"; // isActive değerini güncelle
    modalContainer.setAttribute("isActive", "false");
  }
}

openModalButton.addEventListener("click", function (event) {
  event.stopPropagation();
  openModal();
});

window.addEventListener("click", closeModal);

// chat modal

const chatModalButton = document.querySelector(".header-chat-container");
const chatmodalContainer = document.querySelector(".chat-modal-container");
const chatmodalCloseButton = document.querySelector(".chat-modal-close-icon");

function openChatModal() {
  chatmodalContainer.style.display = "flex";
}

function closeChatModal(event) {
  if (event.target === chatmodalCloseButton) {
    chatmodalContainer.style.display = "none";
  }
}

chatModalButton.addEventListener("click", openChatModal);
window.addEventListener("click", closeChatModal);

// login modal

const loginButton = document.querySelector(".header-login-button");
const reelAccountButton = document.querySelector(".header-reelaccount-button");
const loginContainer = document.querySelector(".login-container");
const loginModalCloseButton = document.querySelector(".login-modal-close-icon");

function openLoginModal() {
  loginContainer.style.display = "flex";
}
function closeLoginModal(event) {
  if (event.target !== loginModalCloseButton) {
    loginContainer.style.display = "none";
  }
}

loginButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Tıklamayı modalContainer'a iletilmemesi için
  openLoginModal();
});

reelAccountButton.addEventListener("click", openLoginModal);
loginButton.addEventListener("click", openLoginModal);
loginModalCloseButton.addEventListener("click", closeLoginModal);

// login modal tab
const loginModalTabBtn = document.querySelector(".login-modal-tab1");
const loginModalTab2Btn = document.querySelector(".login-modal-tab2");
const modal1Container = document.querySelector(".login-modal1-items");
const modal2Container = document.querySelector(".login-modal2-items");
const tab1Underline = document.querySelector(".login-modal-tab1");
const tab2Underline = document.querySelector(".login-modal-tab2");

function loginModal1() {
  modal1Container.style.display = "flex";
  modal2Container.style.display = "none";
  tab1Underline.style.borderColor = "#3388d6";
  tab2Underline.style.borderColor = "white";
}
function loginModal2() {
  modal1Container.style.display = "none";
  modal2Container.style.display = "flex";
  tab1Underline.style.borderColor = "white";
  tab2Underline.style.borderColor = "#3388d6";
}

loginModalTabBtn.addEventListener("click", loginModal1);
loginModalTab2Btn.addEventListener("click", loginModal2);

// header animation

const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header-container");

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 120) {
    header.style.height = "60px";
    headerContainer.style.height = "60px";
  } else {
    header.style.height = "130px";
    headerContainer.style.height = "130px";
  }
});

// slider

const sliderItems = [
  {
    img: "https://tr.expertoption.com/img/icons/nyse.svg",
    title: "Hisse senedi opsiyonları",
    content:
      "Dünyanın en iyi şirketlerinin hisse senedi opsiyonlarının alım satımı: Apple, Facebook, Coca-Cola ve diğerleri",
  },
  {
    img: "https://tr.expertoption.com/img/icons/education.svg",
    title: "Eğitim",
    content:
      "Web sitemizin Eğitim bölümündeki alım satım stratejilerini kullanın veya kendinizinkini oluşturun!",
  },
  {
    img: "https://tr.expertoption.com/img/icons/apps.svg",
    title: "Uygulamalarımızı indir",
    content:
      "ExpertOption Web, iPhone, iPad, Android, Windows ve Mac'te kullanılabilir",
  },
];

const isActiveColor = "#259efa";
const sliderContainer = document.querySelector(".login-modal-slider");
const slides = document.querySelectorAll(".carousel-item");
const buttons = document.querySelectorAll(".slider-button");
let currentIndex = slides[0];
let currentButton = buttons[0];
console.log(currentIndex);

function showSlide(n) {
  currentIndex.classList.remove("active-slide");
  currentIndex.classList.add("passive-slide");
  slides[n].classList.remove("passive-slide");
  slides[n].classList.add("active-slide");
  currentIndex = slides[n];
}
function activeButton(n) {
  currentButton.classList.remove("slider-button-active");
  buttons[n].classList.add("slider-button-active");
  currentButton = buttons[n];
}

showSlide(0);
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const clickedButtonId = event.target.id;
    showSlide(Number(clickedButtonId));
    activeButton(clickedButtonId);
  });
});


//payment policy
const menuItems = document.querySelectorAll('.payment-nav-item');
let activeMenuItem = menuItems[0];
console.log(menuItems)

function activeButton(event){
    activeMenuItem.classList.remove('policy-nav-active');
    event.target.classList.add('policy-nav-active');
    activeMenuItem=event.target;
    
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', activeButton);
  console.log(menuItem);
});