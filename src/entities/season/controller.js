const operation = require('../../services/dbOperation')('season');

module.exports = {
    addSeason: (data = { season, pict }) => operation.insert(data),
    editSeason: (id, data = { season, pict }) => operation.update(data, { id }),
    deleteSeason: (id) => operation.delete({ id }),
    showSeason: (id = null) => id ? operation.selectWhere({ id }) : operation.select()
}