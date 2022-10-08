
const btn = document.getElementById('start');
btn.addEventListener('click',() => {
        document.getElementById('st_btn').style.display='none';
        document.getElementById('start').style.display='none';
        const vid = document.querySelector('.video_start');
        vid.play();
});
var delay_popup = 50;        
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

vid.addEventListener('ended',() => {
        document.getElementById('overlay').style.display='none';
});
 