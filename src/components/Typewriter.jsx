import { useTypewriter } from "./useTypewriter";
import "../components/typewriter.css"

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
  
    return <h4><span>{displayText}<span className="blink">_</span></span></h4>;
  };
  
  export default Typewriter;