import RootLayout from "@/components/Layouts/RootLayout";
import Herobanner from "@/components/UI/Herobanner";
import LatestLounch from "@/components/UI/LatestLounch";
import ServicePage from "@/components/UI/ServicePage";
import StepsPart from "@/components/UI/StepsPart";

export default function HomePage() {
  return (
    <main>
      <Herobanner></Herobanner>
      <StepsPart></StepsPart>
      <ServicePage></ServicePage>
      <LatestLounch></LatestLounch>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
