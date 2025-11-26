import express from 'express';
import { db } from './database.js';

const app = express();
app.use(express.json());

app.get('/test-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users LIMIT 1');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al conectar a la DB');
    }
});

app.listen(4000, () => {
    console.log("Servidor escuchando en puerto 4000");
});
