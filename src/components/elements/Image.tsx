"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import clsx from "clsx";
import { useState } from "react";

interface ImageProps extends Omit<NextImageProps, "onLoadingComplete"> {
  rounded?: string;
}

const Image = ({ alt, src, className, rounded, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse" : "",
        rounded
      )}
    >
      <NextImage
        className={clsx(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className
        )}
        src={src}
        alt={alt}
        loading="lazy"
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
