import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LiaUserSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./Dashboard.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <div>
      <div className="first-section">
        <div className="section">
          <div className="content">
            <div className="border">
              <div className="svggg">
                <p>
                  <IoLocationOutline className="sva" />
                  NEW YORK (JFK)
                </p>
                <p>
                  <FaArrowRightArrowLeft />
                </p>
                <p>
                  <IoLocationOutline className="sva" />
                  MUMBAI (BOM)
                </p>
              </div>
            </div>
            <div className="border">
              <p>
                <SlCalender className="sva" />
                29 JULY 2019{" "}
              </p>
            </div>
            <div className="border">
              <p>
                <LiaUserSolid className="sva" />2 TRAVELLER WITH{" "}
              </p>
            </div>
            <div className="border">
              <p>
                <a
                  className={`link ${activeIndex === 0 ? "active" : ""}`}
                  onClick={() => handleClick(0)}
                >
                  <span>ONE WAY</span>
                </a>
              </p>
              <p>
                <a
                  className={`link ${activeIndex === 1 ? "active" : ""}`}
                  onClick={() => handleClick(1)}
                >
                  <span>ROUND TRIP</span>
                </a>
              </p>
              <p>
                <a
                  className={`link ${activeIndex === 2 ? "active" : ""}`}
                  onClick={() => handleClick(2)}
                >
                  <span>MULTI CITY</span>
                </a>
              </p>
            </div>

            <div className="border">
              <p>
                <FaArrowRightArrowLeft className="sva" />
                FIRST CLASS
              </p>
            </div>
            <div className="border">
              <p>SEARCH </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h1>RESULT (25)</h1>
          <h5>FILTER</h5>
          <h5>
            TICKET OF CLASS <IoIosArrowDown />
          </h5>
        </div>

        <div className="content">
          <div className="second-section">
            <table>
              <thead>
                <tr>
                  <div className="second-section"></div>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="emirate.png" className="image" alt="Emirates" />
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>JFK</p5>
                    <p>13:00</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p2>EMIRATES</p2>
                    <p>11H 20M</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>BOM</p5>
                    <p>14:20</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p6>$5,000</p6>
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img
                      src="qatar_airways-logo.png"
                      className="image"
                      alt="Emirates"
                    />
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>JFK</p5>
                    <p>13:00</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p2> QATAR AIRWAYS</p2>
                    <p>11H 20M</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>BOM</p5>
                    <p>14:20</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p6>$5,000</p6>
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="lufthansa.png" className="image" alt="Emirates" />
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5> JFK</p5>
                    <p>13:00</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p2> LUFTHANSA</p2>
                    <p>11H 20M</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>BOM</p5>
                    <p>14:20</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p6>$5,000</p6>
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="emirate.png" className="image" alt="Emirates" />
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>JFK</p5>
                    <p>13:00</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p2>EMIRATES</p2>
                    <p>11H 20M</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    <p5>BOM</p5>
                    <p>14:20</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    <p6>$5,000</p6>
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <table className="tablee">
            <div className="flexsss">
              <p className="flexsss1">FROM</p>
              <p className="flexsss2">TO</p>
            </div>

            <div className="flexss">
              <p className="flexss1">JFK</p>
              <p className="flexss2"> NON STOP</p>
              <p className="flexss3">BOM</p>
            </div>

            <div class="image-container">
              <img src="world-map.png" class="world-map" alt="world-map" />

              <span class="airport-label plane">
                <i class="fas fa-plane"></i>
              </span>

              <span class="airport-label bom">NEW YORK</span>
              <span class="airport-label jfk">MUMBAI</span>
            </div>

            <div className="flexs">
              <button>NON STOP</button>

              <button>ONE STOP</button>

              <button>MORE STOP</button>
            </div>

            <div class="links">
              <p>PRICE</p>
            </div>

            <div className="range-slider">
              <div class="range-slider">
                <input type="range" min="10" max="100" value="25" id="toggle1" />
                <input type="range" min="10" max="100" value="75" id="toggle2" />
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
