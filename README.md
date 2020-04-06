
# ZBot V2.0

*A useless twitch chatbot*

Actually, ZBot allow you to add few functionalities to your Twitch chat.


 - Auto update the BTC value
 - Convert uBTC -> Euro/Dollar/Livre and vice versa
 - Manage timeout apply to commands
 - Totally configurable ! Yay !

Each streamer can do whatever they want with ZBot, it's totaly free and open source ! Please read carefully the guideline below.

## Prerequisite

 - Node JS ([https://nodejs.org/en/download/](https://nodejs.org/en/download/))
 - A Twitch Account (Nooooo really ??)
 - Your personnal computer or a server
 - 5 minutes of your time
 
## Installation
 - Download sources [here](https://github.com/enzo-billis/ZBot-TwitchChatBot-BTC/archive/master.zip) 
 - Unzip in a fresh folder and install dependencies through a command line (located in this folder). Use the following command to install them:  `npm i`
 - Duplicate the file ***params.json.EXEMPLE*** and rename it to ***params.json*** (Care, don't move the file !)
 - Open params.json and fill it like this: 
	 - **token**: Token of the Twitch Account (find it [here](https://twitchapps.com/tmi))
	 - **username**: Name of the Twitch account used above. Lowercase only.
	 - **channels**: List of the channel, whose ZBot will connect after starting. 
	 Example : *["DarkWador", "Choubi", "JohnSnow"]*
	 - **currency**: This is the currency whose ZBot will use, choose between "EUR", "USD" ou "GBP"
	 - **refreshEvery**: Refresh delay for the BTC rate (second)
	 - **convertTimeout**: Minimal duration between two conversion command (second)
- Finally start ZBot with the following : `npm start`
	 
When these steps are done ZBot is ready to work ! You don't need to configure it again. Next time just start it with `npm start`.
Please do not close the command line, or shutdown your computer, otherwise ZBot will stop working.

## Commands

### Conversion
There is multiple ways to use the conversion command:

 - !c [value] [currency] 
 - !conv [value] [currency]
 - !convert [value] [currency]

[value] is the value to convert. 
[currency] is the currency for you conversion. For example you want to convert in uBTC to Euro, so you will write "€" or "eur" or just "e". Of course you can convert from the choosen currency (in you params.json) to uBTC, you don't have to write any currency. uBTC is the default currency.

As you can see, ZBot is reliable, there is multiple ways to write your conversion command. There is few examples:

    !convert 100 eur
 

>   100 € -> 15101 μbtc

    !conv 100
 

>   100 μbtc -> 1 €
    
    !conv 100 e
 

>   100 € -> 15101 μbtc

    !conv 100 usd
 

>   100 € -> 15101 μbtc

    !c 100 $
 

>   100 $ -> 13953 μbtc

 Thank's to for the markdown editor : [StackEdit](https://stackedit.io/).
