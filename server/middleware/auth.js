const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  //if req.cookies is empty
  if (Object.keys(req.cookies).length === 0) {
    //create new session
    models.Sessions.create()
      .then((result)=>{
        return models.Sessions.get({id: result.insertId});
      }).then((hash) =>{

      });
  }

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

