import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-cdyoqpo-shard-00-00.rjb50ug.mongodb.net:27017,ac-cdyoqpo-shard-00-01.rjb50ug.mongodb.net:27017,ac-cdyoqpo-shard-00-02.rjb50ug.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-11yadm-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

