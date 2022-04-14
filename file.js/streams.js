const fs=require('fs');
const readSteam=fs.createReadStream('./docs/blog3.txt',{encoding:'utf-8'});
const writeSteam=fs.createWriteStream('./docs/blog4.txt');
readSteam.on('data',(chunk)=>{
    console.log('-----new chunk----')
    console.log(chunk);
    writeSteam.write('\new chunk\n');
    writeSteam.write('write');
})


readSteam.pipe(writeSteam);