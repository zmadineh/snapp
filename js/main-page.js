const hamburger = document.querySelector(".mp-hamburger");
const navMneu = document.querySelector(".mp-menu");
const sighUpNewText = document.querySelector("#sighUp-child");
const overlay = document.querySelector('.mp-overlay');
const body = document.querySelector('body');

const wrapper = document.querySelector('.mp-details-wrapper');
const list = document.querySelector(".mp-accordion_menu");
const listButton = document.querySelector(".mp-download-mv-title");
const listButtonIcone = document.querySelector("#open-close-icon");

const inputData = document.querySelector("#mp-phone_input");
const circleIcon = document.querySelector("#mp-circle-icon");
const clearIcon = document.querySelector("#mp-clear-icon");
const errorText = document.querySelector("#mp-error");

const sendBtn = document.querySelector("#mp-send_btn");

const signUpProcContainer = document.querySelector('#mp-signUp-benefit');

const possibilitiesContainer = document.querySelector('.mp-possibilities-list');
const showMoreSection = document.querySelector('.mp-show-more');
const showMoreBtn = document.querySelector('.mp-more_btn');
const possibilitiesSection = document.querySelector('.mp-possibilities');

function handleHamburgerMneu () {
        hamburger.classList.toggle('active');
        navMneu.classList.toggle('mobileView');
        sighUpNewText.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('hideScrollBar');

        if(list.classList.contains('open')) {
                list.classList.remove('open');
                listButtonIcone.classList.toggle('fa-angle-down');
                listButtonIcone.classList.toggle('fa-angle-up');
        }

        if(hamburger.classList.contains('active'))
                scrollDisable();
        else scrollEnable();
}

function clearInput () {
        inputData.value = "";
        circleIcon.style.display = "flex";
        clearIcon.style.display = "none";
        errorText.textContent = '';
}


function create (img, title, body) {
        
        const mainContainer = document.createElement('div');
        mainContainer.className = 'mp-signUp-benefit-item';

        const image = document.createElement("img");
        image.className = 'mp-benefit_img';
        image.setAttribute('src', img);

        const container = document.createElement('div');
        container.className = 'mp-procTextContainer';

        const titleText =  document.createElement('h3');
        titleText.className = 'mp-benefit_title';
        titleText.textContent = title;

        const botyText = document.createElement('p');
        botyText.className = 'mp-benefit_body';
        botyText.textContent = body;

        container.appendChild(titleText);
        container.appendChild(botyText);

        mainContainer.appendChild(image);
        mainContainer.appendChild(container);

        return mainContainer;
}

function createPossibilities (img, title, body) {

        const mainContainer = document.createElement('div');
        mainContainer.className = 'mp-possibilities-items';

        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'mp-logo-describes';

        const titleText =  document.createElement('div');
        titleText.className = 'mp-logotype';
        titleText.textContent = title;

        const botyText = document.createElement('div');
        botyText.className = 'mp-logo-moretype';
        botyText.textContent = body;

        const imgContainer = document.createElement('div');
        descriptionContainer.className = 'mp-possibilities-logo';

        const image = document.createElement("img");
        image.className = 'mp-possibilities-image';
        image.setAttribute('src', img);


        descriptionContainer.appendChild(titleText);
        descriptionContainer.appendChild(botyText);

        imgContainer.appendChild(image);

        mainContainer.appendChild(imgContainer);
        mainContainer.appendChild(descriptionContainer);

        return mainContainer;
}

function scrollDisable() {
        // To get the scroll position of current webpage
        TopScroll = window.pageYOffset || document.documentElement.scrollTop;
        LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
        
        // if scroll happens, set it to the previous value
        window.onscroll = function() {
                window.scrollTo(LeftScroll, TopScroll);
        };
}

function scrollEnable() {
        window.onscroll = function() {};
}

// Next/previous controls
function plusSlides(n) {
        showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
        showSlides(slideIndex = n);
}

function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(".mp-mySlides");
        let dots = document.querySelectorAll(".mp-dot");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for (i = 0; i < slides.length; i++) 
                slides[i].style.display = "none";

        for (i = 0; i < dots.length; i++) 
                dots[i].className = dots[i].className.replace(" mp-btn-active", "");

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " mp-btn-active";
} 


hamburger.addEventListener("click", () => {
    handleHamburgerMneu();    
});

overlay.addEventListener('click', () => {
        if (overlay.classList.contains('active'))
                handleHamburgerMneu();
});


