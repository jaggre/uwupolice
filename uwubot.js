const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "%";

client.on("ready", () => {
  console.log("I am ready!");
    client.user.setActivity('THIS IS AN UWU FREE ZONE');
});

client.on("message", (message) => {

const uwuWords = ["owo" ];

    
const uwuResponses = ["The UWU POLICE are on the scene! PLEASE KEEP YOUR UWUs TO YOURSELVES AT ALL TIMES." ];

const uwuimageResponses = [{files: ["https://i.imgur.com/dJrpw2t.jpg"]}];

    /* TO ADD: Random Image Selection
    "https://i.imgur.com/RRyVUxw.png"  */  
    
if( uwuWords.some(word => message.content.includes(word)) ) {
  var response = uwuResponses [Math.floor(Math.random()*uwuResponses .length)];
 
    var uwus = uwuimageResponses
 [Math.floor(Math.random()*uwuimageResponses .length)];
            message.channel.send(response,uwus).then().catch(console.error);
  // Or just do message.delete();
}
    });



client.login(process.env.BOT_TOKEN);
