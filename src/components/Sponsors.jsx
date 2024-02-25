
import bg from "/sponsor/bg_sponsor.png";
import sponsors from "/sponsor/sponsors.png";
import devfolio from '../../public/sponsors/devfolio.png';
import eth from '../../public/sponsors/eth.png';
import polygon from '../../public/sponsors/polygon.png';
import './Sponsors.css';
const Sponsors = () => {
  return (
    <>
      <section className=" bg-[#040B11] w-full relative overflow-hidden" id="#sponsors">
        <div className=" relative w-full">
          <p className=" font-bakbak w-full  text-center font-semibold text-[5rem] text-white mt-24">
            Sponsors
          </p>
          <img src={bg} className=" w-full md:h-[100vh] z-10" alt="bg" />
          {/* <img
            src={sponsors}
            className=" absolute w-auto left-[5%] bottom-[5%] z-20"
            alt="sponsors1"
          /> */}

          <div className="sponsors-wrapper">
            <img
              src={eth}
              className=" absolute w-auto  z-20"

              alt="sponsors2"
            />
            <img
              src={devfolio}
              className=" absolute w-auto  z-20"

              alt="sponsors3"
            />
            <img
              src={polygon}
              className=" absolute w-auto z-20"

              alt="sponsors3"
            />
          </div>

          {/* <img
            src={sponsors}
            className=" absolute w-auto right-[5%] bottom-[5%] z-20"
            alt="sponsors3"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Sponsors;
Sponsors;
