const Banner = () => {
  return (
    <div className="container mx-auto">
      {/* bg-[url('../../assets/images/banner.jpeg')] */}
      {/* url('src/assets/images/banner.jpeg') */}
      <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url('https://i.ibb.co/6r166YX/banner.jpg')] w-full bg-cover bg-center h-[600px] rounded-xl space-y-4 text-white flex flex-col justify-center text-center items-center ">
        <h3 className="text-3xl md:text-5xl font-bold ">
          Discover an exceptional cooking
          <br className="hidden md:flex" />
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
