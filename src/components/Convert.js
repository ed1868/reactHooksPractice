import react, { useState, useEffect } from "react";

//ONLY USE TEST CASES IF NEEDED
//MUST BE HARDWIRED INTO STATE WITH A LOOP
const testCases = [
    {
        language: "hi",
        text: "hello world can you please translate this to Hindu",
    },
    {
        language: "ar", 
        text: "hello world can you please translate this to arabic",
    },
    {
        language: "ci",
        text: "hello world can you please translate this to Chinese",
    },
    // MORE TEST CASES 
    // {
    //     language: "ci",
    //     text: "hello world can you please translate this to Chinese",
    // },
    // {
    //     language: "ci",
    //     text: "hello world can you please translate this to Chinese",
    // },
    // {
    //     language: "ci",
    //     text: "hello world can you please translate this to Chinese",
    // }
];

const Convert = ({language,text}) => {

    useEffect ((text) => {
       console.log('texty::::', text);
       
    }, []);


    return <div />; 
}

export default Convert;
