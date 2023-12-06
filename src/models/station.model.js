import mongoose, { mongo } from "mongoose";
import {Train} from "./train.model";

const stationSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        trim: true
    },

    stationCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        index: true,
        trim: true
    },

    trains: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Train"
        }
    ],

    
}, {timestamps: true});