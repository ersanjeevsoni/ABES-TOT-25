const emp={
    name:"abhay",
    age:21,
    22:"myAge",
    isMarried:false,
    add:"GZB",
    languages:{
        lang1:"java",
        lang2:"php",
        lang3:"python"
    },
    databeses:[
        {
            db1:"orcle",
            db2:"mysql"
        },
        {
            frmwrk1:"Hibernate",
            frmwrk2:"Spring"
        }]

}
/* console.log(emp);
console.log(emp.name);
console.log(typeof(emp.age)); */
//access object's keys using bracket notation
// console.log(emp['add']);
console.log(emp.databeses[1].frmwrk2);

// insert key into object
emp.company="Infosys";
console.log(emp);
//update key's value
emp.databeses[0].db1="MongoDB";
console.log(emp);

// incase of numeric keys..access using brackets
console.log(emp[22]);

// display object's keys
/* function display(){
    for (const x in emp) {
        console.log(x, ":", emp[x]);
    }
}
display(); */

//delete keys
console.log(delete emp[22]);
console.log(emp);
