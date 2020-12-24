const collapsable = document.getElementsByClassName('collapsible');
console.log(collapsable);
for(let i = 0; i< collapsable.length; i++) {
    collapsable[i].addEventListener('click', () => {
        if (collapsable[i].classList.contains('active')) {
            collapsable[i].classList.remove('active');
        } else {
        collapsable[i].classList.add('active');
        console.log(collapsable[i]);
        }
    })
}
