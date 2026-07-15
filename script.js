// ==========================
// КНОПКА ПОДТВЕРЖДЕНИЯ
// ==========================

const button = document.getElementById("accept");
const message = document.getElementById("message");

button.addEventListener("click", () => {

    button.innerHTML = "❤️ Спасибо";

    button.disabled = true;

    message.innerHTML = "Буду ждать тебя ❤️";

    createConfetti();

});

// ==========================
// ПЛАВНОЕ ПОЯВЛЕНИЕ
// ==========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.hero,.gallery,.confirm").forEach(el=>{

    observer.observe(el);

});

// ==========================
// УВЕЛИЧЕНИЕ ФОТО
// ==========================

document.querySelectorAll(".photos img").forEach(photo=>{

    photo.addEventListener("click",()=>{

        if(photo.classList.contains("zoom")){

            photo.classList.remove("zoom");

        }else{

            document.querySelectorAll(".photos img").forEach(p=>{

                p.classList.remove("zoom");

            });

            photo.classList.add("zoom");

        }

    });

});

// ==========================
// ПАРАЛЛАКС ШАПКИ
// ==========================

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    const hero = document.querySelector(".hero-image img");

    hero.style.transform = `translateY(${y*0.15}px) scale(1.05)`;

});

// ==========================
// КОНФЕТТИ
// ==========================

function createConfetti(){

    for(let i=0;i<80;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.animationDuration=2+Math.random()*3+"s";

        c.style.animationDelay=Math.random()+"s";

        c.style.transform=`rotate(${Math.random()*360}deg)`;

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },5000);

    }

}
