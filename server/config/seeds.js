const db = require('./connection');
const { User, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Category', 'categories');
    await cleanDB('User', 'users');

    const categories = await Category.insertMany([
        { name: 'Collecting' },
        { name: 'Making' },
        { name: 'Activity' },
        { name: 'Play' },
        { name: 'Arts' }
    ]);

    console.log('Categories seeded successfully');

    const posts = await Post.insertMany([
        { 
            postTitle: 'Collecting Action Figures!',
            postDesc: `I've been collecting soldier action figures since I was 12! I now have a room filled with nothing but all the latest models since the 90s!`,
            postAuthor: 'hobbyUser',
            category: categories[0]._id
        },
        {
            postTitle: 'Making a flower bed!',
            postDesc: `They say it's hard to get into gardening, but I proved them wrong by starting my own custom-built flower bed!`,
            postAuthor: 'hobbyUser',
            category: categories[1]._id
        },
        {
            postTitle: 'Hiking up Mount Everest!',
            postDesc: `Harder than most brag about! But it was a fun experience regardless!`,
            postAuthor: 'hobbyUser',
            category: categories[2]._id
        },
        {
            postTitle: 'Playing the newest Risk board game!',
            postDesc: `It's too addicting to not play! Really gets the mind going each time they change the rules.`,
            postAuthor: 'hobbyUser',
            category: categories[3]._id
        },
        {
            postTitle: 'Drawing like Bob Ross!',
            postDesc: `There's only happy accidents and fluffy clouds in my paintings!`,
            postAuthor: 'hobbyUser',
            category: categories[4]._id
        }
    ])

    console.log('Posts seeded successfully');

    await User.create({
        username: 'hobbyUser',
        email: 'hobbyist@gmail.com',
        password: 'password01234',
        posts: [posts[0]._id, posts[1]._id, posts[2]._id, posts[3]._id, posts[4]._id]
    })

    console.log('User seeded successfully');

    process.exit();
})