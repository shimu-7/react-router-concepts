
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    console.log(user)
    const navigate =useNavigate();
    const userStyle={
        margin: '2px',
        border: '2px solid red',
        borderRadius: '20px',
        textAlign: 'center'
    }
    const linkStyle={
        textDecoration: 'none'
    }
    const handleShowDetails =()=>{
        navigate(`/user/${user.id}`)
    }
    return (
        <div style={userStyle}>
            <h4>{user.name}</h4>
            <h5>{user.username}</h5>
            <h6>{user.website}</h6>
            <Link style={linkStyle} to={`/user/${user.id}`}>Show Details</Link>
            <Link style={linkStyle} to={`/user/${user.id}`}>
                <button>click here</button>
            </Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}
export default User;