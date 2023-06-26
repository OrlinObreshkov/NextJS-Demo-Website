import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../../components/layout/Layout";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Demo Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Edu+NSW+ACT+Foundation:wght@400;500&family=Roboto:wght@300;400;500;700&family=Stick+No+Bills&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/41909bbed0.js"
          crossorigin="anonymous"
          defer
        ></script>
      </Head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
