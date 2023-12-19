import CubeSide from "../CubeSide"
import {projectCBData} from "@/components/cubes/projectCBData"
import ProjectCudeSide from "./ProjectCubeSide"

const ProjectsSides=()=>(
    projectCBData.sides?.map(({id,url,alt,src,startsOn})=>
        <CubeSide key={id} XY="150" Z="81" startsOn={startsOn}>
            <ProjectCudeSide href={url} alt={alt} src={src}/>
        </CubeSide>
    )
)

export default ProjectsSides