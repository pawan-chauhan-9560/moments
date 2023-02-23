import PostMessage from "../models/postMessage.js";
import log4js from 'log4js';
const logger = log4js.getLogger();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
        logger.error(error);
    }
};

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
        logger.error(error);
    }
};