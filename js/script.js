let milliseconds = 0;
const time = document.getElementById('time');
let timer;
let start = document.getElementById('start');

const startWatch = () => {
    clearInterval(timer);

    timer = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        time.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);

    start.style.display = "none";
};

const pauseWatch = () => {
    clearInterval(timer);

    start.style.display = "block";
    start.innerHTML = "Continue";
};

const resetWatch = () => {
    clearInterval(timer);
    milliseconds = 0;
    time.innerHTML = '00:00:00:00';

    start.style.display = "block";
    start.innerHTML = "Start";
};


document.addEventListener('click', (e) => {
    
    const element = e.target;

    if (element.id === 'start') {
        startWatch();
        console.log('start');
    }
    if (element.id === 'pause') {
        pauseWatch();
        console.log('pause');
    }
    if (element.id == 'reset') {
        resetWatch();
        console.log('reset');
    }
})
