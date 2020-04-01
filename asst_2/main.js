/*Complete by Evan Hulse*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i =1; i <= 5; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic' + i + '.jpg');
thumbBar.appendChild(newImage);
newImage.onclick = function(e){
    const source = e.target.getAttribute('src');
    display(source);
    }

}
function display(source){
    displayedImage.setAttribute('src',source);
}
/* Wiring up the Darken/Lighten button */
/*Base code found using MDN*/
btn.onclick = function(){
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';

    }
}