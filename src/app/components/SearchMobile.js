// Componets
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Location */}
          <LocationSelection />
          {/* Date */}
          <DateSelection />
          {/* Hours */}
          <HoursSelection />
          {/* Button */}
          <div className="flex items-center px-6">
            <button className="btn btn-accent btn-sm w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
