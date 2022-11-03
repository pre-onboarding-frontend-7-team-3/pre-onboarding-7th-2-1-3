import Link from "next/link";
import Icon from "../Icon";
import { BackButtonWrapper } from "./BackButton.style";

function BackButton() {
  return (
    <Link href="/">
      <BackButtonWrapper>
        <Icon icon="Arrow" />
      </BackButtonWrapper>
    </Link>
  );
}

export default BackButton;
