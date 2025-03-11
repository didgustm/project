import Detail from "@components/templates/Detail";
import { projects } from "../../list";
import corevacView from "@assets/images/works/corevac.webp";

function Corevac () {
    return (
        <Detail descript={projects.corevac} img={corevacView} />
    )
}

export default Corevac