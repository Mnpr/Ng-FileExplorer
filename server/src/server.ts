const express = require('express');

const app = express();
const port = 3000;


// Middlewares
app.use('/files', () =>{
    console.log('middleware running ')
})

// Routes

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server !!'));

app.get('/files', (req: any, res: any) => res.send('this is file route'));

app.listen(port, err => {
    if (err) {
        return  console.error(err);
    }
    return console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

// mongodb+srv://fileserveradmin:<password>@filemanager.ju1kk.mongodb.net/<dbname>?retryWrites=true&w=majority