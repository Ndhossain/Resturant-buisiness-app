import headerImg from "../../assets/aboutHeader.jpg";
import classes from "../../styles/About.module.css";
import Authorities from "../Authorities";
import Chef from "../Chef";
import useAbout from "../hooks/useAbout";

export default function About() {
  const { loading, error, stuffResult } = useAbout(`stuff`);
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={headerImg} alt="About Header" />
        <h1>ABOUT US</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className={classes.workers}>
        <Chef loading={loading} error={error} chef={stuffResult[1]} />
        <Authorities loading={loading} error={error} authors={stuffResult[0]} />
      </div>
    </div>
  );
}
