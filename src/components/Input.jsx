function Input({ label, forHtml, placeholder, type, id }) {
  return (
    <div className={`md:flex flex-col items-start p-0 gap-[6px] w-full`}>
      <label htmlFor={forHtml} className="font-[500] text-[14px] leading-5 text-[#344054]">
        {label}
      </label>
      <input
        className={`box-border bg-[#ffffff] border border-solid border-[#D0D5DD] px-[14px] py-[10px] drop-shadow-1x rounded-lg w-full placeholder:text-[#667085] self-stretch`}
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
  );
}

export default Input;
