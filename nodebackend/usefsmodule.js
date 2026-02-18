const fs= require('fs')
const { config } = require('process')
const fs1=require('fs').promises


function writeData(){
    let statusmsg="";
    try{
        fs.writeFileSync("student.txt","welcome to fs model")
        console.log("data is written successfully!!")
        statusmsg="data is written successfully!!"
    }catch(e){
         console.log("error is detect"+e)
         statusmsg="error is detect"+e
    }
    return statusmsg;

}

module.exports=writeData;