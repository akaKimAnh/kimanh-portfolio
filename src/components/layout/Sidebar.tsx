import Profile from './Profile';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function Sidebar() {
  return (
    <aside className="relative md:sticky md:top-0 h-screen flex flex-col justify-between py-24">
      <div>
        <Profile />
        <Navigation />
      </div>
      <SocialLinks />
    </aside>
  );
}
