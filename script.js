var target=new Date(2027,1,17,0,0,0);
function tick(){var t=Math.max(0,target-Date.now()),p=function(n){return String(n).padStart(2,'0')};
document.getElementById('d').textContent=Math.floor(t/864e5);document.getElementById('h').textContent=p(Math.floor(t/36e5)%24);
document.getElementById('m').textContent=p(Math.floor(t/6e4)%60);document.getElementById('s').textContent=p(Math.floor(t/1e3)%60)}
tick();setInterval(tick,1000);
