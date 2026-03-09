function openEnvelope(){

document.getElementById("envelope").style.transform="scale(0)";

setTimeout(function(){

document.getElementById("baby").style.display="block";

},400);

}



const countdown = document.getElementById("countdown");

const eventDate = new Date("March 14, 2026 12:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

countdown.innerHTML =
days + " días " +
hours + " horas " +
minutes + " minutos";

},1000);



const elements = document.querySelectorAll(".reveal-on-scroll");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("active");

}

});

});
