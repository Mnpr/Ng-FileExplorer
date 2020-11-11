import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';

import { File } from './model/file'
import { FileManager } from './controller/manager'

const app = express();
const port = 7070;

const fm = new FileManager();

app.use(bodyParser.urlencoded({ extended: false }))
let jsonParser = bodyParser.json();

app.get('/files', (req, res) => {
    let dirInfo = fm.getDir()
    res.send(dirInfo)
})

app.post('/files', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    const folder = fm.createDir(req.body.name)
    const file = fm.createFile(req.body.name)
    res.json({test: ` ${folder} \n ${file} `})
});

app.put('/files', (req, res) => {
    const renamed = fm.rename(req.body.oldPath, req.body.newPath)
    res.json({test: `${renamed}`})
});

app.delete('/files', (req, res) => {
    const deleted = fm.delete(req.body.filepath)
    res.json({test: `${deleted}`})
});

app.listen(port, () => {
    console.log(`[server]⚡️: Server is running at https://localhost:${port}`);
})
