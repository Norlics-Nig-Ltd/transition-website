import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    let formIsValid = true;

    if (!name.trim()) {
      setErrorName("Please enter your name");
      formIsValid = false;
      setTimeout(() => {
        setErrorName("");
      }, 5000); // Clear error after 3 seconds
    } else {
      setErrorName("");
    }

    if (!message.trim()) {
      setErrorMessage("Please enter your message");
      formIsValid = false;
      setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Clear error after 3 seconds
    } else {
      setErrorMessage("");
    }

    if (name && message === 200) {
      setSuccessMessage("Your Message has been sent");
    }

    if (formIsValid) {
      try {
        const response = await axios.post(
          "https://ksm-o008.onrender.com/api/v1/create-message",
          { name, message }
        );

        // console.log("Message sent successfully:", response.data);
        // setSuccessMessage("Message sent successfully");
        if (response.status === 200) {
          setSuccessMessage("Your message has been successfully submitted");
          setName("");
          setMessage("");

          setTimeout(() => {
            setSuccessMessage("");
            setIsSubmitting(false); // Set form submission to false after success
          }, 5000);
        }
      } catch (error) {
        console.error("Error sending mesaage:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row-reverse  bg-[#000000] ">
        <div className="order-1 md:order-2 w-full lg:w-[50%]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ogaLas1.png`}
            alt="ogaLas1"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:p-20 text-[#FFFFFF] w-full lg:w-[50%] order-1 lg:order-2  sm:order-2">
          <h1 className="font-extrabold text-5xl">
            Chief Sir Lazurus Ikechukwu Okolie (KSM)
          </h1>
          <div className="flex flex-col gap-5 text-lg">
            <div className="text-xl">
              <h3>MD/CEO AT NORLIC NIGERIA LTD</h3>
              <h3>(Ugochinyere 1 of Eke)</h3>
            </div>
            <p className="sm:text-2xl lg:text-xl">
              He was an information communication and Technology Professional
              and an exemplary leader with diverse experience in enterprise
              information systems, having acquired certifications such as CISA,
              CISM, CGEIT, & CRISCISACA, to mention a few.  In his past roles as
              the CTO/CIO, he successfully designed, deployed and managed
              enterprise IT solutions for a number of banks in Nigeria. He took
              an early retirement from banking as a General Manager and
              continued in his chosen profession through his nomination as the
              board member of a number of IT and other high performing
              companies. Eventually, he founded Norlics Limited which later gave
              birth to Norlics Digital Services where he sat as the MD/CEO until
              his death.
            </p>
            <p className="sm:text-2xl lg:text-xl">
              Educationally, he attained a B.Eng in computer science and
              engineering, an M.Sc in computer science. He also attended several
              prestigious management and leadership courses and training both
              locally and internationally including the Harvard Business School,
              Boston, Massachusetts, USA and the Gartner CIO Academy, Sandiego,
              USA. In addition, he travelled widely having visited countries
              like the USA, Canada, South Africa, Singapore and so on.
            </p>
            <p className="sm:text-2xl lg:text-xl">
              He was a Honorary Senior Member of the CIBN, Fellow Association of
              Enterprise Risk Management Professionals, AERMP, Fellow Institute
              of Cost Management Professionals of Nigeria (ICMPN) among others.
            </p>
            <p className="sm:text-2xl lg:text-xl">
              He is survived by his wife, many gifted children, aged parents,
              brothers, sisters and other close relatives.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:gap-10  bg-[#323232] sm:w-[100%]  ">
        <div className="mt-8 ">
          <h2 className="text-[#FFFFFF] text-3xl lg:text-5xl sm:text-5xl font-extrabold ml-9 lg:ml-16">
            Career
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-8  lg:w-full  p-8 md:p-10 ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/career1.png`}
              alt="ogaLas2"
              className=" w-[800px] lg:w-[350px] "
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/career2.png`}
              alt="career3"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/career3.png`}
              alt="career4"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Oga&Akunna.png`}
              alt="ogaLas6"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/career5.png`}
              alt="career5"
              className=" w-[800px] lg:w-[350px]"
            />
          </div>
        </div>

        <div className=" ">
          <h2 className="text-[#FFFFFF] text-3xl lg:text-5xl sm:text-5xl font-extrabold  ml-9 lg:ml-16">
            Marriage/Family
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-8  lg:w-full  p-8 md:p-10">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage1.png`}
              alt="marriage1"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage2.png`}
              alt="ogaLas3"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage3.png`}
              alt="ogaLas4"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage4.png`}
              alt="ogaLas5"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage5.png`}
              alt="ogaLas6"
              className=" w-[800px] lg:w-[350px]"
            />
          </div>
        </div>

        <div className=" ">
          {/* <h2 className="text-[#FFFFFF] text-5xl font-extrabold ml-10">
            Marriage/Family
          </h2> */}
          <div className="flex flex-col lg:flex-row justify-center gap-8  lg:w-full  p-8 md:p-10">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage6.png`}
              alt="ogaLas7"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage7.png`}
              alt="ogaLas3"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage8.png`}
              alt="ogaLas4"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Marriage9.png`}
              alt="Marriage9"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/marriage10.png`}
              alt="ogaLas6"
              className=" w-[800px] lg:w-[350px]"
            />
          </div>
        </div>

        <div className=" ">
          <h2 className="text-[#FFFFFF] text-3xl lg:text-5xl sm:text-5xl font-extrabold ml-9 lg:ml-20">
            Religion
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-8  lg:w-full  p-8 md:p-10">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/religion1.png`}
              alt="ogaLas2"
              className=" w-[800px] lg:w-[600px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/religion2.png`}
              alt="ogaLas4"
              className=" w-[800px] lg:w-[600px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/religion3.png`}
              alt="ogaLas5"
              className=" w-[800px] lg:w-[600px]"
            />
          </div>
        </div>

        <div className=" ">
          <h2 className="text-[#FFFFFF] text-3xl lg:text-5xl sm:text-5xl font-extrabold ml-9 lg:ml-16">
            Traditional
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-8  lg:w-full  p-8 md:p-10">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/traditional1.png`}
              alt="ogaLas2"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/traditional2.png`}
              alt="ogaLas3"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/traditional3.png`}
              alt="ogaLas4"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/traditional4.png`}
              alt="ogaLas5"
              className=" w-[800px] lg:w-[350px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/traditional5.png`}
              alt="ogaLas6"
              className=" w-[800px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
      {/* /////////////implement///////// */}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-8 lg:w-full items-center p-10 lg:p-40 bg-[#000000]  text-[#FFFFFF] "
      >
        <h2 className="lg:text-[50px] sm:text-[40px] font-extrabold">
          LEAVE A NOTE FOR THE FAMILY
        </h2>
        <p className="lg:text-[21px] sm:text-[30px] text-center lg:w-[940px]">
          Leave a heartfelt message for the family. Express your thoughts, share
          memories, and strengthen bonds with a personal note for the family.
        </p>
        {successMessage && (
          <p className="text-green-500 text-left">{successMessage}</p>
        )}
        {/* {errorName && <p className="text-red-500 text-">{errorName}</p>} */}
        <div className="error-message text-start">
          {errorName && <p className="text-red-500 items-start">{errorName}</p>}
        </div>

        <input
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name "
          className="w-[100%] lg:w-[940px] h-[55px] text-[20px] text-[#FFFFFF] bg-[#323232] p-2 outline-none indent-[30px]"
        />
        {errorMessage && (
          <p className="text-red-500 text-left">{errorMessage}</p>
        )}
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Write a message for the family... "
          className="h-80 w-[100%] lg:w-[940px] text-[20px] text-[#FFFFFF] outline-none bg-[#323232] p-9"
        ></textarea>
        <div className="w-[100%] md:w-64 bg-white ">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[100%] md:w-60 h-14 text-[#000000] font-semibold"
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/comments");
            }}
            className="cursor-pointer sm:text-base"
          >
            View Other Tributes
          </button>
        </div>
      </form>
      {/* /////////////implement///////// */}

      <div className=" flex flex-col gap-2 bg-[#323232] text-[#FFFFFF] text-[20px] sm:text-[30px] w-[100%] text-center p-8 lg:p-36 sm:px-32 ">
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
        <h2 className=" text-[19px] sm:text-[22px] mt-5 text-xl font-bold">
          Chimaijem Jayden Laz Okolie, for and on behalf of the family.
        </h2>
      </div>
      <div className="bg-[#000000] text-[#aea6a6] p-8 sm:p-16 lg:p-32 font-extrabold">
        <h2 className="text-4xl"> OBSEQUIES</h2>
        <div className=" flex flex-col gap-8 mt-5 ">
          <div className=" leading-6 ">
            <h4 className="text-xl ">MARCH … 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] sm:text-[20px] ">
                Requiem Mass at St. Anthony Catholic Church, Gbaja Surulere
                Lagos.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg sm:text-[20px]">5pm</span>
            </p>
          </div>
          <div className=" leading-6 ">
            <h4 className="text-xl">THURSDAY APRIL 4, 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] sm:text-[20px] ">
                Requiem Mass at St. Paul’s Catholic Church, Eke, Udi LGA Enugu
                State.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg sm:text-[20px]">5pm</span>
            </p>
          </div>
          <div className=" leading-6 ">
            <h4 className="text-xl">FRIDAY APRIL 5, 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] sm:text-[20px] ">
                Funeral (High) Mass at St. Paul’s Catholic Church, Eke, Udi LGS
                Enugu State.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg sm:text-[20px]">
                11am
              </span>
            </p>
            <p className="sm:text-[20px]">
              Interment after funeral mass at his residence – Umuodumegwu,
              Enugu-Eke, Eke Town.
            </p>
          </div>
          <div className=" leading-6 ">
            <h4 className="text-xl">SUNDAY APRIL 7, 2024  </h4>
            <p>
              <span className="text-xl"> ADDRESS: {""}</span>
              <span className="text-[#b2a4a4] sm:text-[20px]  ">
                Family Thanksgiving/Outing Mass at St. Paul’s Catholic Church,
                Eke Town, Udi LGA Enugu State.
              </span>
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-xl">TIME:</span>{" "}
              <span className="text-[#b2a4a4] text-lg sm:text-[20px]">9am</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#323232] text-[#FFFFFF] text-center p-28  ">
        <h5 className="text-lg sm:text-[20px]">
          (for condolences and tributes:)
        </h5>
        <h2 className="text-xl mt-3 sm:text-[20px]">
          GOD IS A GOOD GOD ALWAYS.
        </h2>
      </div>
    </>
  );
}

export default Home;
