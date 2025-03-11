import Detail from "@components/templates/Detail";
import { projects } from "../../list";
import fhdealerView from "@assets/images/works/fhdealer.webp";

function FHDealer () {
    return (
        <Detail descript={projects.fasthunterDealer} img={fhdealerView} />
    )
}

export default FHDealer