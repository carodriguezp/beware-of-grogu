import Grogu from "./Grogu";
import PropTypes from 'prop-types';

function Cell({ keyProp, groguPosition }) {


    return (

        <div className="cell" id={keyProp}>

            {groguPosition === parseInt(keyProp) ? <Grogu /> : null}

        </div>
    )
}

Cell.propTypes = {
    keyProp: PropTypes.number,
    groguPosition: PropTypes.number,

};


export default Cell