/* When the user clicks on the button,
toggle between closing and opening the list content */
listButton.addEventListener("click", (e) => {
        list.classList.toggle('open');
        listButtonIcone.classList.toggle('fa-angle-down');
        listButtonIcone.classList.toggle('fa-angle-up');
});

inputData.addEventListener('input', (e) => {
        if(e.target.value != ''){
                circleIcon.style.display = "none";
                clearIcon.style.display = "flex";
        }
        else {
                circleIcon.style.display = "flex";
                clearIcon.style.display = "none";
        }
        errorText.textContent = '';
});

sendBtn.addEventListener("click", () => {
        const phoneNumberSyntax = /^09\d{9}/; 
        
        if (!inputData.value.match(phoneNumberSyntax)){
                errorText.textContent = "شماره موبایل وارد شده صحیح نیست";
        }
        else {
                errorText.textContent = '';
        }
});

showMoreBtn.addEventListener('click', () => {
        possibilitiesSection.style.overflow = 'auto';
        possibilitiesSection.style.height = '100%';
        
        showMoreSection.style.display = 'none';
});

// main program 

signUpProcContainer.appendChild(create("../src/img/main-page/income.png", "درآمد تضمینی + پاداش های ماهانه و هفتگی", "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید."));
signUpProcContainer.appendChild(create("../src/img/main-page/hour.png", "ساعت کاری دلخواه", "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می توانید فعالیت خود را در هر ساعت از شبانه روز و متناسب با برنامه زندگی تان شخصی ساز کنید."));
signUpProcContainer.appendChild(create("../src/img/main-page/benefits.png", "مزایا و خدمات باشگاه رانندگان", "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید."));
signUpProcContainer.appendChild(create("../src/img/main-page/carfix.png", "کارفیکس", "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است."));

possibilities = [
        ["../src/img/main-need-image/cab.svg",'تاکسی اینترنتی', 'امکان درخواست آنلاین خودرو با اسنپ'],
        ["../src/img/main-need-image/bike.svg",'پیک موتوری','حمل و نقل با اسنپ'],
        ["../src/img/main-need-image/Pickup-new.png",'درخواست وانت', 'حمل و نقل با اسنپ'],
        ["../src/img/main-need-image/food.svg",'سفارش آنلاین غذا', 'سفارش غذا، نان و شیرینی با اسنپ'],
        ["../src/img/main-need-image/market.svg",'سوپرمارکت آنلاین', ' تهیه اقلام روزانه با اسنپ'],
        ["../src/img/main-need-image/market.svg",'اسنپ اکسپرس', 'تحویل در کمتر از 30 دقیقه'],
        ["../src/img/main-need-image/trip.svg",'بلیط پرواز داخلی', 'گردشگری با اسنپ'],
        ["../src/img/main-need-image/trip.svg",'بلیط پرواز خارجی', 'گردشگری با اسنپ'],
        ["../src/img/main-need-image/doctor.svg",'دکتر', 'درمان با اسنپ'],
        ["../src/img/main-need-image/hotel.png",'رزرو هتل', 'گردشگری با اسنپ'],
        ["../src/img/main-need-image/trip.svg",'رزرو اقامتگاه', 'گردشگری با اسنپ'],
        ["../src/img/main-need-image/new Shop.png",'فروشگاه', 'خرید از فروشگاه های معتبر شهر'],
        ["../src/img/main-need-image/bus.png",'بلیط اتوبوس', 'گردشگری با اسنپ'],
        ["../src/img/main-need-image/train.png",'بلیط قطار', 'گردشگری با اسنپ'],
        ["../src/img/main-need-image/club.svg",'اسنپ! کلاب', 'باشگاه مشتریان اسنپ'],
        ["../src/img/main-need-image/Service Icon.png",'سرمایه گذاری', 'خدمات غیرحضوری بورس و سرمایه گذاری'],
        ["../src/img/main-need-image/Moving.png",'اسباب کشی منزل', 'حمل و نقل با اسنپ'],
        ["../src/img/main-need-image/pay.svg",'سرویس اعتباری', 'پرداخت با اسنپ'],
        ["../src/img/main-need-image/ticket-icon.svg",'اسنپ تیکت', 'خرید آنلاین بلیط با اسنپ'],
];



possibilities.forEach(element => {
        possibilitiesContainer.appendChild(createPossibilities(element[0], element[1], element[2]));      
});

let slideIndex = 1;
showSlides(slideIndex);
