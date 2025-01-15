
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function namse(params) {
    
}
function throttle(func,limit) {
    let inThrottle=false

    return function (...args) {
        if(!inThrottle){
            inThrottle=true
            func.apply(this,args)
            setTimeout(()=>inThrottle=true,limit)
        }
    }
    
}
const t= throttle(console.log,1000)


setInterval(()=>{
    t('hello');
},1)