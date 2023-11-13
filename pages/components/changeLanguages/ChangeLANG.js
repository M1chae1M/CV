import React, {Component} from 'react';
import plFlag from '../img/languages/197529.png';
import enFlag from '../img/languages/197374.png';
import Flag from './Flag';

const polish=plFlag.src;
const english=enFlag.src;

export default class ChangeLANG extends Component{
    render(){
        const styles={
            ChangeLANGs:{
                position:'sticky',
                top:'0%',
                width:'100%',
                display:'grid',
                zIndex:'14110',
                WebkitUserSelect:'none',
                MsUserSelect:'none',
                userSelect:'none',
            },
            poz:{
                position:'absolute',
                right:'3%',
                zIndex:'140',
            },
        }
        return(
            <div id='ChangeLANGs' style={styles.ChangeLANGs}>
                <div style={styles.poz}>
                    <Flag src={polish} lang={'PL'} alt={`PL flag`} {...this.props}/>
                    <Flag src={english} lang={'EN'} alt={`EN flag`} {...this.props}/>
                </div>
            </div>
        )
    }
}