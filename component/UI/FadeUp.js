import { useInView } from "react-intersection-observer";
import classes from "../../styles/FadeUp.module.css";
const FadeUp = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={inView ? "fadeUp" : "initialFadeUp"}>
      {props.children}
    </div>
  );
};
export default FadeUp;