module.exports.controller = app => {
    // Homepage

    promotion = [
        {
            id: 1,
            ph:"To celebrate 10k+ Followers on Instagram, we are giving ฿100 off our best selling Chocolate Pudding Cake ! Would you like to add it to your order ? Limited number of pieces only, so grab it before it’s gone !"
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

    items = [
        {
            category: "Individual",
            items: [
                {
                    id: "dcc",
                    class: "ind",
                    name: "Death by Chocolate Pudding Cake"
                }
            ]
        },
        {
            category: "Cakedashians",
            items: [
                {
                    id: "cp",
                    name: "Chocolate Pudding"
                },
                {
                    id: "bc",
                    name: "Basque Cheesecake"
                },
                {
                    id: "cc",
                    name: "Carrot Cream Cheese"
                },
                {
                    id: "bn",
                    name: "Banana Nutelle"
                }
            ]
        },
        {
            category: "Brownie Bites",
            items: [
                {
                    id: "bae",
                    name: "Bae"
                },
                {
                    id: "rv",
                    name: "Red Velvet"
                },
                {
                    id: "fud",
                    name: "Fudge"
                }
            ]
        },
        {
            category: "The Big C's",
            items: [
                {
                    id: "hn",
                    name: "Hella Nutella"
                },
                {
                    id: "cup",
                    name: "Cup C"
                },
                {
                    id: "dc",
                    name: "Death by Chocolate XL"
                },
                {
                    id: "rvc",
                    name: "Red Velvet Cream Cheese"
                },
                {
                    id: "oro",
                    name: "Oreo"
                }
            ]
        },
        {
            category: "Soft Cookies",
            items: [
                {
                    id: "mama",
                    name: "Mama OG"
                },
                {
                    id: "dt",
                    name: "Double Trouble"
                },
                {
                    id: "baby",
                    name: "Baby OG"
                },
                {
                    id: "cm",
                    name: "Conflake Mashmallow"
                },
                {
                    id: "tc",
                    name: "Trible C"
                },
                {
                    id: "sexy",
                    name: "Sexy Back"
                },
                {
                    id: "mp",
                    name: "Matcha Powwow"
                }
            ]
        },
        {
            category: "Cookie Cake",
            items: [
                {
                    id: "dccc",
                    name: "Death by Chocolate"
                },
                {
                    id: "cupcc",
                    name: "Cup C"
                }
            ]
        },
        
    ]

    app.get('/', (req, res) => {
        res.render('index');
    });
};
