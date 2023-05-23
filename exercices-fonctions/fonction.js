// *****************************************************************************
// fonctions sur les différents opération arithmetiques
// *****************************************************************************


function add(nb1, nb2)
{
    return nb1 + nb2;
}

function sub(nb1, nb2)
{
    return nb1 - nb2;
}

function mult(nb1, nb2)
{
    return nb1 ** nb2;
}

function div(nb1, nb2)
{
    return nb1 / nb2;
}

function mod(nb1, nb2)
{
    return nb1 % nb2;
}


// *****************************************************************************
// fonctions pour intérroger l'utilisateur
// *****************************************************************************


function askUserOperation()
{
    return window.prompt("Entrez un opérateur");
}

function askUserFirstNumber()
{
    return window.prompt("Entrez un nombre");
}

function askUserSecondNumber()
{
    return window.prompt("Entrez un autre nombre");
}

function dispatchOperation(nb1, ope, nb2)
{
    if(ope === "+")
  {
      console.log(`${nb1} ${ope} ${nb2} = ${add(nb1, nb2)}`);
  }
  else if(ope === "-")
  {
      console.log(`${nb1} ${ope} ${nb2} = ${sub(nb1, nb2)}`);
  }
  else if(ope === "*")
  {
      console.log(`${nb1} ${ope} ${nb2} = ${mult(nb1, nb2)}`);
  }
  else if(ope === "/")
  {
      console.log(`${nb1} ${ope} ${nb2} = ${div(nb1, nb2)}`);
  }
  else if(ope === "%")
  {
      console.log(`${nb1} ${ope} ${nb2} = ${mod(nb1, nb2)}`);
  }
}

function calculator()
{
    let nb1 = askUserFirstNumber();
  let ope = askUserOperation();
  let nb2 = askUserSecondNumber();
  
  dispatchOperation(parseInt(nb1), ope, parseInt(nb2));
}

calculator();


// *****************************************************************************
// Exercice1 addition de deux nombres
// *****************************************************************************

let nombre1=10;
let nombre2=8;
let somme=0;

function add(n1,n2){
    
        somme =(n1+n2);
        return(somme);
}

let resultat=add(nombre1, nombre2);

console.log(resultat);


// *****************************************************************************
// soustraction de deux nombres
// *****************************************************************************

let dif=0;
let dif1=45;
let dif2=4;

function sub(d1,d2){
    dif=(d1-d2)
    return dif;
}
let soustraction=sub(dif1,dif2);

console.log(soustraction);

// *****************************************************************************
// multiplication de deux nombres
// *****************************************************************************
    let mult0=0;
    let mult1=13;
    let mult2=23;
    
    function mult(m1,m2) {
        mult0=m1*m2;
        return mult0;
    }

let multiplication=mult(mult1,mult2);
console.log(multiplication);

// *****************************************************************************
// division de deux nombres
// *****************************************************************************
    let divs=0;
    let div1=165;
    let div2=7;
    
    function div(d1,d2){
        divs=d1/d2;
        return divs;
    }

    let division=div(div1,div2)
    
    console.log(division);



// *****************************************************************************
// modulo de deux nombres
// *****************************************************************************

    let modulo=0;
    let mod1=48;
    let mod2= 7;
    
    function mod(mo1,mo2){
        modulo=mo1%mo2;
        return modulo;
        
    }
    
    let modulo1=mod(mod1,mod2);
    console.log(modulo1);


console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0


function askUserOperation(){
   let quyestion=prompt("quelle opération voulez-vous faire");
    
}