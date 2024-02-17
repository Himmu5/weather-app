import SearchProvider from "@/context/Provider/SearchProvider";
import Weather from "@/app/weather/Weather";
import { Suspense } from "react";

export default function Home() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchProvider>
        <Weather />
      </SearchProvider>
    </Suspense>
  );
}