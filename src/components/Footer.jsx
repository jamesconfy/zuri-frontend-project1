import logo from "../assets/logo.svg";
import I4G from "../assets/I4G.svg";

function Footer() {
  return (
    <div className="flex-col items-center py-12 px-0 gap-16 md:flex hidden">
      <div className="container flex flex-start flex-col px-8 py-0 gap-8">
        <div className="box-border flex flex-row justify-between items-center pt-8 gap-8 border-t-[#EAECF0] border-t-[solid] border-t-[1px]">
          <img src={logo} alt="logo" className="w-[187.59px] h-8" />
          <h2 className="text-lg text-center text-gray-500 font-[400px] w-[832.28px]">HNG Internship 9 Frontend Task</h2>
          <img src={I4G} alt="logo" className="w-[132.13px] h-8" />
        </div>
      </div>
    </div>
  );
}

export default Footer;