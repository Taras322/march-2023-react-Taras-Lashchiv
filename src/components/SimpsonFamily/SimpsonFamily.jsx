import React from 'react';
import {simpsonsData} from "../../const/constants";
import Simpsons from "../Simpsons/Simpsons";

const SimpsonFamily = () => {
    return (
        <div>
            {
                simpsonsData.map((simpson, index)=>(<Simpsons info={simpson} key={index}/>))
            }
        </div>
    );
};

export default SimpsonFamily;