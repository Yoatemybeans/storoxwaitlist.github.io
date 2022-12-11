import { FunctionComponent } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./LandingPage.module.css";
<script></script>
const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPageDiv}>
      <img
        className={styles.whiteLogoNoBackground}
        alt=""
        src="../white-logo--no-background@2x.png"
      />
      <img className={styles.pngfind1Icon} alt="" src="../pngfind-1@2x.png" />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.theNextLevelOfEccommerce}>
        The Next Level of Eccommerce
      </div>
      <Button
        className={styles.rectangleButton}
        sx={{ width: 582 }}
        variant="contained"
        color="secondary"
        size="large"
      >
        Join Waitlist
      </Button>
      <div className={styles.joinTheWaitlistNowAndGet}>
        Join the Waitlist Now and get 6 months of Storox Gold for free
      </div>
      <Button
        className={styles.rectangleButton1}
        sx={{ width: 194 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Buyer
      </Button>
      <Button
        className={styles.rectangleButton2}
        sx={{ width: 194 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Seller
      </Button>
      <Button
        className={styles.rectangleButton3}
        sx={{ width: 194 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Marketer
      </Button>
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv1} />
      <div className={styles.lineDiv2} />
      <div className={styles.lineDiv3} />
      <TextField
        className={styles.rectangleTextField}
        sx={{ width: 514 }}
        color="success"
        variant="standard"
        type="text"
        label="First Name"
        placeholder="e.g., John"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.rectangleTextField1}
        sx={{ width: 514 }}
        color="success"
        variant="standard"
        type="text"
        label="Last Name"
        placeholder="e.g., Smith"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.rectangleTextField2}
        sx={{ width: 513 }}
        color="success"
        variant="standard"
        type="email"
        label="Email"
        placeholder=" example@example.com"
        size="medium"
        margin="none"
      />
      <a className={styles.pngegg1A} href="https://twitter.com/joinstorox" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
    </div>
  );
};

export default LandingPage;
