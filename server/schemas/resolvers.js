const { User, Pet } = require('../models');
const { signToken, AuthenticationError} = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PfXutHfg0rPoMOJTS9WAq4iOWFBFmmztIBLHhnHnQH9bwZzK7j6WFEi34AttGYakRmfxsDB8GgQU7fSrXJIlvFf00QJ6tbvff')

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
              .populate({path:'pets',
                options: {sort:{name: 1}}
              });
      
              return user;
            }
      
            throw AuthenticationError;
          },
          pet: async (parent, { _id }, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({

                })
                return user.pets.id(_id);
            }
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
           
            const user = await User.create(args);
            const token = signToken(user);
    
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw AuthenticationError;
          },
        addPet: async (parent, {  name, type, age, isClean = true, playedWith, hunger = 0  }) => {
            if (!context.user) {
                throw new Error('User not authenticated');
            }
      
            const pet = new Pet({
                petName,
                type,
                age,
                isClean,
                playedWith,
                hunger,
            });
      
            await pet.save();
      
            const updatedUser = await User.findByIdAndUpdate(
                context.user.id,
                { $push: { pets: pet._id } }, 
                { new: true }
            );
      
            return pet;
        },
        updatePet: async (parent, { _id, name, type, age, isClean, playedWith, hunger }) => {
                const updateObject = {};
            if (name) updateObject.name = name;
            if (type) updateObject.type = type;
            if (age !== undefined) updateObject.age = age;
            if (isClean !== undefined) updateObject.isClean = isClean;
            if (playedWith !== undefined) updateObject.playedWith = playedWith;
            if (hunger !== undefined) updateObject.hunger = hunger;

            // Find the pet by ID and update it
            const updatedPet = await Pet.findByIdAndUpdate(id, updateObject, { new: true });

            return updatedPet;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
            throw AuthenticationError;
            }
    
            const correctPw = await user.isCorrectPassword(password);
    
            if (!correctPw) {
            throw AuthenticationError;
            }
    
            const token = signToken(user);
    
            return { token, user };
        }
    }
};

module.exports = resolvers;