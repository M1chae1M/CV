import AnimatedBTN from './AnimatedBTN';

const styles={
  textDecoration:'none',
  color:'black',
  overflow:'hidden',
}

const ScrollBTN=({scrollToTop, href})=>{
  const onClick=()=>document.querySelector(href).scrollIntoView()
  const className=scrollToTop?'up':'down';
  return(
    <a style={styles} draggable={false} id='downButtonTag' onClick={onClick}>
      <AnimatedBTN id='downButton' scrollToTop={scrollToTop} className={className}>{"^"}</AnimatedBTN>
    </a>
  )
}

export default ScrollBTN