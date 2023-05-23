
// ********************************************************************************
// Exercice 1
// ********************************************************************************

let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];

for (var i = 0; i < animals.length; i++) {
    
    console.log(animals[i]);
}



let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];
for( let god of gods){
    
    console.log(god);
}


// ********************************************************************************
// Exercice 2
// ********************************************************************************
let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

for(let i=0; i<=animals_even.length; i++){
    if(i%2===0){
        console.log(animals_even[i]);
    }
}

for (let i = 0; i < animals_odd.length; i++) {
    if(i%2!==0){
        console.log(animals_odd[i]);
    }
}


// ********************************************************************************
// Exercice 3
// ********************************************************************************

let numbers = [10, 11, 15, 6];

let sum = 0;
for(let i=0; i<=numbers.length; i++){
    
     sum=sum + numbers[i];
        console.log(sum);

}


// ********************************************************************************
// Exercice 4
// ********************************************************************************
let grades = [[20, 10], [15, 20], [13, 18]];
let i=0
let average = 0;
let somme=0;

for (let grade of grades){
    
    
  somme=somme+grade[0]+grade[1];
}
    console.log(somme);
