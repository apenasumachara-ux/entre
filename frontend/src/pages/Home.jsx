import { useEffect } from "react";
import { getCurrentUser } from "../services/authService";

function Home() {

  useEffect(() => {
    async function loadUser() {
      try {
        const user = await getCurrentUser();

        console.log(user);

      } catch (err) {
        console.error(err);
      }
    }

    loadUser();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;