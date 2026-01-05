import { PotionType } from "@/types/github";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

interface PotionGridProps {
  potions: PotionType[];
}
export default function PotionGrid({ potions }: PotionGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {potions.map(
        (
          {
            full_name,
            name,
            description,
            topics,
            owner: { login, avatar_url },
          }: PotionType,
          index: number
        ) => (
          //
          <Card
            className="bg-card rounded-xl overflow-hidden border border-purple-700/30 shadow-lg transition-all hover:shadow-purple-500/20 hover: shadow-purple-500/40  background-image: radial-gradient(circle at 100% 0%,rgba(155,135, 245,0.15)transparent 25% relative group h-full cursor-pointer duration-300"
            key={`${full_name}-${index}`}
          >
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary/50 mr-3 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/50 mr-3 flex items-center justify-content">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-purple-500/20">
                      <Image
                        src={avatar_url}
                        fill
                        alt={login}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p className="text-xs text-muted-foreground">{login}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
              <div className="gap-2 flex items-center">
                {topics.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}
