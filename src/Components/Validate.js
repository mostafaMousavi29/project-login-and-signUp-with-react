export const Validate = (data , type) =>{
    const Errors = {}

// *----------------------------------------------------------------------------------
    if(!data.email){
        Errors.email = "email is validate"
    }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        Errors.email = "email is not true"
    }else{
        delete Errors.email
    }
// *----------------------------------------------------------------------------------
    if(!data.pasword){
        Errors.pasword = "password is validate"
    }else if (data.pasword.length < 6){
        Errors.pasword = " lenght is 6 charecter or more"
    }else {
        delete Errors.pasword;
    }

// *----------------------------------------------------------------------------------        
if(type === "signUp"){

// *----------------------------------------------------------------------------------
    if(!data.name.trim()){
        Errors.name = "name is validate"
    }else{
        delete Errors.name
    }
// *----------------------------------------------------------------------------------
    if(!data.confirmPasword){
        Errors.confirmPasword ="please checked"
    }else if (data.confirmPasword !== data.pasword){
        Errors.confirmpasword = "password do not match"
    }else {
        delete Errors.confirmpasword
    }
// *----------------------------------------------------------------------------------
    if(data.inAccepted){
        delete Errors.inAccepted
    }else {
        Errors.inAccepted = "pls accept our regularized"
    }
}
    return Errors
}