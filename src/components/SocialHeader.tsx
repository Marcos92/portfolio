import SocialIcon from "./SocialIcon";

export default function SocialHeader() {
  return (
    <div className="social-header">
      <SocialIcon
        iconClass="fa-brands fa-github"
        url="https://github.com/Marcos92/"
      />
      <SocialIcon
        iconClass="fa-brands fa-linkedin"
        url="https://www.linkedin.com/in/marcosgbrodrigues/"
      />
      <SocialIcon
        iconClass="fa-solid fa-file"
        url="https://drive.google.com/file/d/1MI6gNvP99OHCGf1teFcn4RG7dmAmvBwc/view?usp=sharing"
      />
      <SocialIcon
        iconClass="fa-solid fa-envelope"
        url="mailto:marcos.mgbr@gmail.com"
      />
    </div>
  );
}
