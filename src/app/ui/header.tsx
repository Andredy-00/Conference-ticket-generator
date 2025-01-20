import Image from "next/image"
import logoFull from "../../../public/assets/images/logo-full.svg";

export default function Header() {
  return (
    <header className="text-white capitalize grid text-center place-items-center pt-5">
        <Image
        src={logoFull}
        alt="Coding Conf"
        className="w-40 pb-6"
        />
      <h1 className="text-2xl font-bold p-3">your journey to coding <br /> conf 2025 starts here!</h1>
      <p>secure your spot at next years <br /> biggest coding conference.</p>
    </header>
  );
}