function escopo() {
    const clock = document.getElementById('clock')
    const start = document.getElementById('start')
    const pause = document.getElementById('pause')
    const reset = document.getElementById('reset')

    let seconds = 0
    let isRunning 

    function makeTimer(seconds) {
        let data = new Date(seconds * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    };

    function startClock() {
        clock.classList.remove('paused')

        if (!isRunning) {
        isRunning = setInterval(function(){
            seconds++
            clock.innerHTML = makeTimer(seconds)
        }, 1000)
        }
    }
    function pauseClock() {
        clock.classList.add('paused')
        
        setTimeout(function() {
            clearInterval(isRunning)
            isRunning = false
        })
    }

    function resetClock() {
        seconds = 0
        clock.innerHTML = makeTimer(seconds)
    }

    start.addEventListener('click', startClock)
    pause.addEventListener('click', pauseClock)
    reset.addEventListener('click', resetClock)
}
escopo();