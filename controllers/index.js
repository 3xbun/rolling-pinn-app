module.exports.controller = app => {
    // Homepage
    app.get('/', (req, res) => {
        res.render('index', {title: 'Express'});
    });
};
