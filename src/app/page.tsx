import { Counter } from "@/components/counter";
import { MyHeader } from "@/components/my-header";
import Image from "next/image";
import { HeroSlider } from "./_components/hero-slider";
import { GroceryFastSelection } from "./_components/grocery-fast-selection";
import { BuyItAgain } from "./_components/buy-it-again";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full overflow-x-clip">
      <HeroSlider/>
      <GroceryFastSelection />
      <BuyItAgain/>
    </div>
  );
}