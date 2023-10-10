import { useState, useEffect, useContext } from 'react';

import { Box, TextField, Button, styled, Typography } from '@mui/material'

import { API } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';

import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 110,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FF1616;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};


const Login = ({setAuthenticated}) => {
    const imageURL = 'https://i.ibb.co/4jTDMCy/Dream.png';
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [login, setLogin] = useState(loginInitialValues);

    const { setAccount } = useContext(DataContext);

    const navigate = useNavigate();

    const toggleSignup = () => {
        toggleAccount(account === 'login' ? 'signup' : 'login');
        showError(''); // Clear any previous error messages
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    };
    
    const signupUser = async () => {
            let response = await API.userSignup(signup);
           if (response.isSuccess) {
                showError('');
                setSignup(signupInitialValues);
                toggleAccount('login')
            }else {
                showError('Something went wrong! Please try again later');
        }
    };

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            
            setAccount ({username: response.data.username, name: response.data.name});

            setAuthenticated(true);

            navigate('/');
        } else{
            showError ('Something went wrong! Pelase try again later');
        }
    }

    // useEffect(() => {
        // console.log(signup.name, signup.username, signup.password)
    // }, [signup])

    useEffect(() => {
        console.log(API['userSignup'])
    }, [])

    return (
<Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" value={signup.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" value={signup.username} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={signup.password} onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    );
};
export default Login;