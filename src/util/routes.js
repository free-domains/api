module.exports = {
    "check": require("../endpoints/check"),
    "cli": {
        "oauth": require("../endpoints/cli/oauth")
    },
    "count": require("../endpoints/count"),
    "domains": {
        "domain": require("../endpoints/domains/domain")
    },
    "index": require("../endpoints/index"),
    "lookup": {
        "domain": require("../endpoints/lookup/domain"),
        "user": require("../endpoints/lookup/user")
    },
    "raw": require("../endpoints/raw")
}