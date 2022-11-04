import Input from "./Input";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";

function Contact() {
  return (
    <div className="bg-[#ffffff] sm:block lg:flex flex-col items-center justify-center px-0 pt-16 pb-24 gap-16 relative">
      <div className="container flex flex-row justify-center items-center py-0 px-8 gap-16">
        <div className="flex flex-col justify-center items-center p-0">
          <div className="flex flex-col items-start p-0 gap-12">
            <div className="flex flex-col items-start, gap-5 p-0">
              <h1 className="text-[#101828] font-[600] text-[36px] tracking-[-0.02em] leading-[44px]">Contact Me</h1>
              <h1 className="text-[#475467] font-[400] text-[20px] leading-[30px]">Hi there, contact me to ask about anything you have in mind</h1>
            </div>
            <form className="flex flex-col items-start p-0 gap-8 w-full">
              <div className="flex flex-col items-start p-0 gap-6">
                <div className="flex flex-row items-start p-0 gap-6">
                  <Input forHtml="first_nam " label="First Name" placeholder="Enter your first name" width="60" type="text" id="first_name" />
                  <Input forHtml="last_name" label="Last Name" placeholder="Enter your last name" width="60" type="text" id="last_name" />
                </div>
                <Input forHtml="email" label="Email" placeholder="your@email.com" width="full" type="email" id="email" />
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
