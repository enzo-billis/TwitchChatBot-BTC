let tmi = require('tmi.js');
let btcValue = require('btc-value');
let params = require('./params')

let options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        username: "Zouzouil782_fr",
        password: params["token"]
    },
    channels: ["zouzouil782_fr"]
};

let ubtcvalue;

let client = new tmi.client(options);

let commandsKnow = {conv, help};

client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)
client.on('disconnected', onDisconnectHandler)

client.connect();

function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`)
    client.say(options["channels"][0],"Coucou")
}

function onMessageHandler (target, context, msg, self) {
    if(self) {return}
    refreshBtcValue();

    if(msg.substr(0,1) !== "!") {
        return
    }

    const parse = msg.slice(1).split(' ')

    const commandName = parse[0]

    const params = parse.splice(1);

    if(commandName in commandsKnow) {
        const command = commandsKnow[commandName]

        command(target, context, params)
        console.log(`* Executed ${commandName} command for ${context.username}`)
    } else {
        console.log(`* Unknown command ${commandName} from ${context.username}`)
    }
}

function conv (target, context, params) {
    if(params[0]){
        const convertedValue = params[0]*ubtcvalue
        client.say(target, params[0]+" ubtc = "+convertedValue+" €.")
    }
}

function help (target, context, params) {
    client.say(target, "Ecrivez !conv [ubtc] dans le chat. Où [ubtc] est la valeur de ubtc à convertir en euros.")
}

function onDisconnectHandler (reason) {
    console.log(`Disconnected: ${reason}`)
    process.exit(1)
}

function refreshBtcValue(){
    btcValue.getConvertedValue('EUR').then(value => {
        ubtcvalue = value / 1000000

    })
}