import { Router } from 'express'
import pokeModel from '../models/poke.models.js'

const router = Router()

router.get('/', async (req, res) => {
    const pokemons = await pokeModel.find().lean().exec()
    console.log({ pokemons })
})
router.post('/', async (req, res) => {
    try {
        const poemonNew = req.body
        const result = await pokeModel.create(poemonNew)

        console.log({ result })
        res.redirect('/pokemon')

    } catch (error) {

        console.log(error)
        res.send('Error al crear el pokemon')

    }
})

router.get('/create', async (req, res) => {
    res.render('create', {})
})

router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params
        const pokemon = await pokeModel.findOne({ name }).lean().exec()

        res.render('one', { pokemon })
    } catch (error) {
        console.log(error)
        res.send('Error to show pokemon')

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await pokeModel.deleteOne({ _id: id })

        return res.json({ status: 'success' })
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router