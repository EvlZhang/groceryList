import React, {useState} from 'react';
import logo from '../logo.svg';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./Joes.css";
const Joes=(props)=>{
    const items=[1,2,3,4,5];
    return(
        <div className={"container"}>
            <div className={"verticalContainer"}>
                <input className={"searchBar"} placeholder={"Enter Product Name"}/>
                <AwesomeButton type="primary"> Search </AwesomeButton>
                <li key={items.toString()}>
                    {items}
                </li>
            </div>

        </div>
    )
};

export default Joes;