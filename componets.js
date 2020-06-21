const schemaOneCustomer = {
    codRes: {
        type: 'string',
        description: 'Code response',
        example: '00'
    },
    id: {
        type: 'integer',
        descripcion: 'the customer id',
        example: 202012,
    },                                         
    username: {
        type: 'string',
        descripcion: 'the username of customer',
        example: 'diegoquirozramirez',
    },                                           
    nombres: {
        type: 'string',
        descripcion: 'the first name of customer',
        example: 'Diego Antonio'
    },                                        
    apellidos: {
        type: 'string',
        descripcion: 'the last name of customer',
        example: 'Quiroz Ramirez'
    },                                        
    email: {
        type: 'string',
        descripcion: 'the email of customer',
        example: 'ingquirozramirez@gmail.com' 
    }         
}