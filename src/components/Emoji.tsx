import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: {
  [key: number]: { src: string; alt: string; boxSize: string };
} = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
