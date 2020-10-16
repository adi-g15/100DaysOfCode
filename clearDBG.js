const { unlink, readdirSync, Stats, statSync } = require('fs');

let _fMode = 33206
let _dirMode = 16822
function initFiles(dir){
    let arr = []

    for(file of readdirSync(dir)){
        arr.push(file);
        if( statSync(file).mode == _dirMode ){
            arr.push(...initFiles(file));
        }
    }
    return arr;
}

const files = initFiles('.')

const flags = [
    ".exe",
    ".pdb",
    ".ilk",
    ".obj"
]

const regs = []
for (flag of flags) regs.push(new RegExp(flag += '$') );

const exclude = [
    "tree_print.exe"
]

function isMatchingFlags(name){
    for( reg of regs ){
        if( reg.test(name) ) return true;
    }
    return false;
}



{
    let fileName = "";  // the filename, or directory name to be deleted
    //iterate through all files, subdirectory
    if( isMatchingFlags(fileName) ){
        // unlink(fileName, (err) => {
        //     console.log(err.message);
        // })

        console.log(fileName, ' matches it');
    }

}
