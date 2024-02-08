import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse  bg-[#000000] ">
        <div className="order-1 md:order-2 w-full lg:w-[50%]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ogaLas1.png`}
            alt="ogaLas1"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:p-20 text-[#FFFFFF] w-full md:w-[50%] order-1 md:order-2">
          <h1 className="font-extrabold text-5xl">
            Chief Sir Lazurus Ikechukwu Okolie (KSM)
          </h1>
          <h3 className="text-xl mt-2">MD/CEO AT NORLIC NIGERIA LTD</h3>
          <h3 className="text-xl mt-2">(Ugochinyere 1 of Eke)</h3>
          <p className="text-xl">
            He was an information communication and Technology Professional and
            an exemplary leader with diverse experience in enterprise
            information systems, having acquired certifications such as CISA,
            CISM, CGEIT, & CRISCISACA, to mention a few.  In his past roles as
            the CTO/CIO, he successfully designed, deployed and managed
            enterprise IT solutions for a number of banks in Nigeria. He took an
            early retirement from banking as a General Manager and continued in
            his chosen profession through his nomination as the board member of
            a number of IT and other high performing companies. Eventually, he
            founded Norlics Limited which later gave birth to Norlics Digital
            Services where he sat as the MD/CEO until his death.
          </p>
          <p className="text-xl">
            Educationally, he attained a B.Eng in computer science and
            engineering, an M.Sc in computer science. He also attended several
            prestigious management and leadership courses and training both
            locally and internationally including the Harvard Business School,
            Boston, Massachusetts, USA and the Gartner CIO Academy, Sandiego,
            USA. In addition, he travelled widely having visited countries like
            the USA, Canada, South Africa, Singapore and so on.
          </p>
          <p className="text-xl">
            He was a Honorary Senior Member of the CIBN, Fellow Association of
            Enterprise Risk Management Professionals, AERMP, Fellow Institute of
            Cost Management Professionals of Nigeria (ICMPN) among others.
          </p>
          <p className="text-xl">
            He is survived by his wife, many gifted children, aged parents,
            brothers, sisters and other close relatives.
          </p>{" "}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8  md:w-full  bg-[#323232] p-8 md:p-40">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ogaLaz2.png`}
          alt="ogaLas2"
          className=" w-[800px] md:w-[300px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ogaLaz3.svg`}
          alt="ogaLas1"
          className=" w-[800px] md:w-[300px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ogaLaz4.svg`}
          alt="ogaLas1"
          className=" w-[800px] md:w-[300px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ogaLaz5.png`}
          alt="ogaLas1"
          className=" w-[800px] md:w-[300px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ogaLaz6.svg`}
          alt="ogaLas1"
          className=" w-[800px] md:w-[300px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ogaLaz7.svg`}
          alt="ogaLas1"
          className=" w-[800px] md:w-[300px]"
        />
      </div>
      <div className=" flex flex-col gap-8 md:w-full items-center p-10 md:p-40 bg-[#000000]  text-[#FFFFFF]">
        <h2 className="md:text-[50px] font-extrabold">
          LEAVE A NOTE FOR THE FAMILY
        </h2>
        <p className="md:text-[21px] text-center md:w-[940px]">
          Leave a heartfelt message for the family. Express your thoughts, share
          memories, and strengthen bonds with a personal note for the family.
        </p>
        <input
          placeholder="Name "
          className="w-[100%] md:w-[940px] h-[55px] text-[20px] text-[#FFFFFF] bg-[#323232] p-2 outline-none indent-[30px]"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Write a message for the family... "
          className="h-80 w-[100%] md:w-[940px] text-[20px] text-[#FFFFFF] outline-none bg-[#323232] p-9"
        ></textarea>
      </div>
      <div className=" flex flex-col gap-2 bg-[#323232] text-[#FFFFFF] text-[20px] w-[100%] text-center p-8 md:p-36 ">
        <p className="">
          With grief and heavy hearts but complete submission to the will of
          God, the family of Ichie
        </p>
        <p>
          Cornilus Okolie of Enugu-Eke Village, Eke Town, Udi Local Government
          Area of Enugu State,
        </p>
        <p>
          announces the translation to glory of their son, husband, father,
          brother, uncle,
        </p>
        <h2 className=" text-[19px] mt-5 text-xl font-bold">
          Chimaijem Jayden Laz Okolie, for and on behalf of the family.
        </h2>
      </div>
      <div className="bg-[#000000] text-[#aea6a6] p-8 md:p-32 font-extrabold">
        <h2 className="text-4xl"> OBSEQUIES</h2>
        <div className=" flex flex-col gap-8 mt-5 ">
          <div className=" leading-6 ">
            <h4 className="text-xl">MARCH … 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] ">
                Requiem Mass at St. Anthony Catholic Church, Gbaja Surulere
                Lagos.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg">5pm</span>
            </p>
          </div>
          <div className=" leading-6 ">
            <h4 className="text-xl">THURSDAY APRIL 4, 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] ">
                Requiem Mass at St. Paul’s Catholic Church, Eke, Udi LGA Enugu
                State.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg">5pm</span>
            </p>
          </div>
          <div className=" leading-6 ">
            <h4 className="text-xl">FRIDAY APRIL 5, 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] ">
                Funeral (High) Mass at St. Paul’s Catholic Church, Eke, Udi LGS
                Enugu State.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg">11am</span>
            </p>
            <p>
              Interment after funeral mass at his residence – Umuodumegwu,
              Enugu-Eke, Eke Town.
            </p>
          </div>
          <div className=" leading-6 ">
            <h4 className="text-xl">SUNDAY APRIL 7, 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] ">
                Family Thanksgiving/Outing Mass at St. Paul’s Catholic Church,
                Eke Town, Udi LGA Enugu State.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg">9am</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#323232] text-[#FFFFFF] text-center p-28  ">
        <h5 className="text-lg">(for condolences and tributes:)</h5>
        <h2 className="text-xl mt-3">GOD IS A GOOD GOD ALWAYS.</h2>
      </div>
    </>
  );
}

export default App;
