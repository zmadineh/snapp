$(document).ready(function () {
    $('.cp_imgSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});

let cp_careers = [
    { title: "Associate Product Manager (User)", loc: "Remote job", department: "Product" },
    { title: "Product Manager", loc: "Tehran, Iran, Islamic Republic of", department: "product" },
    { title: "Application Security Engineer", loc: "Tehran, Iran, Islamic Republic of", department: "product" },
    { title: "Penetration Testing Engineer", loc: "Tehran, Iran, Islamic Republic of", department: "Tech" },
    { title: "Senior Social Media Specialist - SnappPay", loc: "Tehran, Iran, Islamic Republic of", department: "Product" },
    { title: "Senior People and Organization Development Specialist", loc: "Tehran, Iran, Islamic Republic of", department: "Product" },
    { title: "Legal expert", loc: "Tehran, Iran, Islamic Republic of", department: "Operations" },
    { title: "Associate Product Manager (User)", loc: "Tehran, Iran, Islamic Republic of", department: "Product" },
    { title: "Penetration Testing Engineer", loc: "Tehran, Iran, Islamic Republic of", department: "Product" },
    { title: "Application Security Engineer", loc: "Tehran, Iran, Islamic Republic of", department: "Legal" },
    { title: "Legal expert", loc: "Tehran, Iran, Islamic Republic of", department: "Product" },
    { title: "Product Manager", loc: "Tehran, Iran, Islamic Republic of", department: "Legal" },
]


function ShowCareer(dep) {
    const cp_careers_grid = document.querySelector('.cp_career-grid');
    while (cp_careers_grid.firstChild) {
        cp_careers_grid.firstChild.remove()
    }
    cp_careers.forEach(element => {
        if (element.department == dep || dep == 'All') {
            cp_career_box = document.createElement('a');
            cp_career_box.classList.add("cp_career-box")
            let cp_title = document.createElement('h5');
            cp_title.innerText = element.title;
            let cp_loc_Dep = document.createElement('div');
            let cp_loc = document.createElement('span');
            cp_loc.classList.add("cp_career-location");
            cp_loc.innerText = element.loc;
            cp_loc_Dep.appendChild(cp_loc);
            let cp_Dep = document.createElement('span');
            cp_Dep.classList.add("cp_career-department");
            cp_Dep.innerText = element.department;
            cp_loc_Dep.appendChild(cp_Dep);
            cp_career_box.appendChild(cp_title);
            cp_career_box.appendChild(cp_loc_Dep);
            cp_careers_grid.appendChild(cp_career_box)
        }
    })
}
ShowCareer('All');



// console.log(cp_careers[0]);
// const cp_careers_grid = document.querySelector('.cp_career-grid');
// cp_careers.forEach(element => {
//     console.log("hello heree");
//     cp_career_box = document.createElement('a');
//     cp_career_box.classList.add("cp_career-box")
//     let cp_title = document.createElement('h5');
//     cp_title.innerText = element.title;
//     let cp_loc_Dep = document.createElement('div');
//     let cp_loc = document.createElement('span');
//     cp_loc.classList.add("cp_career-location");
//     cp_loc.innerText = element.loc;
//     cp_loc_Dep.appendChild(cp_loc);
//     let cp_Dep = document.createElement('span');
//     cp_Dep.classList.add("cp_career-department");
//     cp_Dep.innerText = element.department;
//     cp_loc_Dep.appendChild(cp_Dep);
//     cp_career_box.appendChild(cp_title);
//     cp_career_box.appendChild(cp_loc_Dep);
//     cp_careers_grid.appendChild(cp_career_box)
// })

function myFunction() {
    const cp_clicked = document.querySelectorAll(".cp_filters");
    cp_clicked.forEach(element => {
        element.addEventListener('click', () => {
            cp_clicked.forEach(element1 => { element1.classList.remove("cp_selected") })
            element.classList.add("cp_selected");
            ShowCareer(element.innerText);
        })
    });
}
myFunction();