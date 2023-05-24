import { useInView } from "react-intersection-observer";
const ShowUp = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true, delay:props.delay });
  return (
    <div ref={ref} className={inView ? "showUp" : "initialFadeUp"}>
      {props.children}
    </div>
  );
};
export default ShowUp;