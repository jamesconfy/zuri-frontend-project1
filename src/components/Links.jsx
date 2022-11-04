import Button from "./Button";
import InternalButton from "./InternalButton";

function Links() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Button title="Twitter Link" address="https://twitter.com/jamesconfy" id="twitter" />
      <Button title="Zuri Team" address="https://training.zuri.team/" id="btn__zuri" />
      <Button title="Zuri Books" address="http://books.zuri.team" id="books" />
      <Button title="Python Books" address="https://books.zuri.team/python-for-beginners?ref_id=Confidence James" id="book__python" />
      <Button title="Background Check for Coders" address="https://background.zuri.team" id="pitch" />
      <Button title="Design Books" address="https://books.zuri.team/design-rules" id="book__design" />
      <InternalButton title="Contacts" address="/contact" id="contact" />
    </div>
  );
}

export default Links;
