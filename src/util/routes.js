module.exports = {
    "cli": {
        "oauth": require("../endpoints/cli/oauth")
    },
    "count": require("../endpoints/count"),
    "domains": {
        "domain": require("../endpoints/domains/domain")
    },
    "lookup": {
        "domain": require("../endpoints/lookup/domain"),
        "user": require("../endpoints/lookup/user")
    }
}