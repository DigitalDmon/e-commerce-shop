import { PresentationCard } from "../Cards/PresentationCard";

const teamMembers: TeamInfo[] =
    [
        {
            avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFGqFqfGPAWWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718340402051?e=1735171200&v=beta&t=1jJRcPC5RDpL5EhN0tjgnDn8vWA0glNGaTDpoECVpn4",
            name: "Uzziel Aparicio",
            role: "Front-End & Back-End Developer | Software Developer",
            description: "I am committed to continuos learning and improving my technological skills, as well as developing innovative solutions that positively impact users.",
            details: [
                "Experienced Front-End & Back-End Developer",
                "Database Management Expert",
                "Teamwork Skills"
            ]
        },
        {
            avatar: "https://media.licdn.com/dms/image/v2/D5635AQFxm5ih14lV8Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1729191943023?e=1730178000&v=beta&t=nloU3t7ObpQnhaAIJVz-H9vyoRSY9kYWzPAkFeil3wY",
            name: "Eladio Gonzalez",
            role: "Full-stack Developer",
            description: "Responsibility, honesty, and determination are three qualities that describe me as a person. Software development is one of many tech areas that drive me to continuously learn and improve my knowledge.",
            details: [
                "Personal experience in Mobile App Development",
                "Experienced in Web Development",
                "Version Control, Frameworks, and RESTful APIs"
            ]
        },
        {
            avatar: "https://media.licdn.com/dms/image/v2/D4E03AQF0nWE3FbGJDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724392182248?e=1735171200&v=beta&t=vicO4Cw1kzY0cT0gva0CBDCLiw80JxExOAEQ9mIkh6s",
            name: "Richard Zhang",
            role: "Web & Mobile Developer | Designer UI/UX ",
            description: "Passionate software developer dedicated to creating innovative solutions that enhance user experiences. With a solid foundation in web development, I've honed my skills, along with practical experience. I am also proficient in mobile app development for Android.",
            details: [
                "Experienced Front-End Developer",
                "Responsive Interfaces Expert",
                "Experienced in scalable and reusable components"
            ]
        },
    ];

export default function PresentationCardPanel() {

    return (
        <>
            {teamMembers.map((member, index) => (
                <PresentationCard
                    key={index}
                    teamInfo={member}
                />
            ))}
        </>
    )
}