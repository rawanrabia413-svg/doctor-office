//================= Back To Top =================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

//================= Scroll Animation =================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeBtn.querySelector("i");

// تحميل الوضع المحفوظ
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
    icon.classList.replace("fa-moon","fa-sun");
}

// تغيير الوضع
themeBtn.addEventListener("click", ()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        icon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","dark");
    }else{
        icon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","light");
    }

});