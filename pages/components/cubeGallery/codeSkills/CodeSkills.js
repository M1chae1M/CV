import {TranslatedCTX} from '../../..';
import Frame from "../../Frame/Frame";
import FrameHeader from "@/pages/components/Frame/FrameHeader";

const CodeSkills=({children})=>(
  <TranslatedCTX.Consumer>
  {value=>{
    const {translatedTXT}=value??{};
    const {CodeSkills}=translatedTXT??{};
    return(
      <Frame id='CodeSkills'>
        <FrameHeader id='ProgrammingSkillsHeader'>{CodeSkills}</FrameHeader>
        {children}
      </Frame>
    )
  }}
  </TranslatedCTX.Consumer>
)

export default CodeSkills