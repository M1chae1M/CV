import CubeSide from "../CubeSide"
import {programmingCBData} from "../programmingCBData"
import CodeCubeSide from "./CodeCubeSide"

const CodeSkillsSides=()=>(
    programmingCBData?.sides?.map(({id,src,context,txtColor,startsOn,bgColor})=>
        <CubeSide key={id} XY={100} Z={56} bgColor={bgColor} startsOn={startsOn}>
            <CodeCubeSide src={src} context={context} txtColor={txtColor}/>
        </CubeSide>
    )
)

export default CodeSkillsSides