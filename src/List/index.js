
import studentList from './student.json'
import Student from './Student'
import './style.css'

const List = () => {


    return (
        <div>
            <div >
                <div style={{
                    padding: "20px",
                    border: "5px solid black",
                    margin: "20px",                 
                    backgroundColor: "yellow",
                }}> <h2>Student List {'------>'} </h2> </div>
                <h3 id="container">{studentList.map(({ name, age, subject }) => (
                    <Student name={name} age={age} subject={subject} />
                ))}</h3>
            </div>
        </div>
    )

}


export default List