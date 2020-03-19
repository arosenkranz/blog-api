const { User, Post } = require('../models');
const sequelize = require('../config/connection');

const makeSeeds = async () => {
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

  await sequelize.sync({ force: true });

  const dbUsers = await User.bulkCreate(userdata, { individualHooks: true });
  console.log(dbUsers);
  const postdata = [
    {
      title: "Alex's first post",
      body: 'body of alexs the first post',
      UserId: dbUsers[0].id
    },
    {
      title: "Bodie's first post",
      body: 'body of bodies the first post',
      UserId: dbUsers[1].id
    }
  ];

  const dbPosts = await Post.bulkCreate(postdata);
  console.log('all done');
  process.exit(0);
};

makeSeeds();
