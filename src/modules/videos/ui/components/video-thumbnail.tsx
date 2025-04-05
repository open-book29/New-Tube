import { formatDuration } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { THUMBNAIL_FALLBACK } from "../../constant";

interface VideoThumbnailProps {
  imageUrl?: string | null;
  title: string;
  previewUrl?: string | null;
  duration: number;
}

export const VideoThumbnail = ({
  imageUrl,
  previewUrl,
  title,
  duration,
}: VideoThumbnailProps) => {
  return (
    <div className="relative group">
      {/* Thumbnail wrapper */}

      <div className="relative w-full overflow-hidden rounded-xl aspect-video transition-all">
        <Image
          src={imageUrl || THUMBNAIL_FALLBACK}
          alt={title}
          fill
          className="h-full w-full object-cover group-hover:opacity-0"
        />
        <Image
          unoptimized={!!previewUrl}
          src={previewUrl || THUMBNAIL_FALLBACK}
          alt={title}
          fill
          className="h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      {/* Duration box */}
      <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black text-white text-sm font-medium">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
