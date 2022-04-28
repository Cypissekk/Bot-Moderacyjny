const config = require("../../config.json");
module.exports = async client => {

  console.log(`${config["Konfiguracja"].name} ON`);
    setInterval(() => {
        const statuses = [
            `pozdro`,
            `by !!! rozjechanie_top1#0001`,
            ``,
            `polska lol`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "STREAMING"}) 
    }, 2000)}



