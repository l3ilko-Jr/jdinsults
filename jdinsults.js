const { insults } = require("./Api/insults");

Insult = () => {
    const insult = insults[Math.floor(Math.random() * insults.length)];
                           
    return insult;
}

module.exports.Insult = Insult
