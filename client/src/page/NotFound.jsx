import React, {useContext} from 'react';
import {Context} from "../index";

const NotFound = () => {

    const {user} = useContext(Context);
    console.log(user.isAuth)
    return (
        <div>
           Not found 404
        </div>
    );
};

export default NotFound;