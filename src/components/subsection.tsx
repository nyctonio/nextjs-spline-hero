const Section = () => {
  return (
    <div className="w-full bg-black px-8 py-8 leading-none">
      <p className="text-gray-400 text-[40px]">Design & </p>
      <p className="text-white text-[60px]">Development</p>
      <div className="flex justify-between mt-10">
        <div></div>
        <div className="bg-white px-8 py-3 flex text-[50px]">
          <div className="flex justify-center items-center">Join Us</div>
          <div className="flex justify-center items-center">
            <svg
              width="60px"
              height="60px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#000000"
            >
              <path
                fill-rule="evenodd"
                d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
