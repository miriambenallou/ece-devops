const client = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }

    client.exists(user.username, (err, res) => {
        if (res==1) return callback(err, null)
      })
    // Save to DB
    // TODO check if user already exists
    client.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },

  get: (username, callback) => {
    client.hmget(username, "firstname", "lastname", (err, res) => {
      if (err) return callback(err, null)
      callback(null, res)
    })
  }
  //   // TODO create this method
  // }
}
