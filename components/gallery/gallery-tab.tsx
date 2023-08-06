import { Image as ImageType } from "@/types/types";
import { TabsTrigger } from "../ui/tabs";
import Image from "next/image";

interface Props {
  image: ImageType;
}

export default function GalleryTab({ image }: Props) {
  return (
    <TabsTrigger
      value={image.id}
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white ring-2 ring-transparent ring-offset-2 data-[state=active]:ring-black "
    >
      <div>
        <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
          <Image
            fill
            src={image.url}
            alt=""
            className="object-cover object-center"
          />
        </span>
      </div>
    </TabsTrigger>
  );
}
