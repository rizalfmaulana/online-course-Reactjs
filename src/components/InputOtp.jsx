const InputOtp = (props) => {
  return (
    <input
      className="m-2 bg-[#FAFAFA] border-[#d8d8d8] flex-1 border h-[100px] w-[100px] text-center text-5xl focus:ring-0 focus:ring-offset-0 rounded-lg focus:ring-primaryColor focus:border-primaryColor"
      type="text"
      maxLength={props.max} required
    />
  );
};

export default InputOtp;
