import Detail from "@components/templates/Detail";
import { landings } from "../../list";
import refinanceLoanView from "@assets/images/works/refinanceLoan.webp"

function RefinanceLoan () {
    return (
        <Detail descript={landings.refinanceLoan} img={refinanceLoanView} />
    )
}

export default RefinanceLoan