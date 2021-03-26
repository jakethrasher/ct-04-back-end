const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

// jest.mock('twilio', () => () => ({
//   messages: {
//     create: jest.fn(),
//   },
// }));

describe('lab-04 backend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const testUser = {
    id:'1',
    firstName:'Snoop',
    lastName:'Dogg',
    email:'snoop@doggystyle.com',
    phoneNumber:'5031234567'
  }

  it('creates a new user in our database', async () => {
    const data = await request(app)
      .post('/api/v1/users')
      .send(testUser);
    expect(data.body).toEqual(testUser)
  });

  it('gets all user data from the database', async () => {
    await User.insert(testUser);

    const data = await request(app)
      .get('/api/v1/users')
      
    expect(data.body).toEqual([testUser])
  });

  it('gets a single users data from the database with the matching id', async () => {
    await User.insert(testUser);

    const data = await request(app)
      .get('/api/v1/users/1')
      
    expect(data.body).toEqual(testUser)
  });

  it('updates a users email and phone number', async () => {
    await User.insert(testUser);

    const data = await request(app)
      .put('/api/v1/users/1')
      .send({email:'doggy@dogworld', phoneNumber:'303222333'});

    const dataFromDb = await request(app)
      .get('/api/v1/users/1')

    expect(data.body).toEqual(dataFromDb.body)
  });

  it('deletes a user', async () => {
    await User.insert(testUser);

    const sqlDelete = await request(app)
      .delete('/api/v1/users/1')

    const data = await request(app)
      .get('/api/v1/users/')
      
    expect(data.body).toEqual([])
  });
});
