const express = require("express");
const service = require("../service/crud");
const { authMiddleware } = require("../service/middleware");

const router = express.Router();

// router.use(service.getUserStatistics);

router.get("/me", authMiddleware, service.getMe);
router.get("/generate-leisure", service.generateLeisure);
router.get("/crud/:collection", service.getAll);
router.get("/crud/:collection/:id", service.getById);
router.post("/crud/:collection", service.create);
router.put("/crud/:collection/:id", service.updateById);
router.delete("/crud/:collection/:id", service.deleteEntity);

// GET /api/:collection/ -> [<collection>: {_id}]
// GET /api/:collection/{_id} -> <collection>:{_id}
// POST /api/:collection/ --body {} -> new <collection>
// GET /api/:collection/ -> [<collection>: {_id}]
// GET /api/Events/ -> [Events: {_id}]

module.exports = router;
