const fs = require('fs');
const readline = require('readline');
const { exit } = require('process');

//LEARNT - var and a global variable are not the same thing simply
const INIT_PATH = 'src/'
const fileList = fs.readdirSync(INIT_PATH)
// const fileList = []; removeNotice('src/assets/css/light-bootstrap-dashboard-react.min.css')

for (let i = 0; i < fileList.length; i++) {
	fileList[i] = INIT_PATH + fileList[i]
	
}
for (let i = 0; i < fileList.length; i++) {
	let path = fileList[i];
	if( fs.statSync(path).isDirectory() ){
		fileList.splice(fileList.indexOf(path), 1)
		fs.readdirSync(path).forEach( (p) => {
			fileList.push(path + '/' + p)
		} )
		--i
	}	
}

fileCounter = 0

fileList.splice(fileList.indexOf('parser.js'), 1)
fileList.forEach(async (path) => {
	if(path.includes('img') || path.includes('lbd') || path.includes('svg'))
		return fileList.splice(fileList.indexOf(path), 1)

	++fileCounter
	setTimeout(() => removeNotice(path), 0*(fileCounter-1))
})

let noticeCounter = 0
console.log("Total Files: ", fileCounter)
console.log("Found notice in: ", noticeCounter)

function removeNotice(filename) {

	let notice = ''
	let content = ''
	let counter = 0

	const rl = readline.createInterface({
		// input: fs.createReadStream(INIT_PATH + '/' + filename),
		input: fs.createReadStream(filename),
		output: process.stdout,
		terminal: false
	});

	rl.on('line', (line) => {

		line = line.concat('\n');

		if (counter < 17)
			notice = notice.concat(line);
		else
			content += line;

		++counter;
	});

	rl.on('close', () => {

		// console.log("For file -> ", filename);
		// console.log(notice)


		if (!notice.includes('===============')) {
			return console.log(filename, ' Notice not found in this file, aborting');
		// }else if(notice.length != 646){	//17
		// }else if(notice.length != 676){	//16
		}else if(notice.length != 670){	//14
			return console.log(filename, ' Chhota hai... Notice (', notice.length, ')');
		}
		++noticeCounter
		console.log(noticeCounter)
		// return

		fs.writeFile(filename + '.new', content, (err) => {
			if (err){
				console.error('Couldnt write file ', err);
				exit(0)
			}

			fs.unlink(filename, (err) => {
				if (err) {
					console.error('Couldnt delete old file ', err);
					exit(0)
				}

				fs.rename(filename + '.new', filename, (err) => {
					if (err) {
						console.error('Couldn\'t rename ', err);
						exit()
					}
				});
				console.log("File deleted successfully");
			});

			console.log('File written');
		});

	});
}
	