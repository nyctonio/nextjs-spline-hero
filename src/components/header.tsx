const Header = () => {
  return (
    <div className="flex px-8 py-3 justify-between">
      <div className="font-bold text-3xl flex justify-center items-center">
        airobo.
      </div>
      <div className="bg-black flex px-2 pl-6 py-2 space-x-6 justify-between">
        <div className="text-white flex justify-center items-center">about</div>
        <div className="text-white flex justify-center items-center">work</div>
        <div className="bg-white px-3 py-2">Join Us</div>
      </div>
    </div>
  );
};

export default Header;
