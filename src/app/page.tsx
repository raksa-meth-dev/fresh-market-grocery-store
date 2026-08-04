import { Counter } from "@/components/counter";
import { MyHeader } from "@/components/my-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center pt-10">
      <Counter/>
    </div>
  );
}