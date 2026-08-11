import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// get a list of 5 jokes

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {
            id : 1,
            title : 'joke no 1', 
            content : 'This is a joke'
        }, 
        {
            id : 2, 
            title : 'joke no 2', 
            content : 'This is joke no 2 based on engineers'
        }, 
        {
            id : 3, 
            title : 'joke no 3', 
            content : 'This is joke no 3 based on professors'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    }
);