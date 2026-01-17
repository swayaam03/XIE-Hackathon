import { Router } from "express";

const V1Router = Router();

V1Router.use("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
})

export default V1Router;