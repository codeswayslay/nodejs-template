import express from "express";
//import product service here

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ result: "ok" });
})

router.get("/:id", (req, res) => {
    res.json({ result: `ok - ${req.params.id}` });
})

router.post("/", (req, res) => {
    res.json({ result: `ok - ${req.body}` })
})

router.put("/", (req, res) => {
    res.json({ result: `ok - ${req.body}` })
})

router.patch("/", (req, res) => {
    res.json({ result: `ok - ${req.body}` })
})

export = router;