// **************************************************************
// Exercice1
// **************************************************************

let student1 = {
    name: "sandra",
    age: 37,
    average:15
    
};

console.log(student1.name);
console.log(student1.age);
console.log(student1.average);

// **************************************************************
// Exercice2
// **************************************************************
let student2 = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 8],
    average : 0
};

let sum=0;

for (let i = 0; i < student2.grades.length; i++) {

    sum=sum+student2.grades[i];
}
        console.log(sum);
       student2.average=sum/student2.grades.length;
       console.log(student2.average);
       
       

// **************************************************************
// Exercice3
// **************************************************************
       
      
       let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];

for( let student of students){
    console.log(student.name);
    console.log(student.age);
    console.log(student.average);

}