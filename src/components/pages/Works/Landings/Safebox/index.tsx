import Detail from "@components/templates/Detail";
import { landings } from "../../list";
import safeboxView from "@assets/images/works/safebox.webp"

function Safebox () {
    return (
        <Detail descript={landings.safebox} img={safeboxView} />
    )
}

export default Safebox