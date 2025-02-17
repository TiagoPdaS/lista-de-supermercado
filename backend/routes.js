const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/products', (req, res) => {
    const { name, price } = req.body;
    db.run("INSERT INTO products (name, price) VALUES (?, ?)", [name, price], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

router.get('/products', (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ products: rows });
    });
});

router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM products WHERE id = ?", [id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).end();
    });
});

module.exports = router;
