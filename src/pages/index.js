import RootLayout from "@/components/Layouts/RootLayout";
import Herobanner from "@/components/UI/Herobanner";
import LatestLounch from "@/components/UI/LatestLounch";
import Overview from "@/components/UI/Overview";
import Review from "@/components/UI/Review";
import ServicePage from "@/components/UI/ServicePage";
import Upcoming from "@/components/UI/Upcoming";

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
