import { GithubRepo, MagicalType } from "@/types/github";
import { MAGICAL_TYPES } from "@/utils/constants";

const GITHUB_API_URL = "https://api.github.com";

const POITION_EFFECT = [
  "Grants the power the rapid development",
  "Enhances code clarity and maintanabilty",
  "Boots performance and effeciency",
  "Provides magical debugging abilities",
  "Unlocks the secret of clean architecture",
];

const transformRepoToPotion = (repo: GithubRepo, index: number) => {
  return {
    ...repo,
    topics: repo.topics.slice(0, 3),
    potionEffect: POITION_EFFECT[index % POITION_EFFECT.length],
    magicalType: MAGICAL_TYPES[index % MAGICAL_TYPES.length].id as MagicalType,
  };
};
export async function FetchPotions() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>5000&sort=stars&order=desc`;
  //description
  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  try {
    const response = await fetch(url, {
      headers,
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions`);
    }

    const data = await response.json();
    console.log({ data });
    // return data.items;
    return data.items.map((repo: GithubRepo, index: number) => {
      return transformRepoToPotion(repo, index);
    });
  } catch (error) {
    console.error("Failed to Fetch potion", (error as Error).message);
    return [];
  }
}

export async function fetchPotion(owner: string, repo: string) {
  const url = `${GITHUB_API_URL}/repos/${owner}/${repo}`;
  //description
  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${githubToken}`,
  };
  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions`);
    }

    const data = await response.json();
    console.log("Fetching potion", owner, repo);
    // return data.items;
    return transformRepoToPotion(data, 0);
  } catch (error) {
    console.error("Failed to Fetch potion", (error as Error).message);
    return null;
  }
}
export async function fetchRandomTrendingPotion() {
  const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>7000&sort=stars&order=desc`;
  //description
  const githubToken = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    ...(githubToken && {
      Authorization: `Bearer ${githubToken}`,
    }),
  };
  try {
    const response = await fetch(url, {
      headers,
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch potions`);
    }

    const data = await response.json();
    console.log({ data });
    const randomIndex = Math.floor(Math.random() * data.items.length);
    // return data.items[randomIndex];
    return transformRepoToPotion(data.items[randomIndex], randomIndex);
  } catch (error) {
    console.error("Failed to Fetch potion", (error as Error).message);
    return null;
  }
}
