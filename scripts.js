function escopo() {
    const clock = document.getElementById('clock')
    const start = document.getElementById('start')
    const pause = document.getElementById('pause')
    const reset = document.getElementById('reset')

    let seconds = 0

    function makeTimer(seconds) {
        let data = new Date(seconds * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    };

    function startClock() {
        setInterval(function(){
            seconds++
            clock.innerHTML = makeTimer(seconds)
        }, 1000)
    }

    function pauseClock(isRunning) {
        setTimeout(function() {
            clearInterval(isRunning)
        }, 1000)
    }

    function resetClock() {
        seconds = 0
    }

    start.addEventListener('click', startClock)
    pause.addEventListener('click', pauseClock)
    reset.addEventListener('click', resetClock)
}
escopo();