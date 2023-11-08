import styled from "styled-components"

const Frame=styled.div`
    animation:onLoadAnimation 0.5s ease-in-out both;
    height:auto;
    align-items:center;
    display:grid;
    width:300px;
    border-radius:15px;
    padding:15px;
    box-shadow:2px 2px rgb(37 32 217 / 70%);
    border:solid 3px rgb(27 25 116 / 80%);
    color:var(--textColor);
    margin-top:5px;
    overflow:hidden;
`

export default Frame