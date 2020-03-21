const GeneralPost = require('../controller/generalPostController'); 

module.exports = app => {
    app.route('/general').get(GeneralPost.list); 
    app.route('/general').post(GeneralPost.create); 
}