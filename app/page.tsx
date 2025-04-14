import Image from "next/image";
import Header from "./components/Header";
import Workshop from "./workshop/page";
import Pipeline from "./pipeline/page";
import Settings from "./settings/page";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Workshop/> */}
      {/* <Pipeline/> */}
      <Settings/>
    </div>
  );
}
