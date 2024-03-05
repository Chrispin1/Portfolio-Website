import { FaTwitter, FaFacebook, FaLinkedin,  } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Hero = () => {
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
    <section className="min-h-screen flex flex-col justify-start text-center items-center p-5">
      <h2 className="font-bold text-rose-600 uppercase text-5xl">
        Tony Stark
      </h2>
      <h3 className="py-2 text-2xl">Software Engineer</h3>
      <p className="max-w-xl text-gray-500 font-light">
        Hello <span className="animate-pulse text-3xl">👋</span>, Welcome to my
        site. I am a freelance software engineer. I love to work on web dev,
        Mobile dev & automation projects.
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-10 lg:py-12 w-full md:w-1/3 text-3xl ">
        {SOCIAL.map(({ id, link, icon }) => (
          <a className="hover:scale-125 transition-1s  hover:text-rose-600 ease-in-out duration-300" href={link} key={id} target="_blank" rel="noopener noreferer">
            {icon}
          </a>,
        ))}
        </div>

        {/* avatar and resume */}
        <div >
          <img src={avatar} alt="avatar" className="h-60 w-60 md:h-72 md:w-72 object-cover object-top bg-gradient-to-b from-rose-600 pt-5 rounded-xl " />
          <a className="flex items-center justify-center mt-12 bg-gradient-to-r from-rose-600 to-teal-500 py-3 rounded-lg" href="/src/assets//yash-resume.pdf" download={true}>Resume</a>
        </div>

    </section>
  );
};

export default Hero;
