import RootLayout from "@/components/Layouts/RootLayout";
import Herobanner from "@/components/UI/Herobanner";

export default function HomePage() {
  return (
    <main>
      <Herobanner></Herobanner>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
