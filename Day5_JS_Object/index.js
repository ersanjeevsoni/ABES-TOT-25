const emp={
    name:"abhay",
    age:21,
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

// display object's keys
/* function display(){
    for (const x in emp) {
        console.log(x, ":", emp[x]);
    }
}
display(); */
