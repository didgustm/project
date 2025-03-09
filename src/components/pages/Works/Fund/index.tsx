import Detail from "@components/templates/Detail";
import { landings } from "../list";
import fundView from "@assets/images/works/fund.webp"

function Fund () {
    return (
        <Detail descript={landings.fund} img={fundView} />
    )
}

export default Fund