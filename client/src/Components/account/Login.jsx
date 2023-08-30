import { useState, useContext } from 'react';

import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { display } from '@mui/system';

import { authenticateLogin, authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import rocket from '../../Images/rocket.png'
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width : 400px;
    margin : auto;
    box-shadow : 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0 '
})

const Wrapper = styled(Box)`
    padding: 9px 35px 20px 35px;
    display : flex;
    flex : 1;
    flex-direction : column;
    & > div, & > button,& > p {
        margin-top : 20px; 
    }
`

const LoginButton = styled(Button)`
    text-transform : none;  
    background : #FB641B;
    height : 48px;
    border-radius : 2px;
`

const SignupButton = styled(Button)`
    text-transform : none;
    background : #fff;
    color : #2874f0;
    height : 48px;
    border-radius : 2px;  
    box-shadow : 0px 2px 4px 0px rgb(0 0 0/0.2); 
`

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`

const loginInitialValues = {
    username: '',
    password: ''
}

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
    age: '',
    phone: '',
}

const Login = ({isUserAuthenticated}) => {

    const imageURL = rocket

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
        account === 'login' ? toggleAccount('signup') : toggleAccount('login');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        console.log(`response - ${response}`);
        if(response !== undefined){
            if (response.status === 200) {
                setError('');
                setSignup(signupInitialValues);
                toggleAccount('login');
            } else {
                setError('Something went wrong! please try again later');
            }
        }else{
            setError('Please Fill the credentials!');
        }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (response !== undefined) {
            if (response.status === 200) {
                console.log('successful login');
                setError('');
                setAccount({ username: response.data.data.username, name: response.data.data.name });
                
                isUserAuthenticated(true);
                navigate('/');

            } else {
                setError('Something went wrong! please try again later');
            }
        } else {
            setError('Please Fill the credentials!');
        }
    }


    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="login" style={{height:137,width:131}} />
                {

                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label="Enter username" />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label="Enter password" />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}> OR </Text>
                            <SignupButton onClick={() => toggleSignup()}>create an account</SignupButton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" value={signup.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" value={signup.username} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={signup.password} onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField variant="standard" value={signup.age} onChange={(e) => onInputChange(e)} name='age' label='Enter Age' />
                            <TextField variant="standard" value={signup.phone} onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />

                            {error && <Error>{error}</Error>}
                            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()} >Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login