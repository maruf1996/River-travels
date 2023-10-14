import RootLayout from "@/components/Layouts/RootLayout";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
