const { insults } = require("./Api/insults");

Insults = () => {
    const insult = insults[Math.floor(Math.random() * insults.length)];
                           
    return insult;
}
