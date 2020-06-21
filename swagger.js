const schemita = require('./components/schemas/customer')

const swaggerOptions = {
    swaggerDefinition: {
        info : {
            version: '1.2.0',
            title : 'Customer',
            description : 'Customer API INformations',
            contact : {
                name : 'Diego Quiroz Ramirez (Software Developer)',
                email: 'ingquirozramirez@gmail.com',
                url: 'https://github.com/diegoquirozramirez'
            },
            license : {
                name : 'MIT',
                url: ''
            },
            servers : [
                {
                    url : `http://localhost:5000`,
                    description : 'Local Server'
                },
                /*  {
                    url: 'https://api_url_testing',
                    description: 'Testing server'
                },
                {
                    url: 'https://api_url_production',
                    description: 'Production server'
                } */
            ]
        },
        tags: [
            {
                name: 'Customer API REST'
            }
        ],
        paths: {
            '/customer': {
                get: {
                    tags: ['Customer API REST'],
                    description: 'Get All User',
                    operationId: 'getAllUser',
                    responses: {
                        '00': {
                            description: 'Process Success',
                            type: 'object',
                            schema: schemita.schemas.schemaAllCustomer00
                        },
                        '01': {
                            description: 'Process Success with dirty',
                            type: 'object',
                            schema: schemita.schemas.schemaAllCustomer01
                        },
                        '99' : {
                            description: 'Error Process',
                            type: 'object',
                            schema: schemita.schemas.schemaAllCustomer99
                        }
                    }
                }                
            },
            '/customer/{customerId}':{
                get: {
                    tags: ['Customer API REST'],
                    description: 'Get One User',
                    operationId: 'getOneUser',
                    parameters: [
                        {
                            name : 'customerId',
                            description: 'Identificator customer',
                            in: 'path',
                            required: true,
                            type: 'string',
                            example: '202015'
                        }
                    ],
                    responses: {
                        '00': {
                            descripcion: 'Process sucess',
                            schema: schemita.schemas.schemaOneCustomer00           
                        },
                        '01': {
                            descripcion: 'Process Success with dirty',
                            schema: schemita.schemas.schemaOneCustomer01                        
                        },
                        '99': {
                            descripcion: 'Process Error',
                            schema: schemita.schemas.schemaOneCustomer99                     
                        }                    
                    }
                }
            },
            '/newCustomer': {
                post: {          
                    tags: ['Customer API REST'],
                    description: 'Save One User',
                    operationId: 'saveOneUser',         
                    parameters: [
                        {
                            in: 'body',
                            name: 'values',
                            required: true,
                            schema: {
                                type: 'object',
                                properties: {
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
                            }
                        }
                    ],                   
                    responses: {
                        '00': {
                            description: 'Process Success',                            
                            schema: schemita.schemas.schemaNewOneCustomer00
                        },
                        '01': {
                            description: 'Process Success with dirty',                            
                            schema: schemita.schemas.schemaNewOneCustomer01
                        },
                        '99': {
                            description: 'Error Process',                            
                            schema: schemita.schemas.schemaNewOneCustomer99
                        }                        
                    }
                }                
            },
            '/customer/edit/{customerId}':{
                put : {
                    tags: ['Customer API REST'],
                    description: 'Edit customer by Id',
                    parameters: [
                        {
                            name: 'customerId',
                            description: 'Identificator customer',
                            in: 'path',
                            required: true,
                            type: 'string',
                            example: '202015'
                        }
                    ],
                    responses: {
                        '00': {
                            description: 'Process successfully',
                            schema: schemita.schemas.schemaEditOneCustomer00
                        },
                        '01': {
                            description: 'Process succes with dirty',
                            schema: schemita.schemas.schemaEditOneCustomer01
                        },
                        '99': {
                            description: 'Error Process',
                            schema: schemita.schemas.schemaEditOneCustomer99
                        }
                    }
                }                
            },
            '/customer/delete/{customerId}': {
                delete : {
                    description: 'Customer Delete',
                    tags: ['Customer API REST'],
                    parameters : [
                        {
                            name: 'customerId',
                            in: 'path',
                            required: true,
                            example: '202015',
                            description: 'Identicator Customer'
                        }
                    ],
                    responses: {
                        '00': {
                            description: 'Proccess Success',
                            schema: schemita.schemas.schemaDeleteOneCustomer00
                        },
                        '01': {
                            description: 'Process Success with dirty',
                            schema: schemita.schemas.schemaDeleteOneCustomer01
                        },
                        '99': {
                            description: 'Error Proccess',
                            schema: schemita.schemas.schemaDeleteOneCustomer99
                        }
                    }
                }
            }
        }
    },
    // ['.routers/*.js']
    apis : ["app.js"]
}

module.exports = {
    swaggerOptions
}