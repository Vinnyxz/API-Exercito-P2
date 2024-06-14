const Quartel = require('../models/Quartel')

async function buscarTodos(req, res) {
    res.json(await Quartel.find())
}

async function buscarPorID(req, res) {
    const quartel = await Quartel.findById(req.params.id)
    if (quartel) {
        res.json(quartel)
    } else {
        res.status(404).json({ mensagem: "Quartel não encontrado!" })
    }
}

async function criar(req, res) {
    const quartel = new Quartel(req.body)
    const quartelCriado = await quartel.save()
    res.status(201).json(quartelCriado)
}

async function atualizar(req, res) {
    const quartelAtualizado = await Quartel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (quartelAtualizado) {
        res.json(
            {
                mensagem: "Quartel atualizado com sucesso!",
                quartelAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Quartel não encontrado!" })
    }
}

async function excluir(req, res) {
    const quartelExcluido = await Quartel.findByIdAndDelete(req.params.id)
    if (quartelExcluido) {
        res.json(
            {
                mensagem: "Departamento excluido com sucesso!",
                quartelExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Quartel não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}