module.exports.controller = app => {
    // Homepage

    items = require('../public/javascripts/items');

    promotion = [
        
    ]

    thankyou = [
        {
            id: 1,
            ph: "Thank you ka!\nWe hope you will enjoy our sweets ka! ❤️❤️❤️",
        },
        {
            id: 2,
            ph: "Let us know if u would like some na ka. \nIt’s very good ka ♥️",
        },
        {
            id: 3,
            ph: "Thank you for your support ka! Let us know what you think of our sweets ❤️ we hope you will enjoy it 😍😍😍",
        },
        {
            id: 4,
            ph: "Please let us know if you’re interested in other treats too na ka\nThank you! Ka"
        }
        
    ]

    app.get('/', (req, res) => {
        res.render('index');
    });
};
