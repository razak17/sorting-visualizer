"use client";

import { FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { Select } from "@/components/input/select";
import { Slider } from "@/components/input/slider";
import { useSortingAlgorithmContext } from "@/context/visualizer";
import { SortingAlgorithmType } from "@/lib/types";

export default function Controls() {
  const {
    arrayToSort,
    isSorting,
    setAnimationSpeed,
    animationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();

  const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Quick", value: "quick" },
    { label: "Merge", value: "merge" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };
  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Slider
        isDisabled={isSorting}
        value={animationSpeed}
        handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
      />
      <Select
        options={algorithmOptions}
        defaultValue={selectedAlgorithm}
        onChange={handleSelectChange}
        isDisabled={isSorting}
      />
      <button className="flex items-center justify-center" onClick={handlePlay}>
        {requiresReset ? (
          <RxReset className="text-gray-400 h-8 w-8" />
        ) : (
          <FaPlayCircle className="text-system-green60 h-8 w-8" />
        )}
      </button>
    </div>
  );
}
