import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  delay: any;
};

const ShowUp: React.FC<Props> = ({ children, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, delay: delay });
  return (
    <div ref={ref} className={inView ? "showUp" : "initialFadeUp"}>
      {children}
    </div>
  );
};
export default ShowUp;
