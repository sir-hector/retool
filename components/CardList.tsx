import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "JavaScript",
    badge: "Coding",
    count: 100,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
  {
    id: 2,
    title: "JavaScript",
    badge: "Coding",
    count: 100,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
  {
    id: 3,
    title: "JavaScript",
    badge: "Coding",
    count: 100,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
];

const latestTransations = [
  {
    id: 1,
    title: "JavaScript",
    badge: "Coding",
    count: 100,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
  {
    id: 2,
    title: "JavaScript",
    badge: "Coding",
    count: 100,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
  {
    id: 3,
    title: "JavaScript",
    badge: "Coding",
    count: 100,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
  },
];

const CardList = ({ title }: { title: string }) => {
  const list = title === "Popular content" ? popularContent : latestTransations;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex flex-row items-center justify-between gap-4 p-4 "
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-0 flex-1">
              <CardTitle className="text-sm font">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
