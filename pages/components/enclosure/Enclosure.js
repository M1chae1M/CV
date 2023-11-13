import {TranslatedCTX} from '../..';

const style={
  textAlign:'center',
  margin:'5px auto',
  color:'var(--textColor)',
  fontSize:'0.8rem',
}

const Enclosure=()=>(
  <TranslatedCTX.Consumer>
  {value=>{
    const {translatedTXT}=value??{};
    const {Enclosure}=translatedTXT??{};
    const {content}=Enclosure??{};
    return <div id='Enclosure' style={style}>{content}</div>
  }}
  </TranslatedCTX.Consumer>
)

export default Enclosure