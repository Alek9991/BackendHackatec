import { Router } from "express";
import { obtenerPublicaciones, crearPublicacion } from "../controllers/publicaciones.controller.js";

const router = Router();

router.get("/", obtenerPublicaciones);
router.post("/", crearPublicacion);

export default router;
