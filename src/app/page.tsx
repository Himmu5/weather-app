import SearchProvider from "@/context/Provider/SearchProvider";
import Weather from "@/pages/Weather";

export default function Home() {

  return (
    <div>
      <SearchProvider>
        <Weather />
      </SearchProvider>
    </div>
  );
}