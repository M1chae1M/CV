
import Werse from './Werse';
import {TranslatedCTX} from '../..';
import Frame from '../Frame/Frame';
import FrameHeader from '@/pages/components/Frame/FrameHeader';
import OnloadAnimation from '@/pages/components/Frame/OnLoadAnimation';

const styles={
  Courses:{
    display:'grid',
  },
  ladder:{
    height:'fit-content',
  },
  CoursesFrame:{
    gridColumn:'2',
    gridRow:'2/4',
  }
}

const Courses=()=>(
  <TranslatedCTX.Consumer>
  {value=>{
    const {translatedTXT}=value??{};
    const {Courses}=translatedTXT??{};
    const {content, header}=Courses??{};
    return(
      <Frame id='CoursesFrame' style={{...styles.CoursesFrame}}>
        <FrameHeader id='CoursesHeader'>{header}</FrameHeader>
        <OnloadAnimation style={styles.Courses}>
          <div style={styles.ladder} id='ladder'>
            {content?.map(({date, description},i)=><Werse key={i} date={date} description={description}/>)}
          </div>
        </OnloadAnimation>
      </Frame>
    )
  }}
  </TranslatedCTX.Consumer>
)

export default Courses