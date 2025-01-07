// src/models/Article.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const articleSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: false,
        },
        pubDate: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        content: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: true,
            unique: true,  // Ensure no duplicate articles
        },
        category: {
            type: String,
            required: false,
        },
        newsOutlet: {
            type: String,
            required: true,
        },
        isAIRelated: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);
export default Article;