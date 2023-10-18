import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
