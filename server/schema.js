/* eslint-disable comma-dangle */
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Hardcoded data
const customers = [
  {
    id: 1,
    name: 'Jhon Doe',
    email: 'jhondoe@gmail.com',
    age: 35
  },
  {
    id: 2,
    name: 'Mary Doe',
    email: 'marydoe@gmail.com',
    age: 21
  },
  {
    id: 3,
    name: 'Jonas Doe',
    email: 'jonasdoe@gmail.com',
    age: 43
  },
  {
    id: 4,
    name: 'Miky Doe',
    email: 'mikydoe@gmail.com',
    age: 29
  }
];

// Customer
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i += 1) {
          if (customers[i].id === args.id) {
            return customers[i];
          }
        }
        return null;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
