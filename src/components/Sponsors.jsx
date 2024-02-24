
import bg from "/sponsor/bg_sponsor.png";
import sponsors from "/sponsor/sponsors.png";

const Sponsors = () => {
  return (
    <>
      <section className=" bg-[#040B11] w-full relative overflow-hidden">
        <div className=" relative w-full">
          <p className="absolute font-bakbak w-full top-[1rem] text-center font-semibold text-[3rem] text-white">
            Sponsors
          </p>
          <img src={bg} className=" w-full md:h-[100vh] z-10" alt="bg" />
          <img
            src={sponsors}
            className=" absolute w-auto left-[5%] bottom-[5%] z-20"
            alt="sponsors1"
          />
          <img
            src={sponsors}
            className=" absolute w-auto left-[25%] top-[35%] z-20"
            alt="sponsors2"
          />
          <img
            src={sponsors}
            className=" absolute w-auto left-[43%] top-[15%] z-20"
            alt="sponsors3"
          />
          <img
            src={sponsors}
            className=" absolute w-auto right-[25%] top-[35%] z-20"
            alt="sponsors3"
          />
          <img
            src={sponsors}
            className=" absolute w-auto right-[5%] bottom-[5%] z-20"
            alt="sponsors3"
          />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
Sponsors;
