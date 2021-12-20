var express = require('express'); // node_modules에 있는 express 관련 파일을 가져온다.
var bodyParser = require('body-parser');
var app = express();

app.listen(3000, function() {
	console.log("start! express server on port 3000")
});

console.log("end of server..."); // 비동기로 처리하기 때문에 이게 먼저 실행된다.

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//url routing
app.get('/', function(req,res) {
	res.sendFile(__dirname + "/public/main.html")
})

app.post('/email', function(req,res) {
	res.render('email.ejs', {'email' : req.body.email})	
})

app.post('/ajax-email', function(req,res) {
	console.log(req.body.email)
	var responseData = {'result' : 'ok', 'email' : req.body.email}
	res.json(responseData)
})
