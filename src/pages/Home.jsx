import Content from "../components/Content";
import Social from "../components/Social";

function Home() {
  return (
    <div className="flex flex-col justify-center px-8 py-0 gap-8">
      <Content />
      <Social />
    </div>
  );
}

export default Home;
