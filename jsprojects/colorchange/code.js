const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);

    button.addEventListener('click', function(){
        console.log(button);
        if(button.classList.contains('red')){
            body.style.backgroundColor = 'red'
        }
        if(button.classList.contains('green')){
            body.style.backgroundColor = 'green'
        }
        if(button.classList.contains('blue')){
            body.style.backgroundColor = 'blue'
        }
        if(button.classList.contains('yellow')){
            body.style.backgroundColor = 'yellow'
        }
    });

});

