import Sidebar from "../UI/Sidebar";
import RootLayout from "./RootLayout";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <RootLayout>
        <div className="flex md:min-h-screen flex-col md:flex-row">
          <Sidebar></Sidebar>
          <main className="">{children}</main>
        </div>
      </RootLayout>
    </>
  );
};

export default DashboardLayout;
