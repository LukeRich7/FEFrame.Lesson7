const arr = [
    {name:"chevy", count: 2},
    {name:"ford", count: 5},
    {name:"acura", count: 3},
    {name:"honda", count: 16},
];


const newArr = arr.filter(function(ford){
    return ford.name==='ford';

});

console.log(newArr);

const students = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

addNewStudent = [...students,...newStudents];

console.log(addNewStudent);


 

  