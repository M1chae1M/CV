import React from 'react';
import polish from '../img/languages/197529.png';
import english from '../img/languages/197374.png';

export default class ChangeLanguages extends React.Component{
    render(){
        const {language, ChangeLanguage}=this.props;
        const styles={
            ChangeLanguages:{
                position:'sticky',
                top:'0%',
                width:'100%',
                display:'grid',
                zIndex:'14110',
                WebkitUserSelect:'none',
                MsUserSelect:'none',
                userSelect:'none',
            },
            img:{
                width:'40px',
                height:'40px',
                zIndex:'14110',
                scale:'0.95',
            },
            poz:{
                position:'absolute',
                right:'3%',
                zIndex:'140',
            },
            selected:{
                borderRadius:'50%',
                overflow:'hidden',
                border:'solid black 2px',
                scale:'1',
            },
        }
        return(
            <div id='ChangeLanguages' style={styles.ChangeLanguages}>
                <div style={styles.poz}>
                    <img
                        className='flag'
                        style={language==='PL'?{...styles.img, ...styles.selected}:styles.img}
                        src={polish.src}
                        alt='PL
                        flag'
                        onClick={ChangeLanguage}
                        draggable={false}
                    />
                    <img
                        className='flag'
                        style={language==='EN'?{...styles.img, ...styles.selected}:styles.img}
                        src={english.src}
                        alt='EN flag'
                        onClick={ChangeLanguage}
                        draggable={false}
                    />
                </div>
            </div>
        );
    }
}