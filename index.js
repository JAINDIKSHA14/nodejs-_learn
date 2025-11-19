const http=require("http");
const fs=require("fs");
const url=require("url");

const myserver=http.createServer((req,res)=>{
  if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()} ${req.url} new Req rec\n`;
    const myUrl=url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("rec.txt",log,(err,Data)=>{ 
      switch(req.url){    
        case '/' :
       res.end("hello from server!") ;
       break ;
      case '/about':
       res.end("hey diksha") ;
       break;
       default :
       res.end("error found!") ;
  }})
    

    }
        
);
myserver.listen(7000,()=>console.log("server run successfully"));