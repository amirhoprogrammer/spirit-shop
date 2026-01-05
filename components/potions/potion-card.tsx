import { getMagicalTypeIcon } from "@/utils";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { PackageIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { PotionType } from "@/types/github";
import { formatNumber } from "@/utils/constants";

export const PotionCard = ({
  full_name,
  name,
  description,
  topics,
  owner: { login, avatar_url },
  magicalType,
  potionEffect,
  stargazers_count,
  forks_count,
}: PotionType) => {
  return (
    <Card
      className="bg-card rounded-xl overflow-hidden border border-purple-700/30 shadow-lg transition-all hover:shadow-purple-500/20 hover: shadow-purple-500/40  background-image: radial-gradient(circle at 100% 0%,rgba(155,135, 245,0.15)transparent 25% relative group h-full cursor-pointer duration-300"
      key={`${full_name}-${name}`}
    >
      <div className="absolute right-4 top-4 z-10">
        {getMagicalTypeIcon(magicalType)}
      </div>
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
      <CardContent className="p-6 pt-3">
        <p className="text-sm text-foreground/70 mt-3 mb-4 line-clamp-3 h-(3.75rem) overflow-hidden text-ellipsis ">
          {description}
        </p>
        <div className="mb-4">
          <p className="text-sm flex items-center gap-1.5 mb-1 text-magic-light-purple">
            <span>✨</span>
            Effect: {potionEffect}
          </p>
          <div className="flex items-center text-muted-foreground text-xs justify-between mt-4">
            <div className="flex items-center gap-1">
              <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
              <span>{formatNumber(stargazers_count)}</span>
            </div>
            <div className="flex items-center gap-1">
              <PackageIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>{formatNumber(forks_count)}</span>
            </div>
          </div>
        </div>
        <div className="gap-2 flex flex-wrap ">
          {topics.map((topic, index) => (
            // <span key={index}>{tag}</span>
            <Badge
              key={index}
              className="text-xs px-2 py-1 bg-magic-purple/80 text-white/80 hover:bg-magic-blue/25"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
