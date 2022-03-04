const fs= require("fs")  // it's must required for import(require) method


function login(req,res){                    //this is a function of login 
     res.write("login.....")                //there two entitys 1).request(for user)
     res.end()                               //                 2).responce (for server)

}

function signup(req,res){
    res.write("SignUp.....")
    res.end()
    
}

function signup(req,res){
    let signupHtml=fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveUser(req,res)
{
    console.log(req.body)
    res.write("Data saved")
    res.end()
}

//export
module.exports.login = login
module.exports.signup =signup
module.exports.saveuser = saveUser