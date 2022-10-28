import image from "../assets/image.jpeg";

function Profile({ id }) {
  return (
    <div className="flex flex-col items-center p-0 gap-6 isolate" id={id}>
      <img
        alt="profile_png"
        src={image}
        className="flex flex-col justify-center items-center p-0 rounded-[275px] w-[100px] h-[100px]"
        id="profile__img"
      />
      <div className="flex flex-row gap-2 p-0 justify-center h-8">
        <h2 className="text-xl font-sans font-[700] text-gray-900 items-center" id="twitter">
          Mr Shameless
        </h2>
        <h2 style={{ display: "none" }} id="slack">
          Everybody
        </h2>
      </div>
    </div>
  );
}

export default Profile;
