import ceo from "@/assets/images/team/MrsJoanaOfori.jpg";
import ben from "@/assets/images/team/Benkors.jpg";
import ben2 from "@/assets/images/team/amoasi-benjamin.jpg";

export type TeamProps = {
    title: string;
    name: string;
    image: string;
}

export const teamMembers: TeamProps[] = [
    {
        title: "Chief Executive Officer (CEO)",
        name: "Mrs Joana Ofori",
        image: ceo,
    },
    {
        title: "General Manager",
        name: "Benjamin Ayensu Korsah",
        image: ben,
    },

    {
        title: "Director",
        name: "Amoasi Benjamin",
        image: ben2,
    }
]