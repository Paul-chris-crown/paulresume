import Image from "next/image";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

type ProfileAvatarProps = {
  className?: string;
  imageClassName?: string;
};

export function ProfileAvatar({ className, imageClassName }: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-muted shadow-lg ring-1 ring-border/60",
        className
      )}
    >
      <Image
        src={DATA.avatarUrl}
        alt={`${DATA.name} headshot`}
        fill
        priority
        sizes="(max-width: 768px) 112px, 144px"
        className={cn("object-cover object-[center_22%] scale-[1.02]", imageClassName)}
      />
    </div>
  );
}
