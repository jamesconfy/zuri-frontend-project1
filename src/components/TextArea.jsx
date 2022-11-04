function TextArea({ id }) {
  return (
    <div className="flex flex-col items-start p-0 gap-[6px] w-full">
      <label htmlFor="textarea" className="font-[500] text-[14px] leading-5 text-[#344054]">
        Message
      </label>
      <textarea
        className={`flex flex-row items-start  box-border bg-[#ffffff] border border-solid border-[#D0D5DD] px-[14px] py-3 drop-shadow-1x rounded-lg w-full placeholder:text-[#667085] self-stretch`}
        placeholder="Send me a message and I'll reply you as soon as possible..."
        id={id}
      />
    </div>
  );
}

export default TextArea;
