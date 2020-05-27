module.exports.controller = app => {
    // Homepage

    items = require('../public/javascripts/items');

    promotion = [
        
    ]

    phases = [
        {
            id: 1,
            ph: "Brownies: please refrigerate for fudginess and microwave 5-10 seconds for ooziness ka. Shelf life is 1 week ka.\nSmall/Big cookies: if you don't consume them the same day, please refrigerate for freshness and microwave for 15 seconds for ooziness. Shelf-life is one week long.\nChoc pudding: can be refrigerated 3-4 days. Leave it at room temp 15-20 mins for an ultra-moist texture!",
            situation: "การเก็บรักษา"
        },
        {
            id: 2,
            ph: "Let us know if u would like some na ka\nIt’s very good ka ♥️\nPlease let us know if you’re interested in other treats too na ka\nThank you! Ka",
            situation: "เมื่อลูกค้า จะกลับมา"
        },
        {
            id: 3,
            ph: "These are the following flavors for our cakes\n- Banana Nutella\n- Carrot cream cheese\n- Chocolate pudding\n- Basque cheesecake\n\n1lb 1500\n2lb 2500\n***delivery fee will be extra expensive because we have to deliver by car.\n***we are not responsible for any damages happen to the cake during the car delivery na ka.",
            situation: "เค้ก"
        }
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
