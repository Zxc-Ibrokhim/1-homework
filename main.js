function updateClock() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    dateElement.textContent = `${dayOfWeek}, ${day}.${month}.${year}`;
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();  