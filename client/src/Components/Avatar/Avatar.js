import './Avatar.scss';
import mohan_muruge from '../../Assets/Images/Mohan-muruge.jpg';

function Avatar(props) {
    return (
        <div className={props.className}>
            <img src={mohan_muruge} alt="Avatar user" className={`${props.className}__image`} />
        </div>
    );
};

export default Avatar;