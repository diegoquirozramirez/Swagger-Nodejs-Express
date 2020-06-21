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
                            schema: {
                                codRes: {
                                    type: 'string',
                                    description: 'Code response',
                                    example: '00'
                                }
                            }
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
                            in: 'path',
                            required: true,
                            type: 'string',
                            example: '202015'
                        }
                    ],
                    responses: {
                        '00': {
                            descripcion: 'Process sucess',
                            schema: {
                                type: 'object',
                                properties: {
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
                            }                        
                        },
                        '01': {
                            descripcion: 'Process Success with dirty',
                            schema: {
                                type: 'object',
                                properties: {
                                    codRes: {
                                        type: 'string',
                                        descripcion: 'Code response',
                                        example: '01' 
                                    },
                                    message: {
                                        type: 'string',
                                        descripcion: 'Customer Not Found.',
                                        example: 'Customer not found'
                                    }                                        
                                }                                       
                            }                        
                        },
                        '99': {
                            descripcion: 'Process Error',
                            schema: {
                                type: 'object',
                                properties: {
                                    codRes: {
                                        type: 'string',
                                        description: 'Code response',
                                        example: '99'
                                    },
                                    message: {
                                        type: 'string',
                                        description: 'Error in the process',
                                        example: 'Error in the process'
                                    }
                                }                                       
                            }                        
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
                    /* requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        username: {
                                            type: 'string',
                                            example: 'newCustomer@gmail.com',
                                            required: true,
                                        }
                                    }
                                }
                            }
                        },                        
                        required: true,                  
                    }, */
                    responses: {
                        '00': {
                            description: 'Process Success',                            
                            schema: {
                                properties: {
                                    type: 'object',
                                    codRes: {
                                        type: 'string',
                                        description: 'Code response',
                                        example: '00'
                                    },
                                    message: {
                                        type: 'string',
                                        description: 'Message response',
                                        example: 'Customer saves successfully!'
                                    }
                                }                                
                            }
                        }                        
                    }
                }                
            },
        }
    },
    // ['.routers/*.js']
    apis : ["app.js"]
}

module.exports = {
    swaggerOptions
}