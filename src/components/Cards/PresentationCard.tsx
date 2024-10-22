import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check } from "lucide-react"


interface TeamMember {
    avatar: string;
    name: string;
    role: string;
    description: string;
    details: string[];
}

interface PresentationCardProps {
    teamInfo: TeamMember;
}

export function PresentationCard({ teamInfo }: PresentationCardProps) {

    const { avatar, name, role, description, details } = teamInfo;

    return (
        <Card className="w-full max-w-[calc(100vw-2rem)] sm:max-w-md mx-auto overflow-hidden shadow-lg">
            <CardHeader className="p-0 bg-primary h-16 sm:h-20"></CardHeader>
            <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mb-4">
                    <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white -mt-12 sm:-mt-16">
                        <AvatarImage src={avatar} alt={`Avatar de ${name}`} />
                        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left mt-2 sm:mt-0">
                        <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>
                        <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                    {description}
                </p>
                <ul className="space-y-2">
                    {details.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm sm:text-base">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
