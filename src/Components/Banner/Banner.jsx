const Banner = () => {
  return (
    <div className="container mx-auto">
      {/* bg-[url('../../assets/images/banner.jpeg')] */}
      <div className="bg-blue-200 h-[600px] rounded-xl space-y-4 text-white flex flex-col justify-center text-center items-center">
        <h3 className="text-5xl font-bold  ">
          Discover an exceptional cooking
          <br />
          class tailored for you!
        </h3>
        <p>
          If you are a chef, no matter how good a chef you are, it’s not good
          cooking for yourself; 
          <br />
          the joy is in cooking for others. It’s the same
          with music.
        </p>
        <div className=" space-x-6">
            <button className="btn bg-green-400 rounded-full border-none"> Explore Now</button>
            <button className="btn rounded-full bg-transparent text-white"> Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
