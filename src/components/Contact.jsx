function Contact() {
  return (
    <div className="container bg-gray-50 relative">
      <div className="flex flex-col items-center justify-center gap-16 px-0 pt-16 pb-24 absolute">
        <div className="flex flex-row justify-center items-center gap-16 py-0 px-8">
          <div className="flex flex-col justify-center items-center p-0">
            <div className="flex flex-col items-start p-0 gap-12">
              <div className="flex flex-col items-start, gap-5 p-0">
                <h1 className="text-[#101828] font-[600] text-[32px] tracking-tight leading-[44px]">Contact Me</h1>
                <h1 className="text-[#475467] font-[400] text-[20px] leading-[30px]">Hi there, contact me to ask about anything you have in mind</h1>
              </div>
              <form className="flex flex-col items-start p-0 gap-8"></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
