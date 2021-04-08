const { searchHero } = require('../model/shModel');

const URL = 'https://akabab.github.io/superhero-api/api/all.json';

const searchByAttr = async (req, res) => {
    try {
        const { q } = req.query;
        if ( q.length < 3 ) {
            throw new Error("Sua busca deve conter mais que três caracteres");
        }
        const heroes = await searchHero(URL, q.toUpperCase());
        if (heroes.length == 0) {
            return res.status(204).json({ message: 'No heroes found'});
        } else {
            return res.status(200).json(heroes);
        }
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

module.exports = {
    searchByAttr,
}