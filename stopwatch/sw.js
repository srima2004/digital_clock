    const display=document.getElementById("display");
    let timer=null;
    let starttime=0;
    let elapsedtime=0;
    let isRunning=false;


  function start(){
    if(!isRunning){
        const currenttime= Date.now();
        starttime=currenttime-elapsedtime;
        timer=setInterval(update,10);
        isRunning=true;
    }}

    function end(){
        if(isRunning){
            clearInterval(timer);
            elapsedtime=Date.now()-starttime;
            isRunning=false;
        }
    }
    function reset(){
       clearInterval(timer);
       starttime=0;
       elapsedtime=0;
       isRunning=false;
       display.textContent="00:00:00";


    }
    function update(){
    const currenttime=Date.now();
    elapsedtime=currenttime-starttime;

    let hours=Math.floor(elapsedtime/(1000*60*60));
    let mins=Math.floor(elapsedtime/(1000*60)%60);
    let secs=Math.floor(elapsedtime/1000%60);
    let milliseconds=Math.floor((elapsedtime%1000)/10);

    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    secs=String(secs).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    display.textContent=`${hours}:${mins}:${secs}:${milliseconds}`;

}