const hamburger = document.querySelector(".mp-hamburger");
const navMneu = document.querySelector(".mp-nav-menu");
const sighUpNewText = document.getElementById("sighUp-child")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMneu.classList.toggle("active");
    sighUpNewText.classList.toggle("active");

    if(list.classList.contains('open'))
        list.classList.remove('open');
    
});

const list = document.getElementById("list");
const listButton = document.querySelector(".mp-d-app-links-title");
const listButtonIcone = document.getElementById("open-close-icon")

/* When the user clicks on the button,
toggle between closing and opening the list content */
listButton.addEventListener("click", () => {
        list.classList.toggle('open');
        listButtonIcone.classList.toggle('fa-angle-up');
        
});

const heroInput = document.getElementById("mp-get-number");
const circleIcon = document.getElementById("mp-circle-icon");
const clearIcon = document.getElementById("mp-clear-icon");

heroInput.addEventListener('input', (e) => {
        if(e.target.value != ''){
                circleIcon.style.display = "none";
                clearIcon.style.display = "flex";
        }
        else {
                circleIcon.style.display = "flex";
                clearIcon.style.display = "none";
        }
});

function clearInput () {
        heroInput.value = "";
        circleIcon.style.display = "flex";
        clearIcon.style.display = "none";
}

const sendLinkBtn = document.getElementById("send-link_btn");
sendLinkBtn.addEventListener("click", () => {
        const phoneNumber = document.getElementById("get-number");
        const dangerText = document.getElementById("mp-wrongNumber");
        if (phoneNumber.textContent != null){
                dangerText.textContent = "شماره موبایل وارد شده صحیح نیست";
        }
});

// Close the list menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.mp-hamburger') 
//         && !event.target.matches('.mp-nav-menu') 
//         && !event.target.matches('.mp-header-container')
//         && !event.target.matches('.mp-bar')
//         && !event.target.matches('.mp-d-app-links-list')) {
//         if (navMneu.classList.contains('active')){
//             navMneu.classList.remove('active')
//         }
//         if (list.classList.contains('open')){
//             list.classList.remove('open')
//         }
//     }
//   }

const signUpProcContainer = document.getElementById('mp-signUpProc_container');
signUpProcContainer.appendChild(create("../src/img/income.png", "درآمد تضمینی + پاداش های ماهانه و هفتگی", "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید."));
signUpProcContainer.appendChild(create("../src/img/hour.png", "ساعت کاری دلخواه", "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می توانید فعالیت خود را در هر ساعت از شبانه روز و متناسب با برنامه زندگی تان شخصی ساز کنید."));
signUpProcContainer.appendChild(create("../src/img/benefits.png", "مزایا و خدمات باشگاه رانندگان", "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید."));
signUpProcContainer.appendChild(create("../src/img/carfix.png", "کارفیکس", "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است."));


function create (img, title, body) {
        
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'mp-procMainContainer');

        const image = document.createElement("img");
        image.setAttribute('id', 'mp-procImage');
        image.setAttribute('src', img);

        const container = document.createElement('div');
        container.setAttribute('id', 'mp-procTextContainer');

        const titleText =  document.createElement('h3');
        titleText.setAttribute('id', 'mp-procText_h3');
        titleText.textContent = title;

        const botyText = document.createElement('p');
        botyText.setAttribute('id', 'mp-procText_para');
        botyText.textContent = body;

        container.appendChild(titleText);
        container.appendChild(botyText);

        mainContainer.appendChild(image);
        mainContainer.appendChild(container);

        return mainContainer;
}