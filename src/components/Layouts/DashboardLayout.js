import RootLayout from "./RootLayout";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <RootLayout>
        <div className="min-h-screen">
          <main className="">{children}</main>
        </div>
      </RootLayout>
    </>
  );
};

export default DashboardLayout;
