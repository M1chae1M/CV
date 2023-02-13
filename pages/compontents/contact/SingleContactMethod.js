import React from 'react';

class SingleContactMethod extends React.Component{
    render(){
        const styles={
            singleContactMethod:{
                width:'auto',
                display:'grid',
                height:'auto',
                margin:'10px auto',
                justifyContent:'center',
            },
            a:{
                height:'36px',
            },
            imgDiv:{
                border:'solid grey 3px',
                borderRadius:'50%',
                height:'30px',
                backgroundColor:'grey',
            },
            img:{
                width:'30px',
                position:'relative',
            },
        }
        return(
            <a
                style={styles.a}
                href={this.props.href}
                name={this.props.name}
                target="_blank"
                rel="noreferrer"
                download={this.props.download!==undefined?this.props.download:null}
                draggable={false}
            >
                <div style={styles.singleContactMethod} className='singleContactMethod'>
                    <div style={styles.imgDiv}>
                        <img src={this.props.src} alt={this.props.alt} style={styles.img} draggable={false}/>
                    </div>
                </div>
            </a>
        );
    }
}

export default SingleContactMethod;