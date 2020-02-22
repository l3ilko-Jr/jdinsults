const { insults } = require("./Api/insults");

module.exports = function insults() {
    const insult = insults[Math.floor(Math.floor() * insults.length)];

    return insult;
}