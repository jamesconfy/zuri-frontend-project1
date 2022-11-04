import logo from "../assets/logo.svg";
import I4G from "../assets/I4G.svg";

function Footer() {
  return (
    <div className="flex-col items-center py-12 px-0 gap-16 md:flex">
      <div className="container md:flex flex-start flex-col px-8 py-0 gap-8">
        <div className="box-border md:flex flex-row justify-between items-center pt-8 gap-8 border-t-[#EAECF0] border-t-[solid] border-t-[1px]">
          <img src={logo} alt="logo" className="w-[187.59px] h-8 md:mb-0 mb-6" />
          <h2 className="text-lg md:text-center text-gray-500 font-[400px] md:w-[832.28px] md:mb-0 mb-6">HNG Internship 9 Frontend Task</h2>
          <img src={I4G} alt="logo" className="w-[132.13px] h-8 md:mb-0 mb-6" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
