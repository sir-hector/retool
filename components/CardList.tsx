import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
      <div className="flex flex-column gap-2">
        {list.map((item) => (
          <Card key={item.id}>
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardFooter>{item.count}</CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
