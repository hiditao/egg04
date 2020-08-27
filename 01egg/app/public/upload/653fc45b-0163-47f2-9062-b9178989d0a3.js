let fs = require("fs");

/*
fs.copyFile("./a.png", "./b.png", (err) => {
	if(err)
		console.error(err);
	else 
		console.log("success");
})
*/
/*
fs.readFile("./a.png", (err, data)=> {
	if(err) console.error(err)
	fs.writeFile("./c.png", data, err => {
		if(err) console.error(err);
		console.log("success");
	});
});
*/

/*
let file = fs.createReadStream("./a.png");
let out = fs.createWriteStream("./d.png");
file.on("data", data=>{
	out.write(data);
});
file.on("end",()=>{
	out.end();
});
*/

let file = fs.createReadStream("./a.png");
let out = fs.createWriteStream("./e.png");
file.pipe(out);