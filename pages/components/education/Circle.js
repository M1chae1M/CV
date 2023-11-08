import styled from "styled-components"

const Circle=styled.div`
    border-radius:50%;
    width:42px;
    height:42px;
    line-height:42px;
    text-align:center;
    vertical-align:middle;
    background-color:black;
    color:white;
    display:grid;
    justify-items:center;
    white-space:wrap;
    position:relative;
    transition:scale 0.9s ease-in-out both,
    user-select:none;

    &::after{
        content:'';
        width:5px;
        height:22px;
        position:absolute;
        bottom:0%;
        left:50%;
        transform:translate(-50%, 100%);
        background-color:black;
        display:grid;
    }

    &:hover{
        scale:110%;
    }
    &:hover~div, &~div:hover{
        color:white;
    }

    &:hover{
        background-color:rgb(24, 24, 24) !important;
    }
`

export default Circle