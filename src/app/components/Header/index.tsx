import ButtonContact from "./ButtonContact";
import HeaderText from "./HeaderText";
import Logo from "./Logo";
import Container from '../Container/Container'

export default function Home() {
  return (
    <Container>
    <div>
      <div className="flex">
        <Logo />
        <HeaderText />
        <ButtonContact />
      </div>
    </div>
    </Container>
  );
}
