import Section from "./common/Section";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import contact from "../assets/mobile.png";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <Section
      title="Contact 📞"
      subtitle="These are the ways you can contact me. Hope to hear from you soon :)">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={contact} alt="contact info" className="h-32 w-32" />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight pt-8">
            I am open open to talking regarding freelancing or full-time
            opportunities. Feel free to cintact me using your preferred medium.
          </p>
        </div>
        <div className="flex text-3xl items-center justify-evenly w-full pt-8">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 hover:text-rose-600 ease-in-out hover:scale-125 "
              key={id}>
              {icon}
            </a>
          ))}
        </div>

        {/* bottom form */}
        <div className="p-8 text-left w-full">
          <form action="https://getform.io/f/nbvkkqxa" method="POST">
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight ">
                  Name
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className=" my-8 py-3 tracking-wider cursor-pointer hover:scale-105 duration-200 px-6 rounded-md bg-gradient-to-r from-rose-600 to-teal-500 uppercase">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
