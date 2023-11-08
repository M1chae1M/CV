import {TranslatedCTX} from '../../..';
import Frame from "../../Frame/Frame";
import FrameHeader from "@/pages/components/Frame/FrameHeader";

const style={
  gridColumn:'1/3',
  gridRow:'4/6',
  width:'calc(300px * 2 + 4* 10px + 6px)',
}

const Projects=({children})=>(
  <TranslatedCTX.Consumer>
  {value=>{
    const {translatedTXT}=value??{};
    const {Projects}=translatedTXT??{};
    return(
      <Frame id='Projects' style={{...style}}>
        <FrameHeader id='ProjectsHeader'>{Projects}</FrameHeader>
        {children}
      </Frame>
    )
  }}
  </TranslatedCTX.Consumer>
)

export default Projects 