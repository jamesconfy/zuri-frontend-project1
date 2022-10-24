import Button from "./Button";
import image from "../assets/image.jpeg";

function Content() {
  return (
    <div className="flex flex-col justify-start p-0 gap-14">
      <div className="flex flex-col items-center p-0 gap-6 isolate">
        <img alt="profile_png" src={image} className="flex flex-col justify-center items-center p-0 rounded-[275px] w-[88px] h-[88px]" />
        <div className="flex flex-row gap-2 p-0 justify-center h-8">
          <h2 className="text-xl font-sans font-[700] text-gray-900 items-center">Confidence James</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Button title="Twitter Link" address="" />
        <Button title="Zuri Team" address="https://training.zuri.team/" id="btn__zuri" />
        <Button title="Zuri Books" address="http://books.zuri.team" id="books" />
        <Button title="Python Books" address="https://books.zuri.team/python-for-beginners?ref_id=Confidence James" id="book__python" />
        <Button title="Background Check for Coders" address="https://background.zuri.team" id="pitch" />
        <Button title="Design Books" address="https://books.zuri.team/design-rules" id="book__design" />
      </div>
    </div>
  );
}

export default Content;
