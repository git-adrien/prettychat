import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Terminal from "../../themes/Terminal/Terminal";
import randomMessage from "../../utils/FakeChat";
import { Message } from "../../types/Messages";
import Will from "../../themes/Will/Will";
import CleanyBear from "../../themes/CleanyBear/CleanyBear";
import BearBoy from "../../themes/BearBoy/BearBoy";
import Willv2 from "../../themes/Willv2/Willv2";
import Zyrophr from "../../themes/Zyrophr/Zyrophr";
import Toham from "../../themes/Toham/Toham";
import Willv3 from "../../themes/Willv3/Willv3";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [theme, setTheme] = useState<string>("Terminal");

  const [demo, setDemo] = useState<Message[]>([]);

  useEffect(() => {
    function pushMessage() {
      const randTiming = Math.floor(Math.random() * (3 - 6 + 1) + 3);
      setDemo((d) => {
        if (d.length >= 50) d.shift();
        return [...d, randomMessage()];
      });
      setTimeout(pushMessage, randTiming * 1000);
    }

    pushMessage();
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-wrapper">
          <div className="logo">
            <svg width="202" height="51" viewBox="0 0 202 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50.0085 46.8V15.6H54.552V17.94H55.2345C55.7545 17.056 56.3135 16.393 56.9115 15.951C57.5095 15.496 58.413 15.2685 59.622 15.2685C61.182 15.2685 62.378 15.7105 63.21 16.5945C64.042 17.4785 64.497 18.954 64.575 21.021C64.601 21.749 64.6205 22.672 64.6335 23.79C64.6595 24.908 64.6725 26.0845 64.6725 27.3195C64.6725 28.5545 64.6595 29.731 64.6335 30.849C64.6205 31.954 64.601 32.864 64.575 33.579C64.497 35.633 64.003 37.1085 63.093 38.0055C62.183 38.8895 60.948 39.3315 59.388 39.3315C58.465 39.3315 57.685 39.13 57.048 38.727C56.411 38.311 55.8065 37.6155 55.2345 36.6405H54.552V46.8H50.0085ZM57.6525 36.036C58.3935 36.036 58.9655 35.867 59.3685 35.529C59.7845 35.191 60.0055 34.6645 60.0315 33.9495C60.0965 32.7015 60.1355 31.499 60.1485 30.342C60.1745 29.185 60.1875 28.0605 60.1875 26.9685C60.1875 25.8635 60.1745 24.7845 60.1485 23.7315C60.1225 22.6655 60.0835 21.5995 60.0315 20.5335C60.0055 19.8705 59.8235 19.3765 59.4855 19.0515C59.1475 18.7265 58.621 18.564 57.906 18.564C57.178 18.564 56.502 18.7395 55.878 19.0905C55.267 19.4285 54.825 19.9095 54.552 20.5335V34.047C54.864 34.775 55.267 35.2885 55.761 35.5875C56.255 35.8865 56.8855 36.036 57.6525 36.036ZM68.2136 39V15.6H72.7961V18.2325H73.6541C73.8491 17.2055 74.2391 16.4905 74.8241 16.0875C75.4221 15.6845 76.2086 15.483 77.1836 15.483C77.4826 15.483 77.7751 15.496 78.0611 15.522C78.3471 15.535 78.6006 15.548 78.8216 15.561V19.0125H77.2421C75.9681 19.0125 74.9606 19.201 74.2196 19.578C73.4916 19.955 73.0171 20.618 72.7961 21.567V39H68.2136ZM87.2614 39.3315C84.7914 39.3315 83.0234 38.857 81.9574 37.908C80.9044 36.959 80.3129 35.4315 80.1829 33.3255C80.1569 32.5455 80.1309 31.629 80.1049 30.576C80.0919 29.51 80.0854 28.405 80.0854 27.261C80.0854 26.117 80.0919 25.025 80.1049 23.985C80.1309 22.945 80.1569 22.061 80.1829 21.333C80.3259 19.149 80.9434 17.5955 82.0354 16.6725C83.1274 15.7365 84.8499 15.2685 87.2029 15.2685C89.5819 15.2685 91.2979 15.73 92.3509 16.653C93.4039 17.576 93.9824 19.0775 94.0864 21.1575C94.0994 21.4695 94.1059 22.0155 94.1059 22.7955C94.1189 23.5625 94.1189 24.427 94.1059 25.389C94.1059 26.351 94.0864 27.2545 94.0474 28.0995H84.6289C84.6289 29.0095 84.6354 29.939 84.6484 30.888C84.6744 31.824 84.7004 32.799 84.7264 33.813C84.7524 34.593 84.9604 35.1455 85.3504 35.4705C85.7404 35.7825 86.3709 35.9385 87.2419 35.9385C88.0869 35.9385 88.6784 35.7825 89.0164 35.4705C89.3674 35.1455 89.5624 34.5865 89.6014 33.7935C89.6274 33.4035 89.6404 32.9225 89.6404 32.3505C89.6534 31.7655 89.6404 31.1025 89.6014 30.3615H94.0474C94.0734 30.6605 94.0929 31.122 94.1059 31.746C94.1189 32.37 94.1124 32.8965 94.0864 33.3255C93.9824 35.4705 93.4039 37.011 92.3509 37.947C91.3109 38.87 89.6144 39.3315 87.2614 39.3315ZM84.6484 24.9015H89.6404C89.6534 24.3165 89.6599 23.738 89.6599 23.166C89.6599 22.581 89.6534 22.0675 89.6404 21.6255C89.6404 21.1835 89.6274 20.8715 89.6014 20.6895C89.5624 19.9355 89.3544 19.409 88.9774 19.11C88.6134 18.798 88.0219 18.642 87.2029 18.642C86.3059 18.642 85.6754 18.811 85.3114 19.149C84.9474 19.474 84.7524 19.9875 84.7264 20.6895C84.7134 21.4045 84.6939 22.113 84.6679 22.815C84.6549 23.517 84.6484 24.2125 84.6484 24.9015ZM105.4 39.3315C102.787 39.3315 100.928 38.87 99.8231 37.947C98.7311 37.024 98.1851 35.464 98.1851 33.267L98.1461 19.0125H96.0596V15.6H98.2631V8.97H102.787V15.6H107.019V19.0125H102.67L102.709 33.7935C102.709 34.6515 102.904 35.23 103.294 35.529C103.684 35.828 104.393 35.9775 105.42 35.9775C105.797 35.9775 106.135 35.971 106.434 35.958C106.746 35.932 107.09 35.9125 107.467 35.8995V39.1365C107.155 39.1885 106.83 39.234 106.492 39.273C106.167 39.312 105.803 39.3315 105.4 39.3315ZM117.892 39.3315C115.279 39.3315 113.42 38.87 112.315 37.947C111.223 37.024 110.677 35.464 110.677 33.267L110.638 19.0125H108.552V15.6H110.755V8.97H115.279V15.6H119.511V19.0125H115.162L115.201 33.7935C115.201 34.6515 115.396 35.23 115.786 35.529C116.176 35.828 116.885 35.9775 117.912 35.9775C118.289 35.9775 118.627 35.971 118.926 35.958C119.238 35.932 119.582 35.9125 119.959 35.8995V39.1365C119.647 39.1885 119.322 39.234 118.984 39.273C118.659 39.312 118.295 39.3315 117.892 39.3315ZM124.173 47.112C123.757 47.112 123.276 47.086 122.73 47.034C122.197 46.982 121.703 46.9235 121.248 46.8585V43.5045C121.599 43.5305 122.067 43.55 122.652 43.563C123.237 43.589 123.731 43.602 124.134 43.602C125.239 43.602 125.993 43.4395 126.396 43.1145C126.812 42.8025 127.085 42.2435 127.215 41.4375L127.625 39H124.836L120.878 15.6H125.519L126.689 26.52L127.742 35.6655H129.048L129.984 26.52L131.096 15.6H135.737L131.759 41.106C131.551 42.419 131.2 43.5175 130.706 44.4015C130.212 45.2985 129.451 45.9745 128.424 46.4295C127.41 46.8845 125.993 47.112 124.173 47.112ZM147.111 24.1605C147.124 23.8225 147.131 23.4455 147.131 23.0295C147.144 22.6005 147.144 22.178 147.131 21.762C147.131 21.346 147.124 20.982 147.111 20.67C147.085 19.955 146.897 19.4415 146.546 19.1295C146.208 18.8045 145.59 18.642 144.693 18.642C143.809 18.642 143.185 18.798 142.821 19.11C142.47 19.422 142.282 19.9485 142.256 20.6895C142.217 21.8855 142.184 23.0295 142.158 24.1215C142.145 25.2005 142.139 26.26 142.139 27.3C142.139 28.34 142.145 29.393 142.158 30.459C142.184 31.525 142.217 32.643 142.256 33.813C142.282 34.593 142.483 35.1455 142.86 35.4705C143.25 35.7955 143.881 35.958 144.752 35.958C145.636 35.958 146.24 35.789 146.565 35.451C146.903 35.1 147.085 34.5475 147.111 33.7935C147.137 33.3255 147.15 32.8315 147.15 32.3115C147.15 31.7785 147.137 31.1285 147.111 30.3615H151.538C151.577 30.6735 151.596 31.135 151.596 31.746C151.609 32.357 151.603 32.8835 151.577 33.3255C151.486 35.4575 150.914 36.9915 149.861 37.9275C148.808 38.8635 147.105 39.3315 144.752 39.3315C142.282 39.3315 140.514 38.8635 139.448 37.9275C138.395 36.9785 137.81 35.4445 137.693 33.3255C137.667 32.5585 137.641 31.642 137.615 30.576C137.602 29.51 137.595 28.405 137.595 27.261C137.595 26.104 137.602 25.0055 137.615 23.9655C137.641 22.9255 137.667 22.048 137.693 21.333C137.836 19.149 138.447 17.5955 139.526 16.6725C140.618 15.7365 142.34 15.2685 144.693 15.2685C147.072 15.2685 148.795 15.73 149.861 16.653C150.927 17.563 151.499 19.0645 151.577 21.1575C151.603 21.6385 151.609 22.1845 151.596 22.7955C151.596 23.4065 151.577 23.8615 151.538 24.1605H147.111ZM155.011 39V7.8H159.555V17.94H160.393C160.9 17.056 161.459 16.393 162.07 15.951C162.694 15.496 163.591 15.2685 164.761 15.2685C166.36 15.2685 167.563 15.717 168.369 16.614C169.175 17.511 169.578 18.98 169.578 21.021L169.636 39H165.093L165.054 20.6505C165.054 19.9225 164.885 19.396 164.547 19.071C164.222 18.733 163.682 18.564 162.928 18.564C162.187 18.564 161.505 18.7395 160.881 19.0905C160.27 19.4285 159.828 19.9095 159.555 20.5335V39H155.011ZM178.005 39.273C176.367 39.273 175.126 38.8765 174.281 38.0835C173.449 37.2775 172.961 35.971 172.818 34.164C172.805 33.891 172.792 33.5855 172.779 33.2475C172.779 32.9095 172.786 32.6105 172.799 32.3505C172.877 31.3495 173.091 30.4785 173.442 29.7375C173.806 28.9965 174.378 28.3335 175.158 27.7485C175.938 27.1635 176.985 26.6045 178.298 26.0715C179 25.7985 179.695 25.545 180.384 25.311C181.086 25.077 181.834 24.8495 182.627 24.6285V20.865C182.627 20.085 182.438 19.5195 182.061 19.1685C181.684 18.8175 181.067 18.642 180.209 18.642C179.468 18.642 178.889 18.7915 178.473 19.0905C178.07 19.3895 177.849 19.903 177.81 20.631C177.797 20.891 177.784 21.2745 177.771 21.7815C177.771 22.2755 177.771 22.7565 177.771 23.2245C177.784 23.6925 177.797 24.011 177.81 24.18H173.462C173.449 23.816 173.436 23.3545 173.423 22.7955C173.41 22.2365 173.41 21.6905 173.423 21.1575C173.488 19.7925 173.741 18.681 174.183 17.823C174.638 16.952 175.36 16.3085 176.348 15.8925C177.349 15.4765 178.688 15.2685 180.365 15.2685C182.068 15.2685 183.4 15.496 184.362 15.951C185.337 16.393 186.02 17.1015 186.41 18.0765C186.813 19.0385 187.014 20.293 187.014 21.84L186.995 39H182.549V36.6405H181.886C181.47 37.5115 180.989 38.168 180.443 38.61C179.91 39.052 179.097 39.273 178.005 39.273ZM179.643 36.036C180.306 36.036 180.891 35.867 181.398 35.529C181.905 35.191 182.295 34.723 182.568 34.125L182.607 27.7875C182.087 27.9305 181.554 28.0995 181.008 28.2945C180.462 28.4765 179.91 28.717 179.351 29.016C178.519 29.419 177.973 29.9065 177.713 30.4785C177.466 31.0375 177.329 31.6615 177.303 32.3505C177.29 32.6885 177.284 32.955 177.284 33.15C177.297 33.345 177.31 33.579 177.323 33.852C177.388 34.541 177.615 35.0805 178.005 35.4705C178.395 35.8475 178.941 36.036 179.643 36.036ZM198.863 39.3315C196.25 39.3315 194.391 38.87 193.286 37.947C192.194 37.024 191.648 35.464 191.648 33.267L191.609 19.0125H189.522V15.6H191.726V8.97H196.25V15.6H200.481V19.0125H196.133L196.172 33.7935C196.172 34.6515 196.367 35.23 196.757 35.529C197.147 35.828 197.855 35.9775 198.882 35.9775C199.259 35.9775 199.597 35.971 199.896 35.958C200.208 35.932 200.553 35.9125 200.93 35.8995V39.1365C200.618 39.1885 200.293 39.234 199.955 39.273C199.63 39.312 199.266 39.3315 198.863 39.3315Z"
                fill="white"
              />
              <path
                d="M3.5 24.7395C3.49908 23.3609 3.77012 21.9956 4.29759 20.7218C4.82507 19.4481 5.59863 18.2909 6.57396 17.3165C7.5493 16.3422 8.70726 15.5698 9.98153 15.0436C11.2558 14.5174 12.6214 14.2477 14 14.25H28C33.7978 14.25 38.5 18.9663 38.5 24.7395V45.75H14C8.20225 45.75 3.5 41.0338 3.5 35.2605V24.7395ZM35 42.25V24.7395C34.9954 22.8854 34.2561 21.1087 32.944 19.7986C31.6319 18.4885 29.8541 17.7518 28 17.75H14C13.081 17.7477 12.1706 17.9268 11.3209 18.2771C10.4713 18.6275 9.69916 19.142 9.04883 19.7914C8.3985 20.4408 7.88275 21.2121 7.53117 22.0612C7.17958 22.9103 6.99908 23.8205 7 24.7395V35.2605C7.00463 37.1146 7.74395 38.8913 9.056 40.2014C10.3681 41.5115 12.1459 42.2482 14 42.25H35ZM24.5 28.25H28V31.75H24.5V28.25ZM14 28.25H17.5V31.75H14V28.25Z"
                fill="#897DF1"
              />
            </svg>
          </div>

          <h1>
            If you want to have a beautiful chat on your <span>stream</span>
          </h1>

          <div className="form">
            <section>
              <label htmlFor="username">Twitch username</label>
              <input
                type="text"
                id="username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              />
            </section>

            <section>
              <label htmlFor="theme">Choose a theme</label>
              <select
                id="theme"
                defaultValue={"Terminal"}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}
              >
                <option value="Terminal">Terminal</option>
                <option value="Will">Will</option>
                <option value="CleanyBear">CleanyBear</option>
                <option value="BearBoy">BearBoy</option>
                <option value="Willv2">Will v2</option>
                <option value="Zyrophr">Zyrophr</option>
                <option value="Toham">Toham</option>
                <option value="Willv3">Willv3</option>
              </select>
            </section>

            <Link to={`/chat?username=${username}&theme=${theme}`}>Create</Link>
          </div>
        </div>
      </div>

      <div className="demo">
        <div className="demo-chat">
          {theme === "Terminal" && <Terminal messages={[...demo]} />}
          {theme === "Will" && <Will messages={[...demo]} />}
          {theme === "CleanyBear" && <CleanyBear messages={[...demo]} />}
          {theme === "BearBoy" && <BearBoy messages={[...demo]} />}
          {theme === "Willv2" && <Willv2 messages={[...demo]} />}
          {theme === "Zyrophr" && <Zyrophr messages={[...demo]} />}
          {theme === "Toham" && <Toham messages={[...demo]} />}
          {theme === "Willv3" && <Willv3 messages={[...demo]} />}
        </div>
      </div>
    </div>
  );
}
