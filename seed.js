const {db} = require('./server/db')
const {green, red} = require('chalk')

const Candy = require('./server/db/models/Candy');

// here's some sample candies to get you started
// feel free to edit these or add your own!
const candies = [{
  name: 'Skittles',
  description: 'Taste the rainbow',
  quantity: 2,
  imageUrl: 'http://pluspng.com/img-png/png-skittles--400.png'
}, {
  name: 'KitKat',
  description: 'Make the most of your break',
  quantity: 5,
  imageUrl: 'https://www.kitkat.co.uk/content/content/img/range/4-finger-milk.png'
}, {
  name: 'M&M',
  description: 'Melts in your mouth, not in your hand',
  quantity: 4,
  imageUrl: 'https://pbs.twimg.com/media/DXOHG0zX4AAhZ1i.png'
},
{
  name: 'Skittles',
  description: 'Taste the rainbow',
  quantity: 2,
  imageUrl: 'http://pluspng.com/img-png/png-skittles--400.png'
}, {
  name: 'KitKat',
  description: 'Make the most of your break',
  quantity: 5,
  imageUrl: 'https://www.kitkat.co.uk/content/content/img/range/4-finger-milk.png'
}, {
  name: 'M&M',
  description: 'Melts in your mouth, not in your hand',
  quantity: 4,
  imageUrl: 'https://pbs.twimg.com/media/DXOHG0zX4AAhZ1i.png'
},
{
  name: 'Skittles',
  description: 'Taste the rainbow',
  quantity: 2,
  imageUrl: 'http://pluspng.com/img-png/png-skittles--400.png'
}, {
  name: 'KitKat',
  description: 'Make the most of your break',
  quantity: 5,
  imageUrl: 'https://www.kitkat.co.uk/content/content/img/range/4-finger-milk.png'
}, {
  name: 'M&M',
  description: 'Melts in your mouth, not in your hand',
  quantity: 4,
  imageUrl: 'https://pbs.twimg.com/media/DXOHG0zX4AAhZ1i.png'
},
{
  name: 'Skittles',
  description: 'Taste the rainbow',
  quantity: 2,
  imageUrl: 'http://pluspng.com/img-png/png-skittles--400.png'
}, {
  name: 'KitKat',
  description: 'Make the most of your break',
  quantity: 5,
  imageUrl: 'https://www.kitkat.co.uk/content/content/img/range/4-finger-milk.png'
}, {
  name: 'M&M',
  description: 'Melts in your mouth, not in your hand',
  quantity: 4,
  imageUrl: 'https://pbs.twimg.com/media/DXOHG0zX4AAhZ1i.png'
}];

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(candies.map(candy => {
      return Candy.create(candy);
    }));

    console.log(green('Seeding success!'))
    db.close()
  }
  catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }
}

seed();
