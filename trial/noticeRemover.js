/*
	This script written by me couldn't help

	Used the initial script i wrote itself, that did mosty work

	This script was meant to be a generalisation of the initial script, BUT messed up, read the UNSOLVED PROBLEM below
*/

const fs = require('fs');
const readline = require('readline');
const { exit } = require('process');
const { EventEmitter } = require('events');

//LEARNT - var and a global variable are not the same thing simply
const INIT_PATH = 'src/'
const notices = {
	//lines in notice(from top of file):
	// 	characters in that notice 
	14: 670,
	16: 670,
	17: 646,
	19: 655
}

const fileList = fs.readdirSync(INIT_PATH)
// const fileList = ['index.js'];

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

fileList.splice(fileList.indexOf('noticeRemover.js'), fileList.indexOf('noticeRemover.js') == -1 ? 0 : 1)
fileList.forEach(async (path) => {
	if(path.includes('img') || path.includes('lbd') || path.includes('svg') || path.includes('yarn') || path.includes('.git') || path.includes('fonts'))
		return fileList.splice(fileList.indexOf(path), 1)

	++fileCounter

	let noticeFound = false
	let retVal = []

	for (const key in notices) {
		let started = false
		let completed = false
		if (notices.hasOwnProperty(key)) {
			// retVal = await removeNotice(path, key)
			/*ORIGINAL -> above one

!!!UNSOLVED PROBLEM!!! -> In brief, "How to wait for a function to return, AFTER it has managed a particular event (here, the 'close' event) ?"

			PROBLEM -> Since, removeNotice() is based on event listeners, it finishes the rest of block,
						and returns, though in the background the events keep being listened
						by the listeners used in that function (even though control reached end of function block)
						In above case, retVal = undefined, since removeNotice doesn't return anything (it does so only in event listeners)

						await and w/o await, can cause the behaviour to be different (since, if for some part of loop, the faster loops will modify it, first)

						Now, i want the assignment above, to only happen, after the file reading has ended by the function's event loop,
						ie. after the function has managed the event 'close'

						So, to have the value of retVal to be good, i thought two ways
						1. To use the Sync counterparts to read synchronously
						2. More interesting, why not have the function itself return an event, after the file reading has ended, and then listen it here

						So, for now, since i dont know much of this returning event, and assigning a listener (Plus, which loop handles the event, is it surity)
						So, i will use try catch return for the same :D

						DIDN'T WORK OUT, (*had also replaced all return with throw, in removeNotice())
						For some reason

						*/
			try {
				started = true
				await removeNotice(path, key)
			} catch (returned) {
				completed = true
				retVal = returned
				console.log(retVal);
				if(retVal[0]){
					noticeFound = true
					if(!retVal[1])	console.error(path, ' -> I/O error')
					continue
				}
			}
		}
	}
	if(!noticeFound)	console.log(path, ' -> Notice not Found. Length -> ', retVal[2] );

	// setTimeout(() => removeNotice(path), 5000*(fileCounter-1))
})

let noticeCounter = 0
console.log("Total Files: ", fileCounter)
console.log("Found notice in: ", noticeCounter)

async function removeNotice(filename, linesOfNotice) {

	let notice = ''
	let content = ''
	let counter = 0
	const retFlags = [
		false,	//noticeFound
		false	//modifiedFile
	]

	const rl = readline.createInterface({
		// input: fs.createReadStream(INIT_PATH + '/' + filename),
		input: fs.createReadStream(filename),
		output: process.stdout,
		terminal: false
	});

	rl.on('line', (line) => {

		line = line.concat('\n');

		if (counter < linesOfNotice)
			notice = notice.concat(line);
		else
			content += line;

		++counter;

		if(counter == linesOfNotice){
			console.log(notice.length, notices[linesOfNotice])
			if ( !notice.includes('===============') || (notice.length != notices[linesOfNotice]) ) {
				console.log('Notice Not found [debug]');
				// Notice not found in this file
				retFlags[2] = notice.length
				return retFlags
			}
			++noticeCounter
			retFlags[0] = true
		}

	});

	rl.on('close', () => {

		console.log('Read file');

		fs.writeFile(filename + '.new', content, (err) => {
			if (err){
				console.error('Couldnt write file ', err);
				return retFlags
			}

			// fs.unlink(filename, (err) => {
			// 	if (err) {
			// 		console.error('Couldnt delete old file ', err);
			// 		return retFlags
			// 	}

			// 	fs.rename(filename + '.new', filename, (err) => {
			// 		if (err) {
			// 			console.error('Couldn\'t rename ', err);
			// 			return retFlags
			// 		}
			// 	});
			// 	console.log("File deleted successfully");
			// });

			console.log('File written');
			retFlags[1] = true
			return retFlags
		});

	});

}
