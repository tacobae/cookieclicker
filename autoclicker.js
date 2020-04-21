let b = true, interval;
const targetKey = 190;
    let toggleClicker = (b) => b ? interval=setInterval( () =>Game.ClickCookie(),5):clearInterval(interval);
        document.onkeyup = (e) => {
            if(e.keyCode === targetKey && e.ctrlKey){
               toggleClicker(b);
                b = !b;
             }
           };
