import { PotionType } from "@/types/github";
import { PotionHeader, PotionInfoCard, PotionState } from "./potion-common";
import { CalendarIcon, CodeIcon, GithubIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
interface PotionInfoType {
  potion: PotionType;
}

export default function PotionInfo({ potion }: PotionInfoType) {
  const title = "Potion Details";
  const subTitle = "Discover the magical properties of this enchanted brew ";
  const {
    name,
    owner,
    description,
    stargazers_count,
    forks_count,
    potionEffect,
    topics,
    language,
    updated_at,
    owner: { login, avatar_url },
  } = potion;

  const brewingDifficulty = (forks_count / (stargazers_count || 1)) * 100;

  const potency = Math.min(
    5,
    Math.max(1, Math.floor(stargazers_count / 50000))
  );
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-purple-200">{title}</h1>
        <p className="text-purple-300/70">{subTitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/**Left Column */}
        <div className="md:col-span-1">
          <div className="p-6 rounded-2xl border border-magic-purple/20 h-full">
            <PotionHeader name={name} owner={owner} size="medium" />
            <div className="space-y-4">
              <PotionInfoCard title="Effect">
                <p>{potionEffect}</p>
              </PotionInfoCard>
              <PotionInfoCard title="GitHub stats">
                <PotionState star={stargazers_count} fork={forks_count} />
              </PotionInfoCard>
              <PotionInfoCard title="Language">
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4 mr-2 text-green-400" />
                  <p>{language}</p>
                </div>
              </PotionInfoCard>
              <PotionInfoCard title="Last updated">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 mr-2 text-purple-400" />
                  <p>
                    {new Date(updated_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </PotionInfoCard>
            </div>
          </div>
        </div>
        {/**Right Column */}
        <div className="md:col-span-2">
          <div className="p-6 rounded-2xl border border-magic-purple/20 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-linear-to-r bg-clip-text from-magic-light-purple via-magic-purple to-magic-pink">
                Repository Details
              </h2>
              <a
                href={`https://github.com/${login}/${name}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-magic-pink hover:bg-magic-pink/80 transition-colors duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                View on Github
              </a>
            </div>
            <p className="text-foreground/80 mb-6">{description}</p>
            <div className="grid cols-1 md:grid-cols-2 gap-6 mb-6">
              <PotionInfoCard title="Organization">
                <div className="flex items-center gap-2">
                  <div className="relative overflow-hidden rounded-full ring-2 ring-purple-500/20 h-8 w-8">
                    <Image
                      src={avatar_url}
                      fill
                      alt={login}
                      className="object-cover"
                    />
                  </div>
                </div>
              </PotionInfoCard>
              <PotionInfoCard title="Repository Name">
                <span>{name}</span>
              </PotionInfoCard>
              <div className="mb-6 ">
                <PotionInfoCard title="Topics">
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
                </PotionInfoCard>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-magic-purple/20 ">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-linear-to-r bg-clip-text from-magic-light-purple via-magic-purple to-magic-pink">
              Magical Properties
            </h3>
            <div className="grid cols-1 md:grid-cols-2 gap-6 mb-6">
              <PotionInfoCard title="Brewing Difficulty">
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink rounded-full"
                      style={{ width: `${brewingDifficulty}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm">{brewingDifficulty}</span>
                </div>
              </PotionInfoCard>
              <PotionInfoCard title="Potency">
                <div className="flex">
                  {Array.from({ length: potency }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      <StarIcon fill="currentColor" className="h-5 w-5" />{" "}
                    </span>
                  ))}
                </div>
              </PotionInfoCard>
              <div className="mb-6 ">
                <PotionInfoCard title="Notes from the Alchemist">
                  <p className="italic text-sm">sdfsflkh</p>
                </PotionInfoCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
