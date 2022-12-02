const express = require("express");
const service = require("../service/crud");
const authMiddleware = require("../service/middleware");

const router = express.Router();

router.get("/:collection", service.getAll);
router.get("/:collection/:id", service.getById);
router.post("/:collection", service.create);
router.put("/:collection/:id", service.updateById);
router.delete("/:collection/:id", service.deleteEntity);

// GET /api/:collection/ -> [<collection>: {_id}]
// GET /api/:collection/{_id} -> <collection>:{_id}
// POST /api/:collection/ --body {} -> new <collection>
// GET /api/:collection/ -> [<collection>: {_id}]
// GET /api/Events/ -> [Events: {_id}]

module.exports = router;
