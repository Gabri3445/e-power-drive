import { GetServerSideProps, type NextPage } from "next";
import LoginForm from "~/components/LoginForm";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
    <LoginForm/>
    </>
  );
};

export default Home;
