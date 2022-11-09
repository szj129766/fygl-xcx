let sendHttp=require("../utils/request.js")
let getallList=(data)=>sendHttp("/queryTaskRwdtList","post","data")
module.exports={
  getallList,
}