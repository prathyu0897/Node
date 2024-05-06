const fs = require('fs');
const {reversedDataToFile,writeContentToFile} = require('./util.js')
function reversedFile(demo,myDemo,callback){
    fs.readFile(demo,'utf8',(err,data)=>{
       console.log('#44',data)
        if(err){
            callback(err);
            return;
        }
        try{
            const reversedContent = reversedDataToFile(data);
            // console.log(reversedContent)
            writeContentToFile(myDemo,reversedContent)
        }
        catch(err){
            console.log('Error: ',err)
        }
    });
}
const demo = 'demo.txt';
const myDemo = 'myDemo.txt';

reversedFile(demo,myDemo,(err)=>{
    if(err){
        console.error('Error:',err)
    }
})
