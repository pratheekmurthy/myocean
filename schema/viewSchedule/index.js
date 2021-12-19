const Joi = require('joi') 
const schemas = { 
    fetchPOLList: Joi.object().keys({ 
        fromportfk: Joi.string().required()
    }),
    fetchPODSchema: Joi.object().keys({ 
        toportfk: Joi.number().required()
    }),
    fetchTerSchema: Joi.object().keys({ 
        PortFK: Joi.number().required()
    })
}; 
module.exports = schemas;