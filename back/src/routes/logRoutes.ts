const router = require('express').Router()

const LogModel = require('../models/Log')

router.post('/', async (req, res) => {
    const { date, ip, type, idType, message } = req.body

    const log = {
        date,
        ip,
        type,
        idType,
        message
    }

    try {
        await LogModel.create(log)

        res.status(201).json({ message: 'Log inserido no Mongo com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.get('/', async (req, res) => {
    try {
        const log = await LogModel.find()
        console.log('aki')
        res.status(200).json(log)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const log = await LogModel.findOne({ _id: id })

        if (!log) {
            res.status(422).json({ message: 'Log não encontrado!' })
            return
        }

        res.status(200).json(log)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { date, ip, type, idType, message } = req.body

    const log = {
        date,
        ip,
        type,
        idType,
        message
    }

    try {
        const updatedLog = await LogModel.updateOne({ _id: id }, log)

        if (updatedLog.matchedCount === 0) {
            res.status(422).json({ message: 'Log não encontrado!' })
            return
        }

        res.status(200).json(log)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const log = await LogModel.findOne({ _id: id })

    if (!log) {
        res.status(422).json({ message: 'Log não encontrado!' })
        return
    }

    try {
        await LogModel.deleteOne({ _id: id })

        res.status(200).json({ message: 'Log removido com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete('/delete/all', async (req, res) => {

    try {
        await LogModel.deleteMany()

        res.status(200).json({ message: 'Todos os Logs removidos com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete('/delete/all', async (req, res) => {

    try {
        await LogModel.deleteMany()

        res.status(200).json({ message: 'Todos os Logs removidos com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

let responseObj = {
    "status": "",
    "msg": "",
    "body": {

    }
}

router.get("/search/:key", async (req, resp) => {
    let data = await LogModel.find(
        {
            "$or": [                
                { date: { $regex: req.params.key } },
                { ip: { $regex: req.params.key } },
                { type: { $regex: req.params.key } },
                 { idType: { $regex: req.params.key } },
                { message: { $regex: req.params.key } }
            ]
        }
    )
    resp.send(data);

})

module.exports = router