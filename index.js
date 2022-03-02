
var x= document.querySelector(".input");
var ans =0;
var button=document.querySelectorAll('.tab-btn');
let store_memory = 0;
let recently_solved=0;

button.forEach(a => {
    a.addEventListener("click",function(event) {
        
        a.setAttribute('id','onclick-btn');
        a.classList.add('onclick-btn');

        setTimeout(function() {
            a.removeAttribute('id','onclick-btn');
            a.classList.remove('onclick-btn');
          }, 100);        

        if( recently_solved === 1 && !isNaN(Number(a.innerHTML))){
            x.value='';
            recently_solved=0;
        }
        else if( recently_solved === 1 && isNaN(Number(a.innerHTML))){
            recently_solved=0;
        }

        take_input(a.innerHTML);
    });
});

document.addEventListener('keypress',function(event) {
    console.log(event.key);
    take_input(event.key);
})


function solv() {       
    // String(x.value).replace('×','*');

    size = x.value.length;
    if(x.value.includes("!")) {
        if(x.value.includes("(")){
            n= eval(String((x.value.substring(0, size-1))));
        }else{
            n = Number(x.value.substring(0, size-1));
        }
        let f = 1;
        for(i = 2; i <= n; i++)
            f = f*i;
        x.value = f;
    }
    else if(x.value.includes("mod(")) {
        n = Number(x.value.substring(0, size-1));
        x.value = n/100;
    }
    else{
        x.value = eval(x.value);
    }

    recently_solved=1;
}

function backspace() {
    let size=x.value.length;
    x.value = x.value.substring(0,size-1);
}

function take_input(symbol) {
    console.log(symbol);
    switch (symbol) {
        case "1":
            x.value +="1";
            ans +=1;
            break;
        case "2":
            x.value +="2";
            ans +=2;
            break;
        case "3":
            x.value +="3";
            ans +=3;
            break;
        case "4":
            x.value +="4";
            ans +=2;
            break;
        case "5":
            x.value +="5";
            ans +=2;
            break;
        case "6":
            x.value +="6"
            ans +=2;
            break;
        case "7":
            x.value +="7";
            ans +=2;
            break;
        case "8":
            x.value +="8";
            ans +=2;
            break;
        case "9":
            x.value +="9";
            ans +=2;
            break;
        case "0":
            x.value +="0";
            ans +=2;
            break;
        case "+":
            x.value +="+";
            break;
        case "-":
            x.value +="-";
            break;
        case "×" || "*":
            x.value +="*";
            break;
        case "÷":
            x.value +="/";
            break;
        case ".":
            x.value +=".";
            break;
        case "(":
            x.value +="(";
            break;
        case ")":
            x.value +=")";
            break;
        case "mod":
            x.value +="%";
            break;
        case "1/X":
            x.value = "1"+"/"+String(x.value);
            break;
        case "M+":
            store_memory += Number(x.value);
            recently_solved=1;
            break;
        case "M-":
            store_memory -= Number(x.value);
            recently_solved=1;
            break;
        case "MS":
            x.value =store_memory;
            recently_solved=1;
            break;
        case "<img src=\"erase-i.png\" alt=\"erase symbol\" class=\"erase-icon\">" :
            x.value ="";
            break;
        case "=":
            solv();
            break;
        case "C":
            backspace();
            break;
        case "n!":
            x.value +="!";
            break;
        case "x2":
            x.value +="*"+ x.value;
            break;
        case "MC":
            store_memory = 0;
            break;
        default:
            break;
    }
}