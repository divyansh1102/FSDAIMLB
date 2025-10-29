// console.log("helloo world");
////////

// let a=10;
// if(a>20){
//     let a=50;
//     console.log("a inside value "+a);
// }
// else{
//     console.log(" inside else  value");
// }
// console.log("a outside value " +a);

// function as an expression
//  const data=function greetings(msg){
//     return"hiiii"+msg;
// }
// const msg=data("good mroning");
// console.log(msg);

//// ARROW function

// const data=(msg)=>{
//     // console.log(" hello world" +msg);
// return " hello world" +msg;
// }
// const data1=data("good morning");
// console.log(data1);


// const data= msg=>msg;
// const datal = data





//IIFe

// (()=>{
//     console.log("heloo.wroold");
// })();


//sey
// setTimeout(()=>(console.log("hello")),1000);
//  setInterval(()=>(console.log("hlojin")),1000);



// function greeting(msg="hellelel"){
//     console.log("hello"+msg);
// }
// greeting("come to abes");


function selectLanguage(lang){
   let data;
    if(lang=='java'){
        function javaCompiler(){
            return "hey,  java complier calling";
        }
        data=javaCompiler();
    }else if(lang=='c'){
        function cCompiler(){
            return "hey,c complier";
        }data=cCompiler();
    
    }
    else{
        data="not complier"
    }
    return data;

}