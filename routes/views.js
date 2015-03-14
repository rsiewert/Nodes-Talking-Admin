var util = require('util')

module.exports = function(app){
    app.get('/views/nodes-list', function(req, res){
        res.render('partials/nodes-list', { user: req.user })
    })
    app.get('/views/node-detail', function(req, res){
        // fetch node Id info here.
        res.render('partials/node-detail', { user : req.user })
    })
}