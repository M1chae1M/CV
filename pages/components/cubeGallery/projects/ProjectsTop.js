import CubeSide from "../CubeSide"
// import {projectCBData} from "../projectCBData"
import {projectCBData} from "@/components/cubes/projectCBData"
import ProjectCudeSide from "./ProjectCubeSide"

const ProjectsTop=()=>(
    projectCBData.top?.map(({id,url,alt,src,rotateX})=>
        <CubeSide key={id} XY="150" Z="81" rotateX={rotateX}>
            <ProjectCudeSide href={url} alt={alt} src={src}/>
        </CubeSide>
    )
)

export default ProjectsTop