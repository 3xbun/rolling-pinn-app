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
        "Thank you for your lovely reviews today ❤️❤️❤️ we are glad to deliver some #cookieclimax to your home 💋💋💋 🥰🥰🥰. Order some cookies to get your ultimate #cookieclimax!! Just DM us ❤️❤️❤️."
    ]

    return render_template('index.html', greeting=greeting, thankyou=thankyou)


    greeting = []
