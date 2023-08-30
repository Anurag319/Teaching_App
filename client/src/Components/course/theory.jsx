import { Link} from 'react-router-dom'
import { Data } from '../../Constants/data';
import courses from '../../Constants/theorydata';

const Theory = (props) => {
    
    const {id} = props;
    const course = courses.find(course => course.id === id)
    console.log(`theory - ${id}`)
    return (
        <div className="page">
            <div>
                <h1>{course.title1}</h1>
                <p>{course.description1}</p>
                <h1>{course.title2}</h1>
                <p>{course.description2}</p>
                <h1>{course.title3}</h1>
                <p>{course.description3}</p>
            </div>
        </div>
    )
}

export default Theory;