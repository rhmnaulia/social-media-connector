import {
  LinkedIn,
  GitHub,
  Twitter,
  Instagram,
  MailOutlineRounded,
} from "@material-ui/icons";
function SocialSection() {
  return (
    <div className="pt-36">
      <ul className="flex-auto">
        <a
          href="https://www.linkedin.com/in/rhmnaulia"
          target="_blank"
          rel="noreferrer noopener"
          className="mx-2"
        >
          <LinkedIn />
        </a>
        <a
          className="mx-2"
          href="https://github.com/rhmnaulia"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </a>
        <a
          className="mx-2"
          href="https://www.instagram.com/rhmnaulia"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram />
        </a>
        <a
          className="mx-2"
          href="https://twitter.com/rhmnaul"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
        <a
          className="mx-2"
          href="mailto: rahmanauliax@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MailOutlineRounded />
        </a>
      </ul>
    </div>
  );
}

export default SocialSection;
