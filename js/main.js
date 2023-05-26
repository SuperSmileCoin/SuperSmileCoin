import scrollTop from "./scrollTop.js";
import countDown from "./cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => { 

 //scroll top
 scrollTop(".scroll-top-btn");

 
  //cuenta regresiva
  //el formato es         MM  DD, AÑO  hh:mm:ss
  countDown("countdown", "Oct 1, 2023 9:00:00", "¡Congrats Investor! :D", "clock");

});
