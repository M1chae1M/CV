import styled from 'styled-components';

const AnimatedBTN=styled.div`
    position:${props=>!props.scrollToTop?'absolute':'fixed'};
    right:${props=>props.scrollToTop?'5%':'0px'};
    left:${props=>!props.scrollToTop?'0':'none'};
    margin-left:${props=>!props.scrollToTop?'auto':'none'};
    margin-right:${props=>!props.scrollToTop?'auto':'none'};
    bottom:10%;
    display:grid;
    transform:${props=>!props.scrollToTop?'rotate(180deg)':'none'};
    border-radius:50%;
    text-align:center;
    vertical-align:middle;
    line-height:30px;
    height:30px;
    width:30px;
    overflow:hidden;
    border:solid var(--violet-border-color) 3px;
    background-color:transparent;
    fontWeight:bold;
    user-select:none;
    z-index:141;
    border:solid var(--violet-border-color) 3px;
    color:var(--violet-border-color);
    font-size:2.2rem;

    &:hover{
        scale:120%;
        transition:scale 0.2s linear;
    }
    &,&::after,&::before{
        animation:button 1.3s linear both infinite;
    }
    &::after{
        content:'^';
        text-align:center;
        line-height:30px;
        display:block;
        width:30px;
        height:30px;
        position:absolute;
        top:0%;
        transform:translateY(-100%);
    }
    &::before{
        content:'^';
        text-align:center;
        line-height:30px;
        display:block;
        width:30px;
        height:30px;
        position:absolute;
        bottom:0%;
        transform:translateY(100%);
    }`

export default AnimatedBTN