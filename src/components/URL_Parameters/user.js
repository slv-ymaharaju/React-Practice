import { useParams } from "react-router-dom";

const User = () => {
    const  params  = useParams();
    return <div>Selected User: {params.username}</div>;
  };

export default User;
  