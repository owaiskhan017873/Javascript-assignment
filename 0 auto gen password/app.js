



function AutoGenPass(){
    let pass = "ASDFGHJKLMBVCXalasksd;lskfuerifsdjf[]/.;]/'..[.';[';23=-2430493570193802Q)(*)$(*)"
    let password = ""
    for(let i = 0 ; i < 12 ;i++){
        let value = Math.floor(Math.random() * pass.length)
        password += pass[value]
    }
alert(password)

}
AutoGenPass()