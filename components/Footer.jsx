import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineBank,
  AiOutlineCreditCard,
  AiOutlineAlipay,
  AiOutlinePayCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer w-full bg-[#EE6C4D] h-auto p-20 ">
      <div className="sections grid grid-cols-3">
        <div className="payments px-4 col md:col-span-1 col-span-3">
          <div className="font-bold text-white md:text-3xl text-2xl my-5 ">
            Payment Systems
          </div>

          <div className="payment-systems  gap-6 flex justify-center items-center">
            <div className="Bank">
              <a href="#" className="text-xl text-white">
                <AiOutlineBank className="text-3xl" />
              </a>
            </div>

            <div className="Card">
              <a href="#" className="text-xl text-white">
                <AiOutlineCreditCard className="text-3xl" />
              </a>
            </div>
            <div className="AliPay">
              <a href="#" className="text-xl text-white">
                <AiOutlineAlipay className="text-3xl" />
              </a>
            </div>

            <div className="PayCircle">
              <a href="#" className="text-xl text-white">
                <AiOutlinePayCircle className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="subscribe  px-4 col md:col-span-1 col-span-3">
          <div className="font-bold text-white md:text-3xl text-2xl md:my-5 my-10">
            Get Notified
          </div>
          <div className="form-group">
            <form className="form my-5 flex" method="GET">
              <input
                name="email"
                className="input rounded-tl-md rounded-bl-md  p-2 w-[70%]"
                type="text"
                placeholder="Enter your email"
              />
              <button
                name="submit"
                type="submit"
                className="w-[30%] bg-slate-900 text-white hover:bg-slate-700 duration-300 rounded-tr-md rounded-br-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white">
              We only send you, promo codes, vouchers, and other offers our top
              services of Book Karo We only send you, promo codes, vouchers
            </p>
          </div>
        </div>
        <div className="socail col md:col-span-1 px-4 col-span-3">
          <div className="font-bold text-white md:text-3xl text-2xl md:my-5 my-10">
            Keep in touch
          </div>
          <div className="icons flex justify-around px-5">
            <div className="Facebook">
              <a href="#" className="text-4xl text-white">
                <AiOutlineFacebook />
              </a>
            </div>

            <div className="Whatsapp">
              <a href="#" className="text-4xl text-white">
                <AiOutlineWhatsApp />
              </a>
            </div>

            <div className="Twitter">
              <a href="#" className="text-4xl text-white">
                <AiOutlineTwitter />
              </a>
            </div>
            <div className="Instagram">
              <a href="#" className="text-4xl text-white">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          <p className="px-5 mt-5 text-white">
            Our app has all your booking needs covered: Secure payment channels,
            easy 4-step booking process.
          </p>
        </div>
      </div>

      <hr className="mt-10 border w-full" />
      <div className="text-center text-white">
        <div className="other-services my-5">
          <ul className="md:flex block gap-10 justify-center">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <a className="my-10  text-slate-800" href="#">
          Copyright &copy; {new Date().getFullYear()} Book Karo. All Rights
          Reserved
        </a>
      </div>
    </div>
  );
}
