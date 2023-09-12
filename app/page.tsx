"use client";
import { MouseEventHandler, useState } from "react";
import { RandomImage } from "./components/RandomImage";

const random = (): number => Math.floor(Math.random() * 123) + 1;

const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

type ImageItem = {
  id: string;
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    const newImage: ImageItem = {
      id: generateUniqueId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImage]);
  };

  return (
    <main className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }: ImageItem) => (
        <div key={id} className="p-4">
          <RandomImage image={url} />
        </div>
      ))}
    </main>
  );
}
