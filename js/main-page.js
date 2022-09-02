

const hamburger = document.querySelector(".mp-hamburger");
const navMneu = document.querySelector(".mp-menu");
const sighUpNewText = document.querySelector("#sighUp-child");
const overlay = document.querySelector('.mp-overlay');
const body = document.querySelector('body');

const list = document.querySelector("#mp-dl_list");
const listButton = document.querySelector(".mp-d-app-links-title");
const listButtonIcone = document.querySelector("#open-close-icon");

const inputData = document.querySelector("#mp-phone_input");
const circleIcon = document.querySelector("#mp-circle-icon");
const clearIcon = document.querySelector("#mp-clear-icon");
const errorText = document.querySelector("#mp-error");

const sendBtn = document.querySelector("#mp-send_btn");

const signUpProcContainer = document.querySelector('#mp-signUpProc_container');

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
        mainContainer.className = 'mp-procMainContainer';

        const image = document.createElement("img");
        image.className = 'mp-procImage';
        image.setAttribute('src', img);

        const container = document.createElement('div');
        container.className = 'mp-procTextContainer';

        const titleText =  document.createElement('h3');
        titleText.className = 'mp-procText_h3';
        titleText.textContent = title;

        const botyText = document.createElement('p');
        botyText.className = 'mp-procText_para';
        botyText.textContent = body;

        container.appendChild(titleText);
        container.appendChild(botyText);

        mainContainer.appendChild(image);
        mainContainer.appendChild(container);

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

hamburger.addEventListener("click", () => {
    handleHamburgerMneu();
    
});

overlay.addEventListener('click', () => {
        if (overlay.classList.contains('active'))
                handleHamburgerMneu();
});


/* When the user clicks on the button,
toggle between closing and opening the list content */
listButton.addEventListener("click", () => {
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


$('#mp-slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
});

signUpProcContainer.appendChild(create("../src/img/income.png", "درآمد تضمینی + پاداش های ماهانه و هفتگی", "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید."));
signUpProcContainer.appendChild(create("../src/img/hour.png", "ساعت کاری دلخواه", "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می توانید فعالیت خود را در هر ساعت از شبانه روز و متناسب با برنامه زندگی تان شخصی ساز کنید."));
signUpProcContainer.appendChild(create("../src/img/benefits.png", "مزایا و خدمات باشگاه رانندگان", "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید."));
signUpProcContainer.appendChild(create("../src/img/carfix.png", "کارفیکس", "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است."));


