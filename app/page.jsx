import Image from "next/image";
import nature from '../assets/nature.jpg';

export default function Home() {
  return (
    <div>
      <Image
        src={nature}
        alt="nature"
        width={500}
        height={500}
      />
      <Image
        src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'
        alt='nature'
        width={500}
        height={500}
      />
    </div>
  );
}
