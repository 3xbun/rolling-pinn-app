from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    greeting = [
        "Hello! What would you like to order ka?"
        ]
    thankyou = [
        "Thank you ka!\nWe hope you will enjoy our sweets ka! ❤️❤️❤️",
        "Thank you for your support ka! Let us know what you think of our sweets ❤️ we hope you will enjoy it 😍😍😍",
        "Let us know if u would like some na ka. \nIt’s very good ka ♥️",
        "Please let us know if you’re interested in other treats too na ka\nThank you! Ka"
    ]

    return render_template('index.html', greeting=greeting, thankyou=thankyou)


    greeting = []
