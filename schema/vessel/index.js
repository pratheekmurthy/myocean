const Joi = require('joi') 
const schemas = { 
  vesselSchema: Joi.object().keys({ 
    VslType: Joi.string().required()
  }),
  fetchOverviewSchema: Joi.object().keys({ 
    VesselmasterPk: Joi.string().required()
  })
}; 
module.exports = schemas;