

import quiz from "../model/quiz";

export const quizz = async(request,response) =>{
    try {
        console.log(`get req quizpost - ${request.params.username}`);
        let quizData = await quiz.findOne({username : request.params.username});
        console.log(quizData);
        if(quizData) {
            return response.status(200).json({ data : quizData });
        } else {
            return response.status(200).json({ data : ''});
        }
    } catch (error) {
        console.log('Hello from quizz error');
        response.status(500).json('Error ', error.message);
    }
}


export const quizpost = async (request, response)=> {
    try {
        console.log(`post req quizpost - ${JSON.stringify(request.body)}`);
        const exist = await quiz.findOne({ username : request.body.username });
        if(exist){
            let newExist = await quiz.findOneAndUpdate({username: request.body.username}, {quiz : request.body.quiz});
            console.log(`newexist - ${newExist}`);
            await newExist.save();
            // const again = await quiz.findOne({ username : request.body.username });
            // return response.status(200).json({ data : exist });
            return response.status(200).json({ data : request.body });
        }

        const user = request.body;
        const newUser = new quiz(user);
        await newUser.save();

        response.status(200).json({ data : user });
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
}   