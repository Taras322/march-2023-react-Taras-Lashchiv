import React from 'react';
import {ricksData} from "../../const/constants";
import Ricks from "../Ricks/Ricks";

const RickAndMorty = () => {
    return (
        <div>
            {
                ricksData.map((rick, index)=>(<Ricks info={rick} key={index}/>))
            }
        </div>
    );
};

export default RickAndMorty;