let box =  document.querySelector('.box');
let button = document.querySelector('.button')

button.addEventListener('click',function(){

    if(box.classList.contains('box')){
        box.classList.remove('box');
        box.classList.add('red');}

    else if(box.classList.contains('red')){
            box.classList.remove('red');
            box.classList.add('blue');
    }
    else if(box.classList.contains('blue')){
        box.classList.remove('blue');
        box.classList.add('red');
    }
});

