const fs = require('fs');
function reversedDataToFile(para){
    return para.split('\n').reverse().join('\n');
}
function writeContentToFile(outputFilePath,content){
    fs.writeFile(outputFilePath,content,(err)=>{
        if(err){
            callback(err);
            return;
        }
        console.log(`reversed content in ${outputFilePath}`)
    });
}

module.exports = {reversedDataToFile,writeContentToFile}
