import Detail from "@components/templates/Detail";
import { projects } from "../list";
import atgcView from "@assets/images/works/atgcbio.webp";

function Atgc () {
    return (
        <Detail descript={projects.atgc} img={atgcView} />
    )
}

export default Atgc