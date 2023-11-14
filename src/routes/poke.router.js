import { Router } from 'express'

const router = Router()

router.get('/', async(req, res) => {
    res.render('list', {pokemons: []})
})

router.get('/create', async(req, res) => {
    res.render('create', {})
})

router.get('/:name', async(req, res) => {
    res.render('one', {pokemon: {
        name: 'Pikachu', type: 'electric', Photo: ''
    }})
})

router.delete('/:id', (req, res) => {
    res.send('Pokemon is deleting...')
})

export default router