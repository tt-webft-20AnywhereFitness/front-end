import React from "react";
import Class from "./Class";

const Classes = ({classes}) => {
    console.log(classes);
    return (
        <div>
            {classes.map(item => (
                <div key={classes.class_id}>
                <Class classes={classes} key={classes.class_id}/>      
                </div>
            ))}
        </div>
    )
}
export default Classes