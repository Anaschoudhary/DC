import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import CharsList from "@/components/CharsList";
import MovieList from "@/components/MovieList";
import ComicList from "@/components/ComicList";
import Divider from "@/components/core/Divider";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";
import InsiderSection from "@/components/InsiderSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <ComicList />
      {/* <MovieList/> */}
      <CharsList />
      <LatestNews/>
      <InsiderSection/>
      <Footer/>
      
    </>
  );
}
