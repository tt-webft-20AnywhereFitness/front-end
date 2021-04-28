import React, { useState, useEffect } from 'react';
import Classes from './Classes/Classes';
import axios from 'axios';


const ClientPage = (props) => {
    const [gymClass, setGymClass] = useState([])

    useEffect(() => {
        const getClasses = () => {
            axios
            .get("https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes")
            .then(res=> {
                setGymClass(res.data)
            })
            .catch(err=>{
                console.log(err);
            })
        }
        getClasses();
        },[]);
    
    return (
        <div>
            <h1>Client Page</h1>
            <Classes classes={gymClass} id={gymClass.class_id}/>
        </div>
    );
};

export default ClientPage;