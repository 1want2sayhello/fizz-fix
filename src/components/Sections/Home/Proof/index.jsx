import React from "react";
import DetroitSippersProof from "../../../../assets/graphics/proofs/detroit-sipper-proof.png";
import MidwestBitesProof from "../../../../assets/graphics/proofs/midwest-bites-proof.png";
import ColaCultureProof from "../../../../assets/graphics/proofs/cola-culture-proof.png";
import BubbleBorder from "../../../../assets/graphics/bubble-s-border.svg";
import styles from "./ProofSection.module.scss";

const ProofSection = () => {
  return (
    <section className={styles.proofSection}>
      <div className={styles.proofHeader}>
        <h2> As Featured In</h2>
      </div>

      <div className={styles.proofContent}>
        <div className={styles.proof}>
          <div className={styles.proofImg}>
            <img src={MidwestBitesProof} alt="midwest bites" />
          </div>
          <div className={styles.proofComment}>
            <p>
              "The Highest Praise We Give, A Verified Bites Score of 10/10."
            </p>
          </div>
        </div>
        <div className={styles.proof}>
          <div className={styles.proofImg}>
            <img src={ColaCultureProof} alt="cola culture" />
          </div>
          <div className={styles.proofComment}>
            <p>
              {" "}
              "With How Delicious These Sodas Are, We'll Be Back for More!"{" "}
            </p>
          </div>
        </div>
        <div className={styles.proof}>
          <div className={styles.proofImg}>
            <img src={DetroitSippersProof} alt="detroit sippers" />
          </div>
          <div className={styles.proofComment}>
            <p>
              "Delicious & Delightful Drinks, Daring to Spice Up Your Daily
              Routine."
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bubbleBorder} aria-hidden="true">
        <img src={BubbleBorder} alt="" />
      </div>
    </section>
  );
};

export default ProofSection;
