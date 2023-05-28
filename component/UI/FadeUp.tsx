import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
};

const FadeUp: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={inView ? "fadeUp" : "initialFadeUp"}>
      {children}
    </div>
  );
};
export default FadeUp;
