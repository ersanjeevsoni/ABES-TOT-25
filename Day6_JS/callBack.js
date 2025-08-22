//achieve asychronous using callback

//first see synchrous  then apply settimeout to show delibretly asynchrous way ..but it is not successful
/*  function register(){
      setTimeout(()=>{
console.log("register user end");
    },2000);
    // console.log("register user");
 }
  function sendEmail(){
    setTimeout(()=>{
console.log("send mail end");
    },1000);
// console.log("send mail end");
    
 }

  function login(){
    console.log("user login");
 }

  function getData(){
    console.log("user data");
 }

  function displayData(){
    console.log("Display user data");
 }
 register();
 sendEmail();
 login();
 getData();
 displayData();
 console.log("call other application"); */

 // solution for above code
 //1. callback
 // 2. promises
 // 3. Aynch and Await

 //calling independent function as call back function
/* 
 function register(sendEmail){
      setTimeout(()=>{
console.log("register user end");
sendEmail(login);
    },1000);
    // console.log("register user");
 }
  function sendEmail(login){
    setTimeout(()=>{
console.log("send mail end");
 login(getData);
    },2000);
   

// console.log("send mail end");
    
 }

  function login(getData){
    console.log("user login");
    getData(displayData);
 }

  function getData(displayData){
    console.log("user data");
    displayData();
 }

  function displayData(){
    console.log("Display user data");
 }
 register(sendEmail);
 console.log("call other application");  */
//calling independend fucntion into single callback function


 function register(cb){
      setTimeout(()=>{
console.log("register user end");
cb();
    },1000);
    // console.log("register user");
 }
  function sendEmail(cb){
    setTimeout(()=>{
console.log("send mail end");
cb();
    },2000);

// console.log("send mail end");
    
 }

  function login(cb){
    console.log("user login");
    cb();
 }

  function getData(cb){
    console.log("user data");
    cb();
 }

  function displayData(){
    console.log("Display user data");
 }

 //callback hell ---becuase face diffculites.. 
 register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            });
        });
    });
 });
 console.log("call other application"); 
