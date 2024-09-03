let random = parseInt(Math.random()*100 +1) 

const userinputs =document.querySelector('#boxes')
const submit = document.querySelector('#submit')
const previousNumber= document.querySelector('.Previous')
const remainingNumber =document.querySelector('.result')
const Hint = document.querySelector('.hint')
const New = document.querySelector('.new');


let numguess = 1;

let playgames= true ;

if(playgames){

    submit.addEventListener('click' , function (e){

         e.preventDefault();

         const userinput = parseInt(userinputs.value);
        
         validation(userinput);
          
    });
}

function validation(userinput){

    if( isNaN(userinput)){
        alert('please enter valid number ');
    }else if(userinput< 1){
        alert('please enter number more than 1');
    }else if(userinput>100){
        alert('please enter number less than 100');
    }
    else{

       
       if(numguess == 11){

           displayguess(userinput);
           displaymessage( ` Game Over  <br> Start Again <br> Random number was ${random} `);
           

           endgame();

       }else{
           displayguess(userinput);
           checkguess(userinput);
       }
    }
}

function displayguess(userinput){
     

    userinputs.value = '';
    previousNumber.innerHTML += ` ${userinput}  ` ;
    numguess++;
    remainingNumber.innerHTML = ` ${12 - numguess}` ;

}

function displaymessage(message){

        Hint.innerHTML = ` <h2> ${message} </h2> `
}

function checkguess(userinput){

    if(userinput == random){

        displaymessage(` YOU WIN `);
        endgame();
    }else if( userinput < random){
        displaymessage(` Number is low `);
    }else{
        displaymessage(` Number is high `)
    }

}

function endgame(){

    userinputs.value= '' ;
    userinputs.setAttribute('disabled' , '');
    New.innerHTML= `<h2 style=" background-color : black "> Start New Game </h2>`;

    playgames= false;
    newgame();

}

function newgame(){

    New.addEventListener('click' , function (e){
        random = parseInt(Math.random()*100 +1) ;
        preguess=[];
        numguess=1 ;
        previousNumber.innerHTML= ''
        remainingNumber.innerHTML = ` ${11 - numguess}` ;
        userinputs.removeAttribute('disabled');
        New.innerHTML='';
        Hint.innerHTML='';

        playgames= true ;

    });
}

