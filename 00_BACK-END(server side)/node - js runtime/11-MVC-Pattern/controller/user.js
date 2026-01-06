const users = require('../model/user')


async function handleUserDBLog(req, res) {
    res.send('saving [user] data to database on every reload')

  const user1 = new users({
    firstName: 'PIYUSH',
    lastName: "SHRIVASTAVA",
    email: 'decentboypiyush@gmail.com',
    profession: "Student"
  });
  user1.save()
    .then(() => {
      console.log('User saved successfully');
    })
    .catch((err) => {
      console.error('Error saving user:', err.message);
    });
}

module.exports = {
    handleUserDBLog
}