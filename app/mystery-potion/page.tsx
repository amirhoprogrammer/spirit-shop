import PotionInfo from "@/components/potions/potion-info";
import { fetchRandomTrendingPotion } from "@/lib/github";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Spirit Shop",
  description: "Open Source Spirit Shop - Discover magical potions brewed",
  // metadataBase: new URL(ORIGIN_URL),
  // alternates: {
  //   canonical: ORIGIN_URL,
  // },
};

// export const generateMetaData = async () = {
//   const potion = await fetchRandomTrendingPotion();
//   return{
//     title: potion?.name
//     description: potion?.description,
//   }
// }

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();
  if (!potion) {
    notFound();
  }
  return <PotionInfo potion={potion} />;
}
function async() {
  throw new Error("Function not implemented.");
}
