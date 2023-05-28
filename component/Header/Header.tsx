import { useMedia } from "react-use";
import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";

const Header: React.FC = () => {
  const isWidth = useMedia("(min-width:800px)",false);
  return <>{isWidth ? <PcHeader /> : <MobileHeader />}</>;
};

export default Header;
