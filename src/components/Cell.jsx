import Grogu from "./Grogu";

function Cell({ keyProp, groguPosition }) {


    return (

        <div className="cell" id={keyProp}>

            {groguPosition === parseInt(keyProp) ? <Grogu /> : null}

        </div>
    )
}

export default Cell
