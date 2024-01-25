import Image from "next/image";
import NavBar from "../components/NavBar";

const Home = async () => {
  const response = await fetch("http://localhost:8080/user").catch((e) =>
    console.log(e)
  );
  const data = await response.json();
  return (
    <main>
      {data.users.map((user, index) => (
        <div>{user.username}</div>
      ))}
      <NavBar />
    </main>
  );
};

export default Home;
