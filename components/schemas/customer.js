const schemas = {
    schemaAllCustomer00 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '00'
            },
            message: {
                type: 'string',
                example: 'Proccess Success'
            }
        }
    },

    schemaAllCustomer01 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '01'
            },
            message: {
                type: 'string',
                example: 'Not found customers'
            }
        }
    },

    schemaAllCustomer99 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '99'
            },
            message: {
                type: 'string',
                example: 'Error in the process'
            }
        }
    },

    schemaOneCustomer00 : {
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
    },     
    schemaOneCustomer01 : {    
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
    },
    
    schemaOneCustomer99 : {
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
    },

    schemaNewOneCustomer00 : {
        type: 'object',
        properties: {                                    
            codRes: {
                type: 'string',
                description: 'Code response',
                example: '00'
            },
            message: {
                type: 'string',
                description: 'Message response',
                example: 'Customer saves successfully!!!'
            }
        }       
    },

    schemaNewOneCustomer01 : {
        type: 'object',
        properties: {                                    
            codRes: {
                type: 'string',
                description: 'Code response',
                example: '01'
            },
            message: {
                type: 'string',
                description: 'Message response',
                example: 'Customer don´t saves successfully!!!'
            }
        }       
    },

    schemaNewOneCustomer99 : {
        type: 'object',
        properties: {                                    
            codRes: {
                type: 'string',
                description: 'Code response',
                example: '99'
            },
            message: {
                type: 'string',
                description: 'Message response',
                example: 'Error in the process'
            }
        }       
    },

    schemaEditOneCustomer00 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '00'
            },
            message: {
                type: 'string',
                example: 'Edit Successfully'
            }
        }
    },

    schemaEditOneCustomer01 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '01'
            },
            message: {
                type: 'string',
                example: 'Not Work Edit Customer'
            }
        }
    },

    schemaEditOneCustomer99 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '99'
            },
            message: {
                type: 'string',
                example: 'Error in the process'
            }
        }
    },

    schemaDeleteOneCustomer00 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '00'
            },
            message: {
                type: 'string',
                example: 'Customer Deleted'
            }
        }
    },

    schemaDeleteOneCustomer01 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '01'
            },
            message: {
                type: 'string',
                example: 'Customer Not Deleted'
            }
        }
    },

    schemaDeleteOneCustomer99 : {
        type: 'object',
        properties: {
            codRes: {
                type: 'string',
                example: '99'
            },
            message: {
                type: 'string',
                example: 'Error in the process'
            }
        }
    }


}



module.exports = {
    schemas
}