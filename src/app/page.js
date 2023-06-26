import { Fragment } from "react";
import Intro from "../../components/intro/Intro";
import ServicesList from "../../components/services/ServicesList";
import CryptoList from "../../components/crypto/CryptoList";
import Cta from "../../components/cta/Cta";

function Home() {
  return (
    <Fragment>
      <Intro />
      <ServicesList />
      <CryptoList />
      <Cta />
    </Fragment>
  );
}

export default Home;
