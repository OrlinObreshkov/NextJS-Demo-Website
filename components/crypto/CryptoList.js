import Button from "../UI/Button";
import CryptoElement from "./CryptoElement";
import styles from "./CryptoList.module.css";

async function getCryptoData() {
  try {
    const URL = "https://api.coinlore.net/api/tickers/";
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const result = [];
    const mainCryptoData = ["btc", "eth", "xrp", "ltc", "bch"];
    const currentEl = data.data.forEach((element) => {
      if (mainCryptoData.includes(element.symbol.toLowerCase())) {
        result.push(element);
      }
    });

    return result;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
}

async function CryptoList() {
  const cryptoElements = await getCryptoData();
  const cryptoData = cryptoElements.map((element) => (
    <CryptoElement
      key={element.id}
      id={element.id}
      name={element.name}
      symbol={element.symbol}
      price={element.price_usd}
      percent={element.percent_change_24h}
    />
  ));

  return (
    <section className={styles["section-crypto"]}>
      <div className="container">
        <div className={styles["crtypto__content"]}>
          <h2 className={styles["section-crypto__title"]}>Crypto stats</h2>
          <p className={styles["section-crypto__subtitle"]}>
            Donec imperdiet consequat consequat. Suspendisse feugiat congue
            posuere. Nulla massa urna, fermentum eget quam aliquet.
          </p>
          <ul className={styles["section-crypto__list"]}>{cryptoData}</ul>
          <p className={styles["section-crypto__description"]}>
            Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu
            arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac
            arcu sit amet, fermentum pellentesque et purus. Integer maximus
            varius lorem, sed convallis diam accumsan sed. Etiam porttitor
            placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
            ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget
            purus nec nulla mattis et accumsan ut magna libero. Morbi auctor
            iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque.
            Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui
            curabitur lacinia.
          </p>
          <div className={styles["section-crypto__btn"]}>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoList;
