import React from 'react';

class Werse extends React.Component{
  render(){
    const styles={
        Werse:{
            display:'grid',
            gridAutoFlow:'column',
            justifyContent:'start',
            margin:'15px auto',
            alignItems:'center',
        },
        circle:{
            borderRadius:'50%',
            width:'42px',
            height:'42px',
            lineHeight:'42px',
            textAlign:'center',
            verticalAlign:'middle',
            backgroundColor:'black',
            color:'white',
            display:'grid',
            justifyItems:'center',
            whiteSpace:'wrap',
            position:'relative',
            transition:"scale 0.9s ease-in-out both",
            WebkitUserSelect:'none',
            MsUserSelect:'none',
            userSelect:'none',
        },
        description:{
            marginLeft:'7px',
            width:'auto',
            display:'grid',
            textAlign:'left',
        },
    }
    return(
        <div style={styles.Werse} id='Werse'>
            <div style={styles.circle} className="circle">{this.props.date}</div>
            <div style={styles.description}>{this.props.description}</div>
        </div>
    );
  }
}
  
export default Werse;