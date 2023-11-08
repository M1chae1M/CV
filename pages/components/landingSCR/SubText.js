import React,{PureComponent} from 'react';
import styled, {keyframes} from 'styled-components';

const typingAnimation=keyframes`
from{width:0%}
to{width:100%}`;
const blinkCaretAnimation=keyframes`
from, to{border-color:transparent}
50% {border-color:orange}`;

export default class SubText extends PureComponent{
  render(){
    const {text}=this.props;
    const SpellingText=styled.div`
    overflow:hidden;
    border-right:.15em solid orange;
    white-space:nowrap;
    font-size:1.45rem;
    margin:0 auto;
    letter-spacing:.15em;
    transition:all 1s ease-in-out infinite;
    animation:${typingAnimation} 3.5s steps(${text?.length||20}, end) infinite alternate,${blinkCaretAnimation} .75s step-end infinite;`;
    return <SpellingText>{text}</SpellingText>
  }
}