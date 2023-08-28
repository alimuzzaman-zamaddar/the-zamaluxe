const Entertainment = () => {
    return (
      <div className="bg-orange-50">
        <div className="py-20  flex w-[90%] mx-auto">
          <div className=" w-[70%]">
            <img
              className="w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://assets.kerzner.com/api/public/content/287a6905641248d382f9593fb7ef8602?v=29c40f22&t=w992"
              alt=""
            />
          </div>
          <div className=" w-[30%] flex justify-center items-center">
            <div className=" w-[80%] mx-auto text-center">
              <h1 className="text-4xl py-6 text-blue-700 font-serif border-b-[1px] border-blue-700 mb-10" data-aos="zoom-in"
              data-aos-duration="2000">Non-Stop Entertainment</h1>
              <p className="text-blue-950 mb-5" data-aos="zoom-in"
              data-aos-duration="1000">
                Atlantis Resorts are the quintessential day through to night
                entertainment destinations, offering a range of activities
                suitable for guests of all ages.
              </p>
              <div className="" data-aos="zoom-in"
              data-aos-duration="1000">
                <button className="px-8 bg-blue-700 hover:bg-[#d3aa2f] duration-700 py-3 text-white">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Entertainment;