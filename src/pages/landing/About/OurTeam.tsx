import { teamMembers, type TeamProps } from "./data";

const OurTeam = () => {
    return (
        <section className="py-10 bg-blue-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black lg:text-4xl lg:leading-tight">
                        Meet Our Team
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600">
                        Meet the creative minds behind our success! Our
                        talented team brings together diverse skills and a
                        shared passion for delivering excellence in everything
                        we do.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:mt-8 lg:gap-x-12">
                    {teamMembers.map((elem) => (
                        <TeamCard key={elem.name} member={elem} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamCard = ({ member }: { member: TeamProps }) => {
    return (
        <div className="">
            <img src={member.image} alt={member.name} className="w-full" />
            <div className="py-2 text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <h4 className="text-slate-800">{member.title}</h4>
            </div>
        </div>
    );
};

export default OurTeam;
