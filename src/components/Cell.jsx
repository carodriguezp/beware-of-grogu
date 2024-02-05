import Grogu from "./Grogu";

function Cell({ key, groguPosition }) {

    console.log(key)

    return (

        <div className="cell" id={key}>

            {groguPosition === parseInt.keyValue ? <Grogu /> : null}

        </div>
    )
}

export default Cell
