import Detail from "@components/templates/Detail";
import { projects } from "../../list";
import fasthunterView from "@assets/images/works/fasthunter.webp";

function Fasthunter () {
    return (
        <Detail descript={projects.fasthunter} img={fasthunterView} />
    )
}

export default Fasthunter