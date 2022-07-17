import axios from 'axios'
import icon from '../../assets/img/Vector.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'

    type Props = {
        SaleId: Number;
    }


function NotificationButton( {SaleId}: Props ) {

    return(
        <>
            <div className="dsmeta-red-btn" onClick={() =>{handleClick(SaleId)}}>
                <img src={icon} />
            </div>
        </>
    )
}

function handleClick(id :Number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
            console.log(`oia só ${id}`);
        })
}

export default NotificationButton