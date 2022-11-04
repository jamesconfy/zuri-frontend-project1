function CheckBox({ id }) {
  return (
    <div className="flex flex-row items-start p-0 gap-3">
      <div className="flex flex-row justify-center items-center pt-[2px] gap-2">
        <input type="checkbox" className="box-border bg-white rounded-md border border-solid border-[#D0D5DD]" id={id} />
        <div className="flex flex-col items-start p-0 gap-[2px]">
          <h1 className="font-[400] text-[16px] text-[#475467] leading-6">You agree to providing your data to ? who may contact you.</h1>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
