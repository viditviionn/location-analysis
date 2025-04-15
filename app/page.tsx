
import LocationAnalysis from "./location-analysis/page";
import Overview from "./overview/Overview";
import Pipeline from "./pipeline/page";
import Workshop from "./workshop/page";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto">
     <LocationAnalysis/>
    </div>
  );
}
