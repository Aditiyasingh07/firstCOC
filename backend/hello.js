import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World! Server is ready')
// })


app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, joke: 'Why was the math book sad?'},
        { id: 2, joke: 'Why did the scarecrow win an award?' },
        { id: 3, joke: 'Why did the bicycle fall over?' },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})