import Input from "../components/Input";
import TextArea from "../components/TextArea";
import CheckBox from "../components/CheckBox";

function Contact() {
  return (
    <div className="bg-[#ffffff] md:flex flex-col items-center justify-center px-0 md:pt-16 pt-4 md:pb-24 pb-4 gap-16">
      <div className="container flex flex-row justify-center items-center py-0 px-8 gap-16">
        <div className="flex flex-col justify-center items-center p-0">
          <div className="flex flex-col items-start p-0 gap-12">
            <div className="flex flex-col items-start, gap-5 p-0">
              <h1 className="text-[#101828] font-[600] text-[36px] tracking-[-0.02em] leading-[44px]">Contact Me</h1>
              <h1 className="text-[#475467] font-[400] text-[20px] leading-[30px]">Hi there, contact me to ask about anything you have in mind</h1>
            </div>
            <form className="flex flex-col p-0 gap-8 w-full">
              <div className="flex flex-col md:items-start p-0 gap-6">
                <div className="md:flex flex-row p-0 gap-6 w-full">
                  <div className="w-full">
                    <Input forHtml="first_name" label="First Name" placeholder="Enter your first name" type="text" id="first_name" />
                  </div>

                  <div className="w-full md:mt-0 mt-5">
                    <Input forHtml="last_name" label="Last Name" placeholder="Enter your last name" type="text" id="last_name" />
                  </div>
                </div>
                <Input forHtml="email" label="Email" placeholder="your@email.com" type="email" id="email" />
                <TextArea id="message" />
                <CheckBox type="check" />
              </div>
              <button
                type="submit"
                className="box-border flex flex-row items-center justify-center border border-solid border-[#1570EF] bg-[#1570EF] rounded-lg py-3 px-5 gap-2 drop-shadow-1x w-full"
                id="btn__submit"
              >
                <h1 className="text-[16px] font-[600] text-white leading-[24px]">Send message</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
