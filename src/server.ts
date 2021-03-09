import express from 'express';


const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hellow!' })
})

app.listen(3333, () => {
    console.log("Servidor no ar! Port:3333");
})