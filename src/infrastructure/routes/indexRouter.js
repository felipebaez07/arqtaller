import { Router } from "express";

export default function indexRouter(controller) {

  const router = Router();

  router.post("/rooms", (req, res) => controller.create(req, res));
  router.get("/rooms", (req, res) => controller.getAll(req, res));

  return router;
}