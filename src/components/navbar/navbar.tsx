import Controls from "./controls";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="h-[66px] relative flex items-center justify-between w-full">
      <Logo />
      <Controls />
    </div>
  );
}
