const countdown = document.querySelector(".countdown");
const launchDate = new Date('Jul 6, 2021 00:00:01').getTime();

const interval = setInterval(() => {
    console.log('tick');
    //today Date
    const now = new Date().getTime();
    console.log(now);

    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft/(1000*60*60*24));
    const hours = Math.floor(timeLeft % (1000*60*60*24) / (1000*60*60));
    const minutes = Math.floor(timeLeft % (1000*60*60) / (1000*60));
    const seconds = Math.floor(timeLeft % (1000*60)/ 1000);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    countdown.innerHTML = `
        <div><span> ${days} Дней</span></div>
        <div><span> ${hours} Часов</span></div>
        <div><span> ${minutes} Минут</span></div>
        <div><span> ${seconds} Секунд</span></div>    
    `;

}, 1000);