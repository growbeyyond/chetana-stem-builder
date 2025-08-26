import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { useInView } from "@/hooks/use-in-view";
import RobotMascot from "@/components/decor/RobotMascot";
import SectionWave from "@/components/decor/SectionWave";
import { useRef } from "react";
import { 
  BookOpen, 
  Zap, 
  Cpu, 
  Calculator, 
  Microscope,
  Rocket,
  Target,
  CheckCircle,
  Download
} from "lucide-react";

const Curriculum = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const curriculumData = [
    {
      gradeRange: "3-5",
      title: "Pre-Tinker (Foundation Years)",
      icon: <BookOpen className="h-6 w-6" />,
      description: "LEDs, batteries, motors, simple sensors (LDR), gears, measurement",
      modules: [
        {
          title: "Hello, Circuits!",
          duration: "4 weeks",
          topics: [
            "LEDs and batteries - making light",
            "Simple circuits with switches",
            "Basic motor control and direction"
          ],
          project: "Night lamp that turns on automatically in darkness",
          mathConcepts: ["Counting", "Basic addition", "Patterns"],
          physicsConcepts: ["Light", "Electricity", "Simple circuits"]
        },
        {
          title: "Gears & Movement",
          duration: "4 weeks", 
          topics: [
            "How gears work - big vs small",
            "Motors and making things move",
            "Measuring distances and angles"
          ],
          project: "Build a mini fan with speed control",
          mathConcepts: ["Fractions (gear ratios)", "Measurement", "Geometry"],
          physicsConcepts: ["Motion", "Forces", "Simple machines"]
        },
        {
          title: "Sensors & Senses",
          duration: "4 weeks",
          topics: [
            "Light sensors - robot eyes",
            "Touch sensors - robot touch",
            "Making robots react to environment"
          ],
          project: "Paper circuit greeting card with LED patterns",
          mathConcepts: ["Time sequences", "If-then logic", "Data collection"],
          physicsConcepts: ["Sensors", "Light detection", "Touch sensitivity"]
        }
      ]
    },
    {
      gradeRange: "6-8",
      title: "Programming Basics (Exploration Years)", 
      icon: <Zap className="h-6 w-6" />,
      description: "Scratch logic, Arduino setup, digital/analog I/O, sensor reads",
      modules: [
        {
          title: "Code Your First Robot",
          duration: "5 weeks",
          topics: [
            "Introduction to Scratch programming",
            "Arduino basics - the robot brain",
            "Digital vs analog - understanding signals"
          ],
          project: "Smart street light with automatic on/off",
          mathConcepts: ["Basic algebra", "Variables", "Logic operations"],
          physicsConcepts: ["Digital signals", "Sensors", "Automation"]
        },
        {
          title: "Sensors & Data",
          duration: "6 weeks",
          topics: [
            "Ultrasonic distance measurement",
            "Reading sensor data and graphing",
            "If-then-else programming logic"
          ],
          project: "Distance alarm system for parking",
          mathConcepts: ["Graphs", "Data analysis", "Coordinate system"],
          physicsConcepts: ["Sound waves", "Distance measurement", "Data processing"]
        },
        {
          title: "Motors & Control",
          duration: "5 weeks",
          topics: [
            "PWM - controlling motor speed",
            "H-bridge motor drivers",
            "Programming movement patterns"
          ],
          project: "Traffic signal timer with countdown display",
          mathConcepts: ["Percentages (PWM)", "Timing", "Speed calculations"],
          physicsConcepts: ["Motor control", "Speed", "Timing systems"]
        }
      ]
    },
    {
      gradeRange: "9-10",
      title: "Build Your Robot (Innovation Years)",
      icon: <Cpu className="h-6 w-6" />,
      description: "Chassis, H-bridge motor driver, IR/Ultrasonic, PWM, complete robot projects",
      modules: [
        {
          title: "Robot Chassis & Assembly",
          duration: "6 weeks",
          topics: [
            "Mechanical design and chassis building",
            "Motor mounting and wheel alignment",
            "Wiring and component placement"
          ],
          project: "Line follower robot with IR sensors",
          mathConcepts: ["Geometry", "Angles", "Trigonometry basics"],
          physicsConcepts: ["Mechanical design", "Balance", "Friction"]
        },
        {
          title: "Advanced Sensors",
          duration: "6 weeks",
          topics: [
            "IR sensors for line following",
            "Ultrasonic for obstacle detection",
            "Combining multiple sensor inputs"
          ],
          project: "Obstacle avoider robot with path planning",
          mathConcepts: ["Coordinate geometry", "Algorithms", "Optimization"],
          physicsConcepts: ["Infrared light", "Ultrasonic waves", "Sensor fusion"]
        },
        {
          title: "Competition Robotics",
          duration: "6 weeks",
          topics: [
            "Advanced programming techniques",
            "Robot communication and control",
            "Competition strategies and optimization"
          ],
          project: "Maze-solving robot for competition",
          mathConcepts: ["Graph theory", "Path finding", "Statistics"],
          physicsConcepts: ["Robot navigation", "Optimization", "System integration"]
        }
      ]
    }
  ];

  const outcomes = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Problem-Solving Skills",
      description: "Students develop systematic approaches to breaking down complex problems"
    },
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "Math Confidence", 
      description: "Abstract mathematical concepts become concrete through hands-on application"
    },
    {
      icon: <Microscope className="h-6 w-6 text-primary" />,
      title: "Scientific Thinking",
      description: "Understanding of physics principles through experimentation and observation"
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Innovation Mindset",
      description: "Creativity and innovation fostered through open-ended robotics projects"
    }
  ];

  return (
    <>
      <SEO 
        title="STEM Curriculum - Chetana STEM Labs | Grade-wise Robotics Learning Path"
        description="Discover our comprehensive NEP 2020 aligned STEM curriculum. Grade-wise robotics programs from foundation (3-5) to advanced (9-10). Transform Math & Physics learning in Hyderabad."
        keywords="STEM curriculum grades 3-10, NEP 2020 robotics curriculum, grade wise robotics learning, Math Physics robotics curriculum, Hyderabad STEM education"
        path="/curriculum"
      />
      <StructuredData type="course" data={{
        name: "Grade-wise STEM Curriculum",
        description: "Comprehensive robotics-based curriculum covering Math and Physics concepts for grades 3-10"
      }} />
      
      <div className="min-h-screen py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 animate-bounce">
            <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-1/3 left-10 animate-spin-slow">
            <Cpu className="w-12 h-12 text-success" />
          </div>
          <div className="absolute bottom-1/3 right-20">
            <Calculator className="w-16 h-16 text-warning animate-wiggle" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <RobotMascot className="w-20 h-20 text-info animate-float" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Curriculum
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Grade-wise modules mapped to outcomes — Grades 3–10.
            </p>
          </div>

          {/* Grade-wise Curriculum */}
          <Tabs defaultValue="3-5" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {curriculumData.map((grade) => (
                <TabsTrigger 
                  key={grade.gradeRange} 
                  value={grade.gradeRange}
                  className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <div className="animate-pulse">
                    {grade.icon}
                  </div>
                  <span>Grades {grade.gradeRange}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {curriculumData.map((grade, gradeIndex) => (
              <TabsContent key={grade.gradeRange} value={grade.gradeRange} className="space-y-8">
                {/* Grade Overview */}
                <Card className="bg-gradient-card animate-fade-in hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <div className="animate-bounce">
                        {grade.icon}
                      </div>
                      <div>
                        <span>{grade.title}</span>
                        <p className="text-base font-normal text-muted-foreground mt-1">
                          {grade.description}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>

                {/* Modules */}
                <div className="grid gap-6">
                  {grade.modules.map((module, index) => {
                    const { ref: moduleRef, isInView: moduleInView } = useInView({ 
                      threshold: 0.1, 
                      triggerOnce: true 
                    });
                    
                    return (
                      <Card 
                        key={index} 
                        ref={moduleRef}
                        className={`overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 group ${
                          moduleInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <CardHeader className="bg-gradient-card">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                              {module.title}
                            </CardTitle>
                            <Badge variant="outline" className="animate-pulse">{module.duration}</Badge>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                  <BookOpen className="h-4 w-4 mr-2 text-primary animate-pulse" />
                                  Topics Covered
                                </h4>
                                <ul className="space-y-2">
                                  {module.topics.map((topic, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0 animate-pulse" />
                                      <span className="text-sm text-muted-foreground">{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-colors duration-300">
                                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                                  <Rocket className="h-4 w-4 mr-2 text-primary animate-wiggle" />
                                  Final Project
                                </h4>
                                <p className="text-sm text-muted-foreground">{module.project}</p>
                              </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                  <Calculator className="h-4 w-4 mr-2 text-primary animate-bounce" />
                                  Math Concepts
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {module.mathConcepts.map((concept, idx) => (
                                    <Badge 
                                      key={idx} 
                                      variant="secondary" 
                                      className="text-xs hover:scale-110 transition-transform duration-300" 
                                      style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                      {concept}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                  <Microscope className="h-4 w-4 mr-2 text-primary animate-pulse" />
                                  Physics Concepts
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {module.physicsConcepts.map((concept, idx) => (
                                    <Badge 
                                      key={idx} 
                                      variant="outline" 
                                      className="text-xs hover:scale-110 transition-transform duration-300"
                                      style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                      {concept}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Learning Outcomes */}
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 mb-16 hover:shadow-glow transition-all duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Learning Outcomes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What students achieve through our robotics-integrated curriculum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => {
                const { ref: outcomeRef, isInView: outcomeInView } = useInView({ 
                  threshold: 0.1, 
                  triggerOnce: true 
                });
                
                return (
                  <div 
                    key={index} 
                    ref={outcomeRef}
                    className={`text-center space-y-4 hover:scale-105 transition-all duration-500 ${
                      outcomeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto hover:rotate-12 transition-transform duration-300">
                      {outcome.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-12 animate-fade-in hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Want the Complete Curriculum?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Download our detailed curriculum guide with lesson plans, project ideas, and assessment rubrics.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:scale-110 transition-all duration-300 animate-pulse-soft">
              <Download className="h-5 w-5" />
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
        
        <SectionWave position="bottom" className="text-accent" />
      </div>
    </>
  );
};

export default Curriculum;