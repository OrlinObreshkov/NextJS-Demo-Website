import DataDummyServices from "../../data/data-services";
import Button from "../UI/Button";
import ServiceElement from "./ServiceElement";
import styles from "./ServicesList.module.css";

function ServicesList() {
  const serviceData = DataDummyServices.map((service) => (
    <ServiceElement
      key={service.id}
      id={service.id}
      icon={service.icon}
      title={service.title}
      description={service.description}
    />
  ));

  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles["services__content"]}>
          <h2 className={styles["services__title"]}>Our services</h2>
          <ul>{serviceData}</ul>
        </div>
        <div className={styles["services__btn"]}>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
