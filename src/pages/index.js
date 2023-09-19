import ElevateCraft from "@/components/ElevateCraft";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import pictures from '../assets/Images/pictures.png'
import EarnNow from "@/components/EarnNow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <ElevateCraft />
        <JoinUs />
        <Image src={pictures} className='pictures' />
        <EarnNow/>
      </main>
    </>
  );
}
