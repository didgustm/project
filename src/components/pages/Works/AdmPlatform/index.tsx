import Detail from "@components/templates/Detail";
import { projects } from "../list";
import admPlatformView from "@assets/images/works/admPlatform.webp"

function AdmPlatform () {
    return (
        <Detail descript={projects.admPlatform} img={admPlatformView} />
    )
}

export default AdmPlatform