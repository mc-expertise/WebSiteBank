import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal in few easy steps.
      </h2>
      <p className={`${styles.paragraph}`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" />
    </div>
  </section>
);

export default CardDeal;
