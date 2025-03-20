import styles from "./Terms.module.scss";

const Terms = () => {
  return (
    <div className={styles.terms}>
      <div className={styles.content}>
        <h1>10% Discount Terms & Conditions</h1>

        <p>
          By scanning the QR code, guests may be eligible for a{" "}
          <strong>10% discount</strong> on a future stay at our{" "}
          <strong>Tulum, Mexico condo</strong>. The following terms and
          conditions apply:
        </p>

        <h2>1. Eligibility Requirements</h2>
        <ul>
          {/* <li>
            The discount is available only to guests who have completed a{" "}
            <strong>qualifying stay of five (5) nights or more</strong> at our
            Ontario cottage.
          </li> */}
          <li>
            The guest must provide proof of their stay by submitting the{" "}
            <strong>booking name and reservation details</strong> for
            verification.
          </li>
          <li>
            The discount must be used <strong>within two (2) years</strong> from
            the date of the guest’s most recent qualifying stay.
          </li>
        </ul>

        <h2>2. How to Redeem</h2>
        <ul>
          <li>
            To claim the discount, the guest must contact us directly and
            provide the{" "}
            <strong>booking confirmation name and check-in/out dates</strong>{" "}
            for verification.
          </li>
          <li>
            Once verified, the discount code or booking instructions will be
            provided.
          </li>
        </ul>

        <h2>3. Discount Details</h2>
        <ul>
          <li>
            The discount applies only to the <strong>rental rate</strong> of our
            condo in Tulum and does not cover fees, taxes, or additional
            services.
          </li>
          <li>
            The guest must book a{" "}
            <strong>minimum stay of five (5) nights</strong> at the Tulum condo
            to apply the discount.
          </li>
          <li>
            The offer is subject to availability, and blackout dates may apply.
          </li>
          <li>
            The discount cannot be combined with other promotions, transferred
            to another guest, or exchanged for cash.
          </li>
        </ul>

        <h2>4. Other Terms</h2>
        <ul>
          <li>
            We reserve the right to <strong>modify or discontinue</strong> this
            offer at any time without prior notice.
          </li>
          <li>
            Fraudulent claims or attempts to misuse this offer will result in
            disqualification.
          </li>
          <li>
            By claiming this discount, guests acknowledge and agree to these
            terms and conditions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
