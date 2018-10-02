import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
    id: Number,
    address: Number,
    author: String,
    buyer: String,
    seller: String,
    type: String,
    document: String,
    collaborators: [String],
});