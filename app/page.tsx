import Image from "next/image";
import Overview from "./Overview";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Overview />
    </div>
  );
}
