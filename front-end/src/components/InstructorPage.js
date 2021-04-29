import React from 'react';
import { Link } from "react-router-dom";


const InstructorPage = (props) => {
    
    return (
        <div>
            <h1>Instructor Page</h1>
            <Link to="/add-class" className="addClassButton">
                <button>Add a Class</button>
            </Link>
        </div>
    );
};

export default InstructorPage;