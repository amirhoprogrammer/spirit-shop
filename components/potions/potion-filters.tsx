import { cn } from "@/lib/utils";
import { getFilterPillColor } from "@/utils";
import { MAGICAL_TYPES } from "@/utils/constants";
import Link from "next/link";

export default function PotionFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      {MAGICAL_TYPES.map(({ id, icon, label }) => (
        <Link
          href={id === "all" ? "/" : `/?type=${id}`}
          key={id}
          className={cn(
            `flex items-center gap-2  to-transparent border border-b-magic-light-purple rounded-full p-2`,
            getFilterPillColor(id)
          )}
        >
          {icon}
          {label}
        </Link>
        // <button key={id} className="flex items-center gap-2">

        // </button>
      ))}
    </div>
  );
}
