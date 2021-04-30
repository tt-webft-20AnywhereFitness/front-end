import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Classes/Classes';

const InstructorPage = (props) => {
    
    return (
        <div>
            <h1>Instructor Page</h1>
            <div>
                <Link to="/add-class">
                    <button>Add Class</button>
                </Link>
            </div>
            <div>
                <Classes />
            </div>
        </div>


    );
};

export default InstructorPage;