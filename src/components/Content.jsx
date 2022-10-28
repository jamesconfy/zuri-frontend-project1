import Links from "./Links";
import Profile from "./Profile";

function Content() {
  return (
    <div className="flex flex-col justify-start p-0 gap-14 mt-4">
      <Profile id="profile_section" />
      <Links />
    </div>
  );
}

export default Content;
