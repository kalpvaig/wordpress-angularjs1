const express =require("express");
const app = express();
const dirname =("view/home.html")
app.listen(7000,()=>{
	console.log("server start");
	res.sendFile(path.join(__dirname, '../view', 'home.html'));
})