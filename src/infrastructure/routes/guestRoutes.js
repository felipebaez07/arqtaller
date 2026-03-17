import { Router } from "express";

export default function guestRoutes(controller) {

  const router = Router();

  router.post("/guests", (req, res) => controller.create(req, res));

  router.get("/guests", (req, res) => controller.getAll(req, res));

  return router;

}