const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // 10 días en el futuro
const [year, month, date, hours, minutes] = [futureDate.getFullYear(), months[futureDate.getMonth()], futureDate.getDate(), futureDate.getHours(), futureDate.getMinutes()];
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const getRemainingTime = () => {
    const t = futureDate - Date.now();
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
        return;
    }
    const values = [Math.floor(t / (1000 * 60 * 60 * 24)), Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)), Math.floor((t % (1000 * 60)) / 1000)];
    items.forEach((item, index) => item.innerHTML = values[index] < 10 ? `0${values[index]}` : values[index]);
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();