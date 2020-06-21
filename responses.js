class responseObjectSuccess {
    constructor(
        codRes, message
    ){
        this.codRes = codRes;
        this.message = message;
    }    
}

class responseObject {
    constructor(
        codRes, message
    ){
        this.codRes = codRes;
        this.message = message;
    }    
}

class responseGetOneUser extends responseObject{
    super(){}
    constructor(codRes, message, id, username, nombres, apellidos, email){
        this.codRes = codRes;
        this.message = message;
        this.id = id;
        this.username = username;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
    }
}