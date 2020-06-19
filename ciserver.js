//用nodeJS写webhook的post请求接收代码
const http=require('http')
const child=require('child_process')
var server=http.createServer()
server.on('request',function (reg,res) {
    res.end("sucess!")
    child.execFile('./cibuild.sh',function (error,stdout,stderr) {
        console.log((stdout))
    })
})
server.listen(3201,function (err) {
    if(!err){
        console.log("server start at port:"+3201)
    }
})