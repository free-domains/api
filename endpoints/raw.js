module.exports = async (req, res) => {
    const axios = require("axios");

    let data;

    try {
        const result = await axios.get("https://free-domains.github.io/raw");

        data = result.data;
    } catch(err) {
        return res.status(500);
    }

    return res.status(200).send(data);
}