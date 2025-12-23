import { FacebookIcon } from './components/FacebookIcon';
import { GitHubIcon } from './components/GitHubIcon';
import { LinkedInIcon } from './components/LinkedInIcon';
import { MailIcon } from './components/MailIcon';
import { SocialItem } from './components/SocialItem';

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <SocialItem
        href="https://github.com/akaKimAnh"
        label="GitHub"
        icon={<GitHubIcon />}
      />
      <SocialItem
        href="https://www.linkedin.com/in/anh-l%C3%AA-th%E1%BB%8B-kim-62912028b/"
        label="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <SocialItem
        href="mailto:kimanh.220102@gmail.com"
        label="Email"
        icon={<MailIcon />}
      />
      <SocialItem
        href="https://www.facebook.com/be.ba.94801/"
        label="Facebook"
        icon={<FacebookIcon />}
      />
    </ul>
  );
}
