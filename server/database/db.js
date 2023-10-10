import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-651nusz-shard-00-00.owfbvlw.mongodb.net:27017,ac-651nusz-shard-00-01.owfbvlw.mongodb.net:27017,ac-651nusz-shard-00-02.owfbvlw.mongodb.net:27017/?ssl=true&replicaSet=atlas-2r146i-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;