const express = require('express');

import { FileManager } from './Modules/folder'

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Express + TypeScript Server !!'));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})
