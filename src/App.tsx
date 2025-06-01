import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Supporter from "./components/Supporters";
import Video from "./components/Video";

export default function App() {
  return (
    <>
      <Banner />
      <Header />
      <Explore />
      <Supporter />
    <Video />
    <Benefits />
    <Courses />
    </>
  );
}
