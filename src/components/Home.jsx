import Content from "./Content";
import Social from "./Social";

function Home() {
  return (
    <div className="flex flex-col justify-center px-8 py-0 gap-8">
      <Content />
      <Social />
    </div>
  );
}

export default Home;
