import { cn } from "@/lib/utils";

interface RobotMascotProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const RobotMascot = ({ className, size = "md", animated = true }: RobotMascotProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };

  return (
    <div className={cn(
      "inline-block",
      sizeClasses[size],
      animated && "animate-float",
      className
    )}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-primary"
        aria-label="Friendly robot mascot"
      >
        {/* Robot head */}
        <rect 
          x="25" y="20" width="50" height="40" 
          rx="8" ry="8" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        
        {/* Eyes */}
        <circle cx="35" cy="35" r="4" fill="white" />
        <circle cx="65" cy="35" r="4" fill="white" />
        <circle cx="35" cy="35" r="2" fill="currentColor" />
        <circle cx="65" cy="35" r="2" fill="currentColor" />
        
        {/* Antenna */}
        <line x1="50" y1="20" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="8" r="3" fill="hsl(var(--success))" className="animate-pulse" />
        
        {/* Mouth */}
        <rect x="45" y="45" width="10" height="6" rx="3" fill="white" />
        
        {/* Body */}
        <rect 
          x="30" y="60" width="40" height="30" 
          rx="6" ry="6" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        
        {/* Arms */}
        <rect x="15" y="65" width="15" height="8" rx="4" fill="currentColor" />
        <rect x="70" y="65" width="15" height="8" rx="4" fill="currentColor" />
        
        {/* Control panel */}
        <circle cx="45" cy="75" r="3" fill="hsl(var(--warning))" />
        <circle cx="55" cy="75" r="3" fill="hsl(var(--info))" />
      </svg>
    </div>
  );
};

export default RobotMascot;