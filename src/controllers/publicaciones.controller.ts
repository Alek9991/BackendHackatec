import { Request, Response } from "express";

// GET /api/publicaciones
export const obtenerPublicaciones = (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "Aquí irán las publicaciones",
    data: []
  });
};

// POST /api/publicaciones
export const crearPublicacion = (req: Request, res: Response) => {
  const { titulo, descripcion, lat, lng } = req.body;

  res.json({
    ok: true,
    mensaje: "Publicación creada correctamente",
    data: { titulo, descripcion, lat, lng }
  });
};
