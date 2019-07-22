const server = require('./server');

const Games = require('../games-model/gamesModel');

const db = require('../data/dbConfig');

const request = require('supertest');

const mario = {
  id: 1,
  title: "Mario's Dream Land",
  genre: 'Platform',
  releaseYear: 1994
};

const randomGame = {
  title: 'missing strikes again'
}

    describe('GET /', () => {

    it('should return status 200', async () => {

      const res = await request(server).get('/');

      expect(res.status).toBe(200);
    });

    describe('GET /games', () => {
      beforeEach(() => {

      return db('games').truncate();
    });

    it('should return http status 200', async () => {
      const res = await request(server).get('/games');

    expect(res.status).toBe(200);
    });

    it('should return list of games', async () => {
      const res = await request(server).get('/games');

    expect(res.body).toEqual([]);
    });

    it('should return empty array when no games are listed', async () => {
        const res = await request(server).get('/games');
      // removed seed data, as at time of writing no other games exist in table
      await Games.remove(0);
      await Games.remove(1);
      await Games.remove(2);

      expect(res.body).toEqual([]);
      });
    });
  });


  describe('POST /games', () => {
    beforeEach(() => {
      return db('games').truncate();
  });

    it('should post a new game and return status 201', async () => {
    let res = await request(server).post('/games')
      .send(mario)

    expect(res.body).toEqual(mario);
  });

    it('should return staus 201', async () => {
      let res = await request(server).post('/games')
      .send(mario)

      expect(res.status).toBe(201);
    });

    it('should return status 421 if game info is missing', async () => {
      let res = await request(server).post('/games')
      .send(randomGame)
      expect(res.status).toBe(421);
    });
});
