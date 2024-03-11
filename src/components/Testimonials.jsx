import Section from "./common/Section";
import avatar from "../assets/avatar.png";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ducimus officia corporis",
    },
    {
      id: 2,
      image: avatar,
      name: "Rahul",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ducimus officia corporis",
    },
    {
      id: 3,
      image: avatar,
      name: "Robert",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ducimus officia corporis",
    },
  ];
  return (
    <Section
      title="Testimonials"
      subtitle="This is what other clients have to say about me. I accept clients from all around the world.">
      <div>
        {TESTIMONIALS.map(({ id, image, name, comment }) => (
          <div
            key={id}
            className="flex p-4 justify-center items-center shadow-md dark:shadow-gray-300 rounded-xl">
            <div className="w-1/3">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex-flex-col justify-center items-center gap-2 p-2">
              <h3 className="text-xl font-semi-bold">{name}</h3>
              <p className="text-sm font-extralight ">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
