import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Gadget Galaxy"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
            link="https://gadget-galaxy-a19ea.web.app/"
          />
          <ProjectsCard
            title="Event Management"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
            link="https://assignment-9-ee090.web.app/"
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
