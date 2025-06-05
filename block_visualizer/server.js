const express = require('express')
const jsonObject = require('csvtojson')
const app = express()
const port = 3000
const { exec } = require('child_process');

// display the page for api info
app.use(express.static('public'))

// endpoint to run the C scheduling algorithms
app.post('/api/run-simulation', (req, res) => {
    exec('./disk_scheduler', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing simulation ${error}`)
            return res.status(500).json({ error: 'Error executing simulation' })
        }

        if (stderr) {
            console.error(`C program stderr: ${stderr}`)
        }

        console.log(`C program stdout: ${stdout}`)
        res.json({ success: true })
    })
})
// route for fcfs steps
app.get('/api/fcfs', async (req, res) => {
    try {
        const data = await jsonObject().fromFile('fcfs_steps.csv')
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error reading fcfs_steps.csv' })
    }
})

// route for clook steps
app.get('/api/clook', async (req, res) => {
    try {
        const data = await jsonObject().fromFile('clook_steps.csv')
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error reading clook_steps.csv' })
    }
})

// route for sstf steps
app.get('/api/sstf', async (req, res) => {
    try {
        const data = await jsonObject().fromFile('sstf_steps.csv')
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error reading sstf_steps.csv' })
    }
})

// route for look steps
app.get('/api/look', async (req, res) => {
    try {
        const data = await jsonObject().fromFile('look_steps.csv')
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error reading look_steps.csv' })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})