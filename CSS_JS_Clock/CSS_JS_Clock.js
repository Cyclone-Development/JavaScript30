const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector('.minute-hand');
const hourHand=document.querySelector('.hour-hand');

function setDate(){
   const now = new Date();
   //seconds hand
   const seconds = now.getSeconds();
   const secondsDegrees = (((seconds/60)*360)+ 90);
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
   //minutes hand
   const minutes = now.getMinutes();
   const minutesDegrees= (((minutes/60)*360)+90);
   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
   //hours hand
   const hours = now.getHours();
   const hoursDegrees= (((hours/12)*360)+90);
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

   
   console.log(seconds);
}
setInterval(setDate ,1000);