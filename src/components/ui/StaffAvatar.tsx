import Image from "next/image";

import { cn } from "@/lib/cn";

export type StaffAvatarProps = {
  className?: string;
  image?: { alt: string; src: string };
  name: string;
};

function getInitials(name: string) {
  return name
    .replace(/^(Dr\.|Dra\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function StaffAvatar({ className, image, name }: StaffAvatarProps) {
  return (
    <div
      className={cn(
        "relative aspect-square size-16 shrink-0 overflow-hidden rounded-full",
        !image &&
          "bg-gradient-to-br from-secondary via-primary-soft to-accent-soft",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="64px"
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="text-primary absolute inset-0 flex items-center justify-center text-base font-bold"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}