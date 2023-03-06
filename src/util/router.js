const { Router } = require("express");

const router = Router();
const routes = require("./routes");

router.get("/cli/oauth", async (req, res) => {
    routes.cli.oauth(req, res);
})

router.get("/count", async (req, res) => {
    routes.count(req, res);
})

router.get("/domains/:domain", async (req, res) => {
    routes.domains.domain(req, res);
})

router.get("/lookup/domain", async (req, res) => {
    routes.lookup.domain(req, res);
})

router.get("/lookup/user", async (req, res) => {
    routes.lookup.user(req, res);
})

module.exports = router;