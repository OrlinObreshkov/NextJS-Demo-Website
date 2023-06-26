"use client";
import { useEffect, useState } from "react";
import styles from "./CryptoElement.module.css";

function CryptoElement(props) {
  const [cryptoColorElement, setCryptoColorElement] = useState("");
  const [showCryptoIcon, setCryptoIcon] = useState("");
  const symbol = [props.symbol];

  useEffect(() => {
    symbol.find((el) => {
      if (el === "BTC") {
        setCryptoColorElement("crypto-element-btc");
        setCryptoIcon("crypto-icon-bitcoin");
      } else if (el === "ETH") {
        setCryptoColorElement("crypto-element-eth");
        setCryptoIcon("crypto-icon-ethereum");
      } else if (el === "XRP") {
        setCryptoColorElement("crypto-element-xrp");
        setCryptoIcon("crypto-icon-ripple");
      } else if (el === "LTC") {
        setCryptoColorElement("crypto-element-ltc");
        setCryptoIcon("crypto-icon-litecoin");
      } else if (el === "BCH") {
        setCryptoColorElement("crypto-element-bch");
        setCryptoIcon("crypto-icon-bitcoin-cash");
      }
    });
  }, [cryptoColorElement, showCryptoIcon]);

  return (
    <li className={styles[cryptoColorElement]}>
      <div className={styles["crypto-element"]}>
        <div
          className={styles[showCryptoIcon]}
          style={{
            width: 55,
            height: 55,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            margin: "0 auto 10px auto",
          }}
        ></div>

        <h3 className={styles["crypto-element__title"]}>{props.name}</h3>
        <span className={styles["crypto-element__symbol"]}>
          ({props.symbol})
        </span>
        <p className={styles["crypto-element__price"]}>$ {props.price}</p>
        <span className={styles["crypto-element__percent"]}>
          {props.percent}
        </span>
      </div>
    </li>
  );
}

export default CryptoElement;
