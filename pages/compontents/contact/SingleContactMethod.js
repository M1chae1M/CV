import React from 'react';

class SingleContactMethod extends React.Component{
    render(){
        const {href, name, download, src, alt}=this.props;
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
                href={href}
                name={name}
                target="_blank"
                rel="noreferrer"
                download={download}
                draggable={false}
            >
                <div style={styles.singleContactMethod} className='singleContactMethod'>
                    <div style={styles.imgDiv}>
                        <img src={src} alt={alt} style={styles.img} draggable={false}/>
                    </div>
                </div>
            </a>
        );
    }
}

export default SingleContactMethod;