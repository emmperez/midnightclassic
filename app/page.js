
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";

export default function Home() {

  return (
    <>
      <Loader />
      <Header />
      <Hero />
    </>
  );
}
