const express = require('express');


const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server !!'));


app.get('/', (req, res) => res.send('Express + TypeScript Server !!'));
app.listen(port, err => {
    if (err) {
        return  console.error(err);
    }
    return console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
