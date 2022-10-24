import { FaSlack, FaGithub } from "react-icons/fa";

function Social() {
  return (
    <div className="flex flex-col items-center py-6 px-0 gap-16 bg-[#FFFFFF]">
      <div className="flex flex-col px-8 py-0 gap-8 ">
        <div className="flex flex-row items-center p-0">
          <div className="flex flex-row items-center justify-center p-0 gap-6">
            <a href="https://slack.com/Confidence James" target="_blank" rel="noreferrer">
              <FaSlack className="w-[24px] h-[24px]" />
            </a>
            <a href="https://github.com/jamesconfy" target="_blank" rel="noreferrer">
              <FaGithub className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
