import RootLayout from "@/components/Layouts/RootLayout";
import Herobanner from "@/components/UI/Home/Herobanner";
import LatestLounch from "@/components/UI/Home/LatestLounch";
import Overview from "@/components/UI/Home/Overview";
import Review from "@/components/UI/Home/Review";
import ServicePage from "@/components/UI/Home/ServicePage";
import Upcoming from "@/components/UI/Home/Upcoming";

export default function HomePage() {
  return (
    <main>
      <Herobanner></Herobanner>
      <Overview></Overview>
      <ServicePage></ServicePage>
      <LatestLounch></LatestLounch>
      <Upcoming></Upcoming>
      <Review></Review>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
