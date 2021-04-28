import React from 'react';
import { Link } from 'react-router-dom';

const InstructorPage = (props) => {
    
    return (
        <div className="instructorPage">
            <h1>Instructor Page</h1>
            <span>Add a Class</span>
            <Link to="/addclass">
                <button>add</button>
            </Link>
    </div>
    );
};

export default InstructorPage;