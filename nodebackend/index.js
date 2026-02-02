const http=require('http');
const  PORT=40010;
const server = http.createServer((req,res)=>{
//     res.setHeader('content-type','text/html');
// res.end("<h2 style-color:red>hello,welcome to node server</h2>");

if(req.url=='/msg' && req.method=='GET'){
    res.setHeader('content-type','text/html');
    res.end("<h1>hello geez </h1>");
}

if(req.url=='/data' && req.method=='GET'){
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({message:"welcome to the data endpoint!"}));
}
if(req.url=='/data' && req.method=="POST"){
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({message:"welcome to the data endpoint!"}));
}
if(req.url === '/delete' && req.method === 'GET'){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Data deleted successfully!" }));
}


})
server.listen(PORT,() => {
    console.log('service is available at $(PORT)')
})