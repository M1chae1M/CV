import CubeSide from "../CubeSide"
// import {programmingCBData} from "../programmingCBData"
import {programmingCBData} from "@/components/cubes/programmingCBData"
import CodeCubeSide from "./CodeCubeSide"

const CodeSkillsTop=()=>(
    programmingCBData?.top?.map(({id,src,context,bgColor,color,rotateX})=>
        <CubeSide key={id} XY={100} Z={56} bgColor={bgColor} rotateX={rotateX}>
            <CodeCubeSide src={src} context={context} txtColor={color} logoColor={color}/>
        </CubeSide>
    )
)

export default CodeSkillsTop