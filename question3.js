const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Express is Working! Rovic Steve R Real');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});