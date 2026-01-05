import { cn } from "@/lib/utils";
import { formatNumber } from "@/utils/constants";
import { PackageIcon, StarIcon } from "lucide-react";
import Image from "next/image";
interface PotionHeaderType {
  name: string;
  owner: { login: string; avatar_url: string };
  size?: "small" | "medium";
}

interface PotionInfoCardType {
  title: string;
  children?: React.ReactNode;
}

interface PotionStateType {
  star: number;
  fork: number;
  classNames?: string;
}

export const PotionHeader = ({
  name,
  owner: { avatar_url, login },
  size = "small",
}: PotionHeaderType) => {
  return (
    <div
      className={cn(
        "flex items-center mb-2",
        size === "medium" ? "mb-6" : "mb-2"
      )}
    >
      <div
        className={cn(
          "rounded-full bg-secondary/50 mr-3 flex items-center justify-center",
          size === "medium" ? "w-12 h-12" : "w-10 h-10"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-full ring-2 ring-purple-500/20",
            size === "medium" ? "w-12 h-12" : "w-10 h-10"
          )}
        >
          <Image src={avatar_url} fill alt={login} className="object-cover" />
        </div>
      </div>
      <div>
        <h3
          className={cn(
            "font-bold",
            size === "medium" ? "text-lg" : "text-base"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "text-xs text-muted-foreground",
            size === "medium" ? "text-xl" : "text-xs"
          )}
        >
          {login}
        </p>
      </div>
    </div>
  );
};
export const PotionInfoCard = ({ title, children }: PotionInfoCardType) => {
  return (
    <div className="p-4 rounded-lg bg-background/40 border border-magic-purple/10">
      <h4 className="text-sm font-medium text-magic-light-purple mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
};
export const PotionState = ({ star, fork, classNames }: PotionStateType) => {
  return (
    <div className={cn("flex items-center justify-between", classNames)}>
      <div className="flex items-center gap-1">
        <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
        <span>{formatNumber(star)}</span>
      </div>
      <div className="flex items-center gap-1">
        <PackageIcon className="w-3.5 h-3.5 text-blue-400" />
        <span>{formatNumber(fork)}</span>
      </div>
    </div>
  );
};
