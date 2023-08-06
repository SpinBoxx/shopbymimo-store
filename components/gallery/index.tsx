"use client";

import { Image as ImageType } from "@/types/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import GalleryTab from "./gallery-tab";

interface Props {
  images: ImageType[];
}

export default function Gallery({ images }: Props) {
  return (
    <Tabs className="flex flex-col-reverse" defaultValue={images.at(0)?.id}>
      <div className="mx-auto mt-6 hidden w-full max-w-xl sm:block lg:max-w-none">
        <TabsList className="grid w-full grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabsList>
      </div>
      {images.map((image) => (
        <TabsContent
          key={image.id}
          className="aspect-square w-full"
          value={image.id}
        >
          <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>

    // <Tabs className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
    //   <TabsContent value="image">
    //     <div className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
    //       <Image
    //         alt=""
    //         src={image.url}
    //         className="object-cover object-center"
    //       />
    //     </div>
    //     <span className="text-2xl">OKaii</span>
    //   </TabsContent>
    //   <TabsList className="grid w-full grid-cols-2">
    //     <TabsTrigger value="image">Account</TabsTrigger>
    //     <TabsTrigger value="password">Password</TabsTrigger>
    //   </TabsList>
    // </Tabs>
  );
}
