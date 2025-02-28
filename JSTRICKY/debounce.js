
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func( ...args);
        }, delay);
    };
}
const print =console.log
function throttle(func,limit) {
    let timer =null
    let lastTimeCalled=0
    return function (...arg){
        const currentTime=Date.now()
        const timePassed=currentTime-lastTimeCalled
        const timeRemaining= limit-timePassed
        if (timeRemaining>0){
            if (timer)clearTimeout(timer)
            timer=setTimeout(()=>{
                func(...arg)
                lastTimeCalled=Date.now()
                print(lastTimeCalled)
            },timeRemaining)

        }else{
            func(...arg)
            lastTimeCalled=Date.now()
            print(lastTimeCalled)
        }
    }
}
const t= throttle(console.log,1000)
setInterval(()=>t('okay'),1)




// Visualization
//  Links : https://web.archive.org/web/20180324022838/http://demo.nimius.net/debounce_throttle/