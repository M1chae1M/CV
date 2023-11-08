import styled from "styled-components"

const Flag=styled.img`
  width:40px;
  height:40px;
  z-index:14110;
  scale:${props=>props.language===props.lang?'1':'0.95'};
  border-radius:${props=>props.language===props.lang && '50%'};
  overflow:${props=>props.language===props.lang && 'hidden'};
  border:${props=>props.language===props.lang && 'solid black 2px'};

  &:hover{
    opacity:0.7;
  }
`

export default Flag