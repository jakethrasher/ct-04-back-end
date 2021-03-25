const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

// jest.mock('twilio', () => () => ({
//   messages: {
//     create: jest.fn(),
//   },
// }));

describe('03_separation-of-concerns-demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const user = {
    id:'1',
    firstName:'Snoop',
    lastName:'Dogg',
    email:'snoop@doggystyle.com',
    phoneNumber:'5031234567'
  }

  it('creates a new user in our database', async () => {
    const data = await request(app)
      .post('/api/v1/users')
      .send(user);
    expect(data.body).toEqual(user)
  });
});
