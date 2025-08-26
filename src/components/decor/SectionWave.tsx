import { cn } from "@/lib/utils";

interface SectionWaveProps {
  position?: "top" | "bottom";
  className?: string;
  color?: string;
}

const SectionWave = ({ position = "bottom", className, color = "hsl(var(--background))" }: SectionWaveProps) => {
  const isTop = position === "top";
  
  return (
    <div className={cn(
      "absolute left-0 w-full overflow-hidden leading-none",
      isTop ? "top-0" : "bottom-0",
      className
    )}>
      <svg 
        className={cn("relative block w-full", isTop ? "rotate-180" : "")}
        width="100%" 
        height="60" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SectionWave;