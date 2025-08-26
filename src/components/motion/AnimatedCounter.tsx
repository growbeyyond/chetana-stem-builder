import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ 
  end, 
  start = 0, 
  duration = 2000, 
  decimals = 0, 
  delay = 0,
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const count = useCountUp({ end, start, duration, decimals, delay }, isInView);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;