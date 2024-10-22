type Coffee = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image_url: string;
    grind_option: string[];
}

type CoffeeResponse = {
    coffee: Coffee;
}

type TeamInfo = {
    avatar: string;
    name: string;
    role: string;
    description: string;
    details: string[];
}