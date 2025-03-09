import Detail from "@components/templates/Detail";
import { projects } from "../list";
import aircleaView from "@assets/images/works/airclean.webp";

function Airclean () {
    return (
        <Detail descript={projects.airclean} img={aircleaView} />
    )
}

export default Airclean