const db = require('../config/connection');
const { User, Pet } = require('../models');
const petSeeds = require('./petSeeds.json');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

const transformPetData = (data) => {
  return data.map(item => ({
    ...item,
    age: Number(item.age),
    isClean: item.isClean === "2",
    playedWith: item.playedWith === "1",
    hunger: Number(item.hunger)
  }));
};

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Pet', 'pets');
    
    await User.create(userSeeds);

    const transformedPetSeeds = transformPetData(petSeeds);

    for (let i = 0; i < transformedPetSeeds.length; i++) {
      const { _id, petOwner } = await Pet.create(transformedPetSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: petOwner },
        {
          $addToSet: {
            pets: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

   /* const pets = await Pet.insertMany([
    {
        name: 'Leia',
        type: 'Dog',
        isClean: '1'
    },
    {
        name: 'Bruno',
        type: 'Cat',
        isClean: '1'
    },
    {
        name: 'Bubba',
        type: 'Dog',
        isclean: '1'
    },
    {
        name: 'Tom',
        type: 'Cat',
        isClean: '1'
    }
]);

console.info('pets seeded')

await User.create({
    userName: 'HorusLupercal',
    email:'HeresyisRad@testmail.com',
    password: 'password12345',
    pets: [
        {
            pets: [pets[0]._id]
        }
    ]
});
await User.create({
    userName: 'ConradCurze',
    email:'notAphase@testmail.com',
    password: 'password12345',
    pets: [
        {
            pets: [pets[1]._id]
        }
    ]
});

console.info('users seeded');

process.exit();
}); */

