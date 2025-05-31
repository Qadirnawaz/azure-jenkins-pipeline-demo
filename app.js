const express = require('express');
const app = express();
const port = 3000; // Or any port you prefer

app.get('/', (req, res) => {
  res.send('Hello! This is V4 - Deployed Automatically by Jenkins!');  // We'll change V1 later to test CI/CD
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});