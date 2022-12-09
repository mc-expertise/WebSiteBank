import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            key={footerlink.key}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              {footerlink.title}
            </h4>
            <ul>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary
                  cursor-pointer ${
                    index === footerlink.links.length - 1 ? "mb-0" : "mb-4"
                  }`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div
      className="w-full flex justify-between items-center md:flex-row flex-col pt-6 
    border-t-[1px] border-t-[#3F3E45] ">
      <p className="font-poppins font-normal  text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-wrap md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a href={social.link} key={social.id} target="_blank">
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer 
          ${index === socialMedia.length - 1 ? "mr-0" : "mr-6"} `}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
