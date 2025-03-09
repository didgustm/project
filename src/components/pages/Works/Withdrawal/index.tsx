import Detail from "@components/templates/Detail";
import { landings } from "../list";
import withdrawalView from "@assets/images/works/withdrawal.webp"

function Withdrawal () {
    return (
        <Detail descript={landings.withdrawal} img={withdrawalView} />
    )
}

export default Withdrawal