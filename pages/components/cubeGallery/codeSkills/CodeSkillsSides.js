import CubeSide from "../CubeSide"
import {programmingCBData} from "@/components/cubes/programmingCBData"
import CodeCubeSide from "./CodeCubeSide"

const CodeSkillsSides=()=>(
    programmingCBData?.sides?.map(({id,src,context,txtColor,color,startsOn,bgColor})=>
        <CubeSide key={id} XY={100} Z={56} bgColor={bgColor} startsOn={startsOn}>
            <CodeCubeSide src={src} context={context} txtColor={txtColor} logoColor={color}/>
        </CubeSide>
    )
)

export default CodeSkillsSides