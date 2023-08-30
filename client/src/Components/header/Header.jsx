import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import '../../css/header.css';
// import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    // const navigate = useNavigate();

    // const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link class="headerb" to='/'>HOME</Link>
                <Link class="headerb" to='/about'>ABOUT</Link>
                <Link class="headerb" to='/contact'>CONTACT</Link>
                <Link class="headerb" to='/login'>LOGOUT</Link>
                <Link class="headerb" to='/course'>COURSE</Link>
                <Link class="headerb" to='/progress'>YOUR PROGRESS</Link>
            </Container>
        </Component>
    )
}

export default Header;