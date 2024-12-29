import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Jane Doe",
    designation: "Administrator",
    image: "/images/team/team.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Fred Doe",
    designation: "EDC Teacher",
    image: "/images/team/team.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "John Doe",
    designation: "General Primary Teacher",
    image: "/images/team/team.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Sean Doe",
    designation: "General Primary Teacher",
    image: "/images/team/team.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container" id="team">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Our experienced teachers bring a wealth of knowledge and passion to the classroom. They are dedicated to creating engaging and authentic learning experiences that cater to the unique needs of each student."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
