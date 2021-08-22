import styled from "styled-components";


export const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
`;

export const CampR=styled.div`
    padding:1%;
    width:40%;
    background-color:red;
    height:100vh;
`;
export const CampL=styled.div`
    padding:1%;
    width:60%;
    background-color:blue;
    height:100vh;
`;
export const Title=styled.h1`
    font-size:2.5em;
    font-family:sans-serif,Arial;
    color:white;
    text-align:center;
    margin-bottom:15px;
`;
export const Formulario=styled.div`
    border:4px solid black;
    border-style: groove;
    border-radius:6px;
    margin:0 auto;
    text-align:center;
    width:80%;
    height:400px;
    background-color:#eee;
    scroll:smooth;
    overflow-y:scroll;

`;
export const Form=styled.form`
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Input=styled.input`
    width:50%;
    margin-top:10px;
    border-radius:4px;

`;

