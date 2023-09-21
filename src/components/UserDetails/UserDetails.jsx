import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate=useNavigate()
    const handleBack= () =>{
        navigate('/users')
    }
    return (
        <div>
            <h3>user Details</h3>
            
                <h4>{user.name}</h4>
                <h4>{user.username}</h4>
                <h4>{user.phone}</h4>
                <h5>{user.website}</h5>
                <button onClick={handleBack}>Go back</button>

            
        </div>
    );
};

export default UserDetails;