module.exports = async (req, res) => {
    const axios = require("axios");

    const email = req.query.email;

    if(!email) return res.status(400).json({ "error": "NO_EMAIL" });

    let data;

    try {
        const result = await axios.get("https://raw.freesubdomains.org");

        data = result.data;
    } catch(err) {
        return res.status(500);
    }

    const userDomains = data.filter(item => item.owner.email.replace(" (at) ", "@") === email);

    if(!userDomains.length) return res.status(404).json({ "error": "USER_NOT_FOUND" });

    let subdomains = [];

    userDomains.forEach(item => {
        subdomains.push(`${item.subdomain}.${item.domain}`);
    })

    const domains = [];
    const checkedDomains = [];

    data.forEach(item => {
        if(checkedDomains.includes(item.domain)) return;

        checkedDomains.push(item.domain);

        let domain = userDomains.filter(i => i.domain === item.domain);

        const itemSubdomains = [];

        domain.forEach(d => {
            itemSubdomains.push(d.subdomain);
        })

        domains.push({"domain":item.domain,"count":domain.length,"subdomains":itemSubdomains});
    })

    return res.status(200).json({
        "count": userDomains.length,
        "domains": domains,
        "subdomains": subdomains
    })
}