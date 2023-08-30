import mongoose from 'mongoose';

const quizSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    quiz:{
        type: [Number],
        required:true
    },
});


const quiz = mongoose.model('quiz', quizSchema);

export default quiz;