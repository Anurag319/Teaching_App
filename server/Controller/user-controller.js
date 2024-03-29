
import User from '../model/user.js';

export const userSignup = async (request, response)=> {
    try {

        const exist = await User.findOne({ username : request.body.username });
        if(exist){
            return response.status(401).json({ message : 'Username already exist'}); 
        }
        const user = request.body;
        console.log(`user-js ${user}`);
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message : user });
    } catch (error) {
        response.status(500).json({ message : error.message})
    }
}   

export const userLogin = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json({ data : user });
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.status(500).json('Error ', error.meaasage);       
    }
}