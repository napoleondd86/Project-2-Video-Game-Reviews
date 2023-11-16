const { Feedback } = require('../models');

const fbData = [
  {
    user_id: '4',
    hours: 'extreme',
    age: 'under-18',
    raiting: '5',
    game_id: '609130',
    played: 1,
    review: 'This game rules',
  },
  {
    user_id: '20',
    hours: 'some',
    age: "26-25",
    rating: '3',
    game_id: '609130',
    played: 1,
    review: 'This game is ok',
  },
  {
    user_id: '19',
    hours: 'dabbled',
    age: '36-50',
    raiting: '1',
    game_id: '609130',
    played: 1,
    review: 'I wanted the real Halo, but my parents got me this GARBAGE!!!! ',
  },
  {
    user_id: '5',
    hours: 'dabbled',
    age: '18-25',
    game_id: '609130',
    played: 1,
    review: 'Wrong Halo!',
  },
  {
    user_id: '24',
    hours: 'extreme',
    age: 'over-50',
    game_id: '609130',
    played: 1,
    review: 'luv it',
  },
  {
    user_id: '18',
    hours: 'lots',
    age: 'over-50',
    raiting: '4',
    game_id: '494393',
    played: 1,
    review: 'Dont make me kill dinos',
  },
  {
    user_id: '4',
    hours: 'some',
    age: 'under-18',
    rating: '3',
    game_id: '494393',
    played: 1,
    review: 'its fine',
  },
  {
    user_id: '19',
    hours: 'extreme',
    age: '36-50',
    rating: '5',
    game_id: '494393',
    played: 1,
    review: 'FINALLY MY PARENTS GOT ME THE RIGHT GAME!!!',
  },
  {
    user_id: '21',
    hours: 'lots',
    age: '18-25',
    rating: '4',
    game_id: '494393',
    played: 1,
    review: 'good game',
  },
  {
    user_id: '22',
    hours: 'dabbled',
    age: '18-25',
    rating: '3',
    game_id: '494393',
    played: 1,
    review: 'Just stated, but fun',
  },
  {
    user_id: '23',
    hours: 'dabbled',
    age: '18-25',
    raiting: '1',
    game_id: '494393',
    played: 1,
    review: 'I dont get it',
  },
  {
    user_id: '18',
    hours: 'extreme',
    age: 'over-50',
    raiting: '5',
    game_id: '52803',
    played: 1,
    review: '1v1 me Gary. I will own you.',
  }, {
    user_id: '4',
    hours: 'extreme',
    age: 'under-18',
    raiting: '5',
    game_id: '52803',
    played: 1,
    review: 'I would destroy Gary',
  }, {
    user_id: '19',
    hours: 'extreme',
    age: '36-50',
    raiting: '5',
    game_id: '494393',
    played: 1,
    review: 'NO CONTEST. GARY GETS SLAUGHTERED BY MY GHANDI GAMEPLAY',
  },
  {
    user_id: '20',
    hours: 'extreme',
    age: '26-35',
    raiting: '5',
    game_id: '494393',
    played: 1,
    review: 'GG Gary'
  },
  {
    user_id: '21',
    hours: 'exteme',
    age: '18-25',
    raiting: '5',
    game_id: '494393',
    played: 1,
    review: 'Gary wouldnt want to mess with my skills in this game. ',
  },
  {
    user_id: '22',
    hours: 'dabbled',
    age: 'under-18',
    raiting: '4',
    game_id: '494393',
    played: 1,
    review: 'I dont understand this game, but I could maybe beat Gery. ',
  }, {
    user_id: '24',
    hours: 'extreme',
    age: '18-25',
    raiting: '5',
    game_id: '494393',
    played: 1,
    review: 'I let Gary win',
  },

];

const seedFeedbacks = () => Feedback.bulkCreate(fbData);

module.exports = seedFeedbacks;
