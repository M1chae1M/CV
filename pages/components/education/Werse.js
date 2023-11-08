import Circle from './Circle';

const styles={
    Werse:{
        display:'grid',
        gridAutoFlow:'column',
        justifyContent:'start',
        margin:'15px auto',
        alignItems:'center',
    },
    description:{
        marginLeft:'7px',
        width:'auto',
        display:'grid',
        textAlign:'left',
    },
}

const Werse=({date,description})=>(
    <div style={styles.Werse} id='Werse'>
        <Circle>{date}</Circle>
        <div style={styles.description}>{description}</div>
    </div> 
)
  
export default Werse;