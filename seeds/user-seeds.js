const { User } = require('../models');

const userdata = [
  {
    name: 'Alex Rosenkranz',
    email: 'arosenkranz@bootcampspot.com',
    password: '12345'
  },
  {
    name: 'Bodie Rosenkranz',
    email: 'bodie@bodie.com',
    password: 'bodieRulez'
  }
];

User.sync({ force: true }).then(() => {
  User.bulkCreate(userdata, { individualHooks: true })
    .then(res => {
      console.log('Users created!');
      console.log(res);
      process.exit(1);
    })
    .catch(err => {
      throw new Error(err);
    });
});
