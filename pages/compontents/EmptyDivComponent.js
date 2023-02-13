import React from "react";

class EmptyDivComponent extends React.Component{
    render(){
        const styles={
            EmptyDivComponent:{
                height:this.props.height+'px',
                transformStyle:'preserve-3d',
                margin:'20px auto',
            },
        }
        return(
            <div id="EmptyDivComponent" style={styles.EmptyDivComponent}></div>
        );
    }
}

export default EmptyDivComponent;