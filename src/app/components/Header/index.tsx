import ButtonContact from "./ButtonContact";
import HeaderText from "./HeaderText";
import Logo from "./Logo";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Logo />
        <HeaderText />
        <ButtonContact />
      </div>
    </div>
  );
}
