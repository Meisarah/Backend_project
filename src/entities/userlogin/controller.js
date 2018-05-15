const operation = require('../../services/dbOperation')('userlogin');
const crypto = require('crypto');

let encrypt = (password) => crypto.createHash('sha256').update(JSON.stringify({ password })).digest('hex')

module.exports = {
    addUserLogin: (data = { username, password, name, email }) => operation.insert({ ...data, password: encrypt(data.password) }),
    editUserLogin: (id, data = { password, name, email }) => operation.update({ ...data, password: encrypt(password) }, { id }),
    deleteUserLogin: (id) => operation.delete({ id }),
    showUserLogin: (id) => operation.selectWhere({ id }),
    login: ({ username, password }) => {
        return operation.selectWhere({ username })
        .then(found => {
            if (found.length > 0) {
                if (found[0].password == encrypt(password)) {
                    return { id: found[0].id, username: found[0].username }
                } else {
                    return false
                }
            } else {
                return false
            }
        })
        .catch(err => console.log(err))
    }
}