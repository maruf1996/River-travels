import RootLayout from "@/components/Layouts/RootLayout";
import Herobanner from "@/components/UI/Home/Herobanner";
import LatestLounch from "@/components/UI/Home/LatestLounch";
import Overview from "@/components/UI/Home/Overview";
import Review from "@/components/UI/Home/Review";
import ServicePage from "@/components/UI/Home/ServicePage";
import Upcoming from "@/components/UI/Home/Upcoming";

export default function HomePage({ data }) {
  return (
    <main>
      <Herobanner></Herobanner>
      <Overview></Overview>
      <ServicePage></ServicePage>
      <LatestLounch></LatestLounch>
      <Upcoming></Upcoming>
      <Review data={data}></Review>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://river-travels-backend.vercel.app/api/v1/reviews"
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      data: data,
    },
  };
};
