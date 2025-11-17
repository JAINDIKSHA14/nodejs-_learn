const fs=require("fs");
//sync
//fs.writeFileSync("./test.txt","hello world");
//async
fs.writeFile("./test.txt","hello diksha!",(err)=>{});
//sync
//const result=fs.readFileSync("./test.txt","utf-8");
//console.log(result);
//async
/*fs.readFile("./test.txt","Utf-8",(err,res)=>{
    if(res){
        console.log(res);
    }
        else{
            console.log(" result not found");  
        }
    }
)*/
fs.appendFile("./test.txt","what happened?",(err)=>{});
fs.cpSync("./test.txt","./copy.txt")

