const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let voteCounts = {
    president: { A: 0, B: 0, C: 0 },
    vicePresident: { A: 0, B: 0, C: 0 },
    secretary: { A: 0, B: 0, C: 0 },
    assistantSecretary: { A: 0, B: 0, C: 0 },
};

app.post('/vote', (req, res) => {
    const { post, candidate } = req.body;
    if (voteCounts[post]) {
        voteCounts[post][candidate]++;
        res.send({ message: 'Vote counted!', voteCounts });
    } else {
        res.status(400).send({ message: 'Invalid post' });
    }
});

app.get('/results', (req, res) => {
    res.send(voteCounts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
