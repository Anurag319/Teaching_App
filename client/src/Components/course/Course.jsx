import { useState, useEffect, useContext } from 'react';
import {DataContext} from '../../context/DataProvider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Theory from './theory';
import Quiz from './quiz';
import { studentsquiz, studentsquizpost } from '../../service/api';
import "../../css/theory.css";
import Chat from '../chatbot/chatbot';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px',
}));

const Lecture = styled(Grid)`
    background : yellow;
    align-items: center;
    justify-content: center;
    display : flex;
    margin : 6px;
    border-radius: 10px;
    cursor: pointer; 
    & > p{
        color: red;
        font-size: 25px;
        font-weight: 700;
        margin: 0;
        padding: 13px;
    }
`

const studentRecord = {
    quiz: [],
    username: '',
}
const Course = () => {
    const [id, setId] = useState(0);
    const [quizdata, setQuizData] = useState(studentRecord);
    const [result,displayresult] = useState(false);
    const [error,setError] = useState(false);
    const [score,setScore] = useState(0);
    const [level, setLevel] = useState(0);

    const { account } = useContext(DataContext);

    const levelorder = (arr)=>{
        var sum = 0;
        const sz = arr.length;
        arr.map(element => {
            sum = sum + element;
            console.log(sum);
        })
        if(sum*1.0/sz<=10) setLevel(0);
        else if(sum*1.0/sz<=15) setLevel(1);
        else setLevel(2);
    }
    useEffect(() => {
        displayresult((e)=>false);
        console.log(`here res - ${result}`)
    }, [id,level])
    

    useEffect(() => {
        const getquizRecord = async ()=>{
            const response = await studentsquiz(quizdata);
            console.log(`response get ` + JSON.stringify(response));
            if(response !== undefined){
                if (response.status === 200) {
                    console.log(`res - ${result}`);
                    console.log(`score - ${score}`);
                    if(result){
                        // calculate update level
                        // send post request and update quizzes
                        if(response.data.data===""){
                             quizdata.quiz = [score];
                        }
                        else quizdata.quiz = [...response.data.data.quiz,score];
                        // quizdata.quiz = quizdata.quiz.concat(score)
                        console.log("quiz after result" + quizdata);
                        const postreq = await studentsquizpost(quizdata);
                        console.log(`postreq - ${JSON.stringify(postreq)}`)
                        levelorder(postreq.data.data.quiz);
                    }
                    console.log('Hurrah');
                } else {
                    setError('Something went wrong! from server');
                }
            }else{
                setError('Error from axios!');
            }
        } 
        getquizRecord();
        console.log('account name ' + account.username);
        quizdata.username = account.username;
        console.log(result);
    },[result]);

    return (
        <div className='top'>
            <Grid container spacing={2} >
                <Grid item xs={3} >
                    {
                        [...Array(10)].map((x, i) =>
                            <Lecture onClick={() => setId(i)} id={i} item xs={12}>
                                <p> Chapter {i + 1} </p>
                            </Lecture>
                        )
                    }
                </Grid>
                <Grid item xs={9}>
                    <div className='maintain' >Your Current Level - {level==0?'Basic':(level==1?'Medium':'Advanced')}</div>
                    <Theory id={id*3+level}/>
                </Grid>
                <Grid item xs={12} >
                    <Quiz id={id*3+level} displayresult={displayresult} setScore={setScore}/>
                </Grid>
                <Grid item xs={12} >
                    <Chat />
                </Grid>
            </Grid>
        </div>
    )
}

export default Course;