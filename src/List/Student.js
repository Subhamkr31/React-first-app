
import './student.css'

const StudentDetailComp = ({ name, age, subject }) => {

    return (
        <div className="container">
            <div className='test'>{name}  </div>
            <div className='details'>
                <span>{age}</span>
                <span>{subject}</span>
            </div>

        </div>
    )

}

export default StudentDetailComp
