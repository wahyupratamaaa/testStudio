import Navbar from "../components/Layout/navbar";
import Section from "../components/Home/section";
import Contentsm from "../components/Home/contentsm";
import Contentxl from "../components/Home/contentxl";
import Footer from "../components/Layout/footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Section />
      <Contentsm />
      <Contentxl />
      <Footer />
    </>
  );
}
