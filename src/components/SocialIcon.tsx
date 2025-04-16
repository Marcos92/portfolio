interface Props {
  iconClass: string;
  url: string;
}

export default function SocialIcon({ iconClass, url }: Props) {
  const className = iconClass + " fa-2xl zoom";
  return (
    <a className="social-icon" href={url} target="_blank">
      <i className={className}></i>
    </a>
  );
}
