import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext.tsx";
import style from "../styles/Home.module.css";

// Define a type alias for the user authentication context
type UserAuthContext = {
  logOut: () => Promise<void>;
  user: {
    email: string;
    displayName: string;
    // Add other properties as needed
  };
};

function Home() {
  const { logOut, user } = useUserAuth() as UserAuthContext;

  console.log("User:", user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log((err as Error).message); // Type assertion here
    }
  };

  return (
    <div className={style.Contain}>
      <div className={style.Text}>
        <h2>Welcome to the Home page</h2>
        <p className={style.Gmail}>Your Gmail is : {user?.email}</p>
        <p className={style.prgText}>
          Hi, <span>{user?.displayName}</span>
        </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
