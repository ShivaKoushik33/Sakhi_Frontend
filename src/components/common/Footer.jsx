import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import insta from '../../assets/images/insta.svg';
import Mdot from '../../assets/images/Mdot.svg';



export default function Footer() {
  return (
    <footer className="w-full bg-[#FFEED8]">
      <div className="max-w-[1440px] mx-auto">

        {/* Main Footer */}
        <div className="px-[120px] pt-16 pb-12">
          <div className="flex flex-col gap-12">

            {/* Top Row */}
            <div className="flex justify-between">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="The Sakhi Jewels"
                  className="w-[100px] h-auto"
                />

                <span className="font-olivera text-[25px] leading-[1.05] text-[#901CDB]">
                  THE SAKHI <br />
                  JEWELS
                </span>
              </div>
              

              {/* Links */}
              <div className="flex gap-[140px]">

                {/* Quick Links */}
                <div className="flex flex-col gap-5">
                  <h4 className="font-semibold text-[#141416]">Quick Links</h4>
                  <Link to="/cart">My Cart</Link>
                  <Link to="/profile">My Profile</Link>
                  <span>Customer Reviews</span>
                  <span>About The Sakhi Jewels</span>
                </div>

                {/* Info & Policy */}
                <div className="flex flex-col gap-5">
                  <h4 className="font-semibold text-[#141416]">Info & Policy</h4>
                  <span>Shipping & Return</span>
                  <span>Privacy & Policy</span>
                  <span>FAQ's & Support</span>
                  <span>Terms of Service</span>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4 max-w-[280px]">
                  <h4 className="font-semibold text-[#141416]">Contact Us</h4>

                  <p className="text-sm">
                    For any suggestions, queries or complaints please contact us:
                  </p>

                  <div>
                    <p className="font-semibold">The Sakhi Jewels Pvt Ltd.</p>
                    <p>
                      Third Floor, Magnum Vista,<br />
                      Raghuvanahalli, Bangalore 560062
                    </p>
                  </div>

                  <p>Call us: +91 70323 71104</p>
                  <p>Email: support@thesakijewels.com</p>
                  <p className="underline cursor-pointer">Chat with us</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="font-semibold">Follow us on:</span>
              <img src={insta} alt="fb" className="w-8 h-8" />
            </div>

            {/* Copyright */}
            <p className="text-sm uppercase">
              All Copyrights © 2026 Reserved
            </p>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="border-t border-black px-[120px] py-6">
          <div className="flex items-center justify-center gap-3">
            <span className="tracking-widest text-sm">
              AN ORIGINAL DESIGN BY
            </span>

            <img src={Mdot} alt="M Dot Designs" className="h-[26px]" />
            <span className="text-[20px] font-kodchasan text-[#901CDB]">Dot Designs</span>

            <span className="text-[10px] text-[#901CDB]">TM</span>
          </div>
        </div>

      </div>
    </footer>
  );
}