module.exports = async (req, res) => {
    const axios = require("axios");

    let data;

    try {
        const result = await axios.get("https://free-domains.github.io/raw");

        data = result.data;
    } catch(err) {
        return res.status(500);
    }

    const ownerEmails = [];
    let owners = 0;

    data.forEach(item => {
        if(ownerEmails.includes(item.owner.email.toLowerCase())) return;

        ownerEmails.push(item.owner.email.toLowerCase());
        owners++;
    })

    const domains = [];

    data.forEach(item => {
        if(domains.includes(item.domain)) return;

        domains.push(item.domain);
    })

    const domainData = [];

    domains.forEach(domain => {
        const obj = {
            "domain": domain,
            "subdomains": data.filter(item => item.domain.toLowerCase() === domain.toLowerCase()).length
        }

        domainData.push(obj);
    })

    return res.status(200).json({
        "subdomains": data.length,
        "individual_owners": owners,
        "domains": domainData,
        "records": {
            "A": data.filter(item => item.records.A).length,
            "AAAA": data.filter(item => item.records.AAAA).length,
            "CNAME": data.filter(item => item.records.CNAME).length,
            "MX": data.filter(item => item.records.MX).length,
            "TXT": data.filter(item => item.records.TXT).length
        },
        "proxied": {
            "true": data.filter(item => item.proxied === true).length,
            "false": data.filter(item => item.proxied === false).length
        }
    })
}