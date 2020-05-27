const listItems = {}

for (item in items) {
    for (i of items[item].items) {
        listItems[i.id] = i.name;
    }
}

function copyToClipboard(containerid) {
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}

function getResult() {
    const items = document.querySelectorAll(".item");
    const showResult = document.querySelector("#result");
    let orders = [];
    let result = '';
    let total = 0;

    // Information
    const information = document.querySelector("#information").value;
    const delivery = document.querySelector("#delivery_fee").value;

    result += `${information}\n\nDelivery fee ${delivery}\n\nOrder\n`

    for (item of items) {
        if (item.value != "") {
            orders.push(item);
        }
    }

    let ind = [];
    let cake = [];
    let bb = [];
    let bc = [];
    let sc = [];
    let cc = [];
    let cs = [];
    let wc = [];

    for (order of orders) {
        if (order.classList[0] == "ind") {
            ind.push(order)
            result += `${order.value} ${listItems[order.id]} ${calculator(ind, 'ind')}\n\n`
        } else if (order.classList[0] == "cake") {
            cake.push(order);
        } else if (order.classList[0] == "bb") {
            bb.push(order);
        } else if (order.classList[0] == "bc") {
            bc.push(order);
        } else if (order.classList[0] == "sc") {
            sc.push(order);
        } else if (order.classList[0] == 'cc') {
            cc.push(order);
        } else if (order.classList[0] == 'cs') {
            cs.push(order);
        } else if (order.classList[0] == 'wc') {
            wc.push(order);
        }
    }

    // Cakedashians
    if (cake.length > 0) {
        result += `${cake.length} Cakedashians ${calculator(cake, 'cake')}\n${counter(cake, true)}\n`;
    }

    // Brownie Bites
    if (bb.length > 0) {
        amt = 0
        let box = 0

        for (order of bb) {
            amt += Number(order.value);
        }

        while (amt > 0) {
            if (amt >= 18) {
                amt -= 18;
                box += 1;
            } else if (amt >= 9) {
                amt -= 9;
                box += 1;
            } else {
                break;
            }
        }

        result += `${box} box(es) of Brownie Bites ${calculator(bb, 'bb')}\n${counter(bb)}\n`;
    }

    // The Big C's
    if (bc.length > 0) {
        amt = 0

        for (order of bc) {
            amt += Number(order.value);
        }

        result += `${amt} The Big C's ${calculator(bc, 'bc')}\n${counter(bc)}\n`;
    }

    // Chocolate Invasion
    if (sc.length > 0) {
        amt = 0
        let box = 0;

        for (order of sc) {
            amt += Number(order.value);
        }

        while (amt > 0) {
            if (amt >= 12) {
                amt -= 12;
                box += 1;
            } else if (amt >= 5) {
                amt -= 5;
                box += 1;
            } else {
                break;
            }
        }

        result += `${box} box(es) of Soft Cookies ${calculator(sc, 'ci')}\n${counter(sc)}\n`;
    }

    // Cookie Cake
    if (cc.length > 0) {
        amt = 0;
        for (order of cc) {
            amt += Number(order.value);
        }
        result += `${amt} Cookie Cake ${calculator(cc, 'cc')}\n${counter(cc, true)}\n`;
    }

    // Cake by the Slice
    if (cs.length > 0) {
        amt = 0
        let box = 0;

        for (order of cs) {
            amt += Number(order.value);
        }

        while (amt > 0) {
            if (amt >= 8) {
                amt -= 8;
                box += 1;
            } else if (amt >= 6) {
                amt -= 6;
                box += 1;
            } else if (amt >= 3) {
                amt -= 3;
                box += 1;
            } else {
                break;
            }
        }

        result += `${box} box(es) of Cake by the Slice ${calculator(cs, 'cs')}\n${counter(cs)}\n`;
    }

    // Cake by the Slice
    if (wc.length > 0) {
        amt = 0;
        for (order of wc) {
            amt += Number(order.value);
        }

        result += `${amt} Cookie Cake ${calculator(wc, 'cake')}\n${counter(wc, true)}\n`;
    }

    // Grand Total
    result += `Total ${Number(delivery) + calculator(ind, 'ind') + calculator(cake, 'cake') + calculator(bb, 'bb') + calculator(bc, 'bc') + calculator(sc, 'ci')}`

    showResult.innerHTML = result;
}

function counter(orders, cake=false) {
    let result = ''

    if (cake) {
        for (order of orders) {
            result += `- ${listItems[order.id]} ${order.value} lb(s)\n`
        }
    } else {
        for (order of orders) {
            result += `- ${listItems[order.id]} ${order.value}\n`
        }
    }


    return result
}

function calculator(orders, name) {
    total = 0

    if (name == 'ind') {
        for (order of orders) {
            total += 750 * Number(document.querySelector("#dcc").value);
        }
    } else if (name == 'cake') {
        for (order of orders) {
            if (order.value == "1") {
                total += 1500
            } else if (order.value == "2") {
                total += 2500
            }
        }
    } else if (name == 'bb') {
        lgt = 0;
        for (order of orders) {
            lgt += Number(order.value)
        }

        while (lgt > 0) {
            if (lgt >= 18) {
                lgt -= 18;
                total += 640;
            } else if (lgt >= 9) {
                lgt -= 9;
                total += 360;
            } else {
                total = "error"
                break;
            }
        }
    } else if (name == 'bc') {
        lgt = 0;
        for (order of orders) {
            lgt += Number(order.value)
        }
        
        total += 150 * lgt;
    } else if (name == 'ci') {
        lgt = 0;
        for (order of orders) {
            lgt += Number(order.value);
        }
        
        while (lgt > 0) {
            if (lgt >= 12) {
                lgt -= 12;
                total += 990;
            } else if (lgt >= 5) {
                lgt -= 5;
                total += 450;
            } else {
                total = "error"
                break;
            }
        }
    } else if (name == 'cs') {
        lgt = 0;
        for (order of orders) {
            lgt += Number(order.value);
        }
        
        while (lgt > 0) {
            if (lgt >= 8) {
                lgt -= 8;
                total += 1600;
            } else if (lgt >= 6) {
                lgt -= 6;
                total += 1200;
            } else if (lgt >= 3) {
                lgt -= 3;
                total += 660;    
            } else {
                total = "error"
                break;
            }
        }
    }

    return total
}