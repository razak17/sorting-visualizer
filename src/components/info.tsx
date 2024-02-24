import { useSortingAlgorithmContext } from "@/context/visualizer";
import { sortingAlgorithmsData } from "@/lib/utils";

export default function Info() {
  const { selectedAlgorithm } = useSortingAlgorithmContext();
  return (
    <div className="hidden sm:flex absolute top-[120%] left-0 w-full">
      <div className="flex w-full text-gray-400 p-4 rounded border border-system-purple20 bg-system-purple80 bg-opacity-10 gap-6">
        <div className="flex flex-col items-start justify-start w-3/4">
          <h3 className="text-lg">
            {sortingAlgorithmsData[selectedAlgorithm].title}
          </h3>
          <p className="text-sm text-grey-500 pt-2">
            {sortingAlgorithmsData[selectedAlgorithm].description}
          </p>
        </div>

        <div className="flex flex-col items-start justify-start w-1/4 gap-2">
          <h3 className="text-lg">Time Complexity</h3>
          <div className="flex flex-col gap-2">
            <p className="flex w-full text-sm text-gray-500">
              <span className="w-28">Worst Case:</span>
              <span>{sortingAlgorithmsData[selectedAlgorithm].worstCase}</span>
            </p>
            <p className="flex w-full text-sm text-gray-500">
              <span className="w-28">Average Case:</span>
              <span>
                {sortingAlgorithmsData[selectedAlgorithm].averageCase}
              </span>
            </p>
            <p className="flex w-full text-sm text-gray-500">
              <span className="w-28">Best Case:</span>
              <span>{sortingAlgorithmsData[selectedAlgorithm].bestCase}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
