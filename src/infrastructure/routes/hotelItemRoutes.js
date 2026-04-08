import { Router } from "express";

export default function hotelItemRoutes(controller) {
  const router = Router();

  router.post  ("/items",      (req, res) => controller.create(req, res));
  router.get   ("/items",      (req, res) => controller.getAll(req, res));
  router.get   ("/items/:sku", (req, res) => controller.getBySku(req, res));
  router.delete("/items/:id",  (req, res) => controller.delete(req, res));

  return router;
}