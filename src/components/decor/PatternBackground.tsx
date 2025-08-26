import { cn } from "@/lib/utils";

interface PatternBackgroundProps {
  variant?: "dots" | "grid" | "circuit";
  className?: string;
  children: React.ReactNode;
}

const PatternBackground = ({ variant = "dots", className, children }: PatternBackgroundProps) => {
  const patterns = {
    dots: "radial-gradient(circle, hsl(var(--primary) / 0.1) 1px, transparent 1px)",
    grid: "linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)",
    circuit: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"circuit\" patternUnits=\"userSpaceOnUse\" width=\"100\" height=\"100\"><path d=\"M20,20 L20,80 L80,80\" stroke=\"hsl(238 76% 58% / 0.1)\" stroke-width=\"1\" fill=\"none\"/><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"hsl(238 76% 58% / 0.2)\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"hsl(238 76% 58% / 0.2)\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23circuit)\"/></svg>')"
  };

  const backgroundSizes = {
    dots: "20px 20px",
    grid: "20px 20px, 20px 20px",
    circuit: "100px 100px"
  };

  return (
    <div 
      className={cn("relative", className)}
      style={{
        backgroundImage: patterns[variant],
        backgroundSize: backgroundSizes[variant],
        backgroundRepeat: "repeat"
      }}
    >
      {children}
    </div>
  );
};

export default PatternBackground;