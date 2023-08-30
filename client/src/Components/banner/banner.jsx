
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg') center/100% repeat-x #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: black;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 20px 0px;
    padding: 15px
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>10 days course</Heading>
            <SubHeading>ROCKETRY</SubHeading>
        </Image>
    )
}

export default Banner;