import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Zap, 
  Cpu, 
  Calculator, 
  Microscope,
  Rocket,
  Target,
  CheckCircle
} from "lucide-react";

const Curriculum = () => {
  const curriculumData = [
    {
      gradeRange: "3-5",
      title: "Foundation Years",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Building curiosity and basic understanding",
      modules: [
        {
          title: "Hello, Robots!",
          duration: "4 weeks",
          topics: [
            "What are robots and where do we see them",
            "Basic shapes and patterns using robot movements",
            "Understanding directions: forward, backward, left, right"
          ],
          project: "Build a drawing robot that creates geometric shapes",
          mathConcepts: ["Basic geometry", "Patterns", "Measurements"],
          physicsConcepts: ["Motion", "Direction", "Simple machines"]
        },
        {
          title: "Sensors & Senses",
          duration: "4 weeks", 
          topics: [
            "How robots 'see' and 'feel' the world",
            "Light sensors and color detection",
            "Touch sensors and obstacle detection"
          ],
          project: "Create a robot pet that responds to touch and light",
          mathConcepts: ["Counting", "Comparison", "Data collection"],
          physicsConcepts: ["Light", "Sound", "Touch sensitivity"]
        },
        {
          title: "Moving & Grooving",
          duration: "4 weeks",
          topics: [
            "Motors and how things move",
            "Speed control and timing",
            "Creating simple dances and movements"
          ],
          project: "Design a dancing robot for a class performance",
          mathConcepts: ["Time", "Speed", "Sequences"],
          physicsConcepts: ["Motion", "Energy", "Forces"]
        }
      ]
    },
    {
      gradeRange: "6-8",
      title: "Exploration Years", 
      icon: <Zap className="h-6 w-6" />,
      description: "Connecting concepts with hands-on discovery",
      modules: [
        {
          title: "Circuits & Connections",
          duration: "5 weeks",
          topics: [
            "Understanding electrical circuits through robot wiring",
            "Voltage, current, and resistance in simple terms",
            "LED patterns and electronic displays"
          ],
          project: "Build a traffic light system with sensors",
          mathConcepts: ["Basic algebra", "Ratios", "Graphs"],
          physicsConcepts: ["Electricity", "Circuits", "Resistance"]
        },
        {
          title: "Programming Logic",
          duration: "6 weeks",
          topics: [
            "Introduction to coding with visual blocks",
            "If-then logic and decision making",
            "Loops and repetition in programming"
          ],
          project: "Create a smart home automation system",
          mathConcepts: ["Logic", "Sequences", "Problem-solving"],
          physicsConcepts: ["Automation", "Control systems", "Feedback"]
        },
        {
          title: "Forces in Motion",
          duration: "5 weeks",
          topics: [
            "Understanding friction through robot movement",
            "Gravity and balance in robot design",
            "Momentum and energy in collisions"
          ],
          project: "Design a robot that can climb ramps and navigate obstacles",
          mathConcepts: ["Angles", "Trigonometry basics", "Measurements"],
          physicsConcepts: ["Forces", "Motion", "Energy transfer"]
        }
      ]
    },
    {
      gradeRange: "9-10",
      title: "Innovation Years",
      icon: <Cpu className="h-6 w-6" />,
      description: "Advanced concepts and real-world applications",
      modules: [
        {
          title: "Advanced Robotics",
          duration: "6 weeks",
          topics: [
            "Microcontrollers and embedded programming",
            "Sensor integration and data analysis",
            "Wireless communication between robots"
          ],
          project: "Build a swarm of communicating robots",
          mathConcepts: ["Advanced algebra", "Statistics", "Calculus intro"],
          physicsConcepts: ["Electronics", "Waves", "Communication systems"]
        },
        {
          title: "AI & Machine Learning Basics",
          duration: "6 weeks",
          topics: [
            "Pattern recognition in robot behavior",
            "Simple machine learning algorithms",
            "Computer vision with cameras"
          ],
          project: "Create a robot that can recognize and sort objects",
          mathConcepts: ["Probability", "Data analysis", "Algorithms"],
          physicsConcepts: ["Optics", "Digital systems", "Signal processing"]
        },
        {
          title: "Sustainable Technology",
          duration: "6 weeks",
          topics: [
            "Solar power and renewable energy in robotics",
            "Environmental monitoring systems",
            "Green technology applications"
          ],
          project: "Design an environmental monitoring robot powered by renewable energy",
          mathConcepts: ["Optimization", "Modeling", "Efficiency calculations"],
          physicsConcepts: ["Renewable energy", "Environmental science", "Sustainability"]
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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Curriculum
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A carefully designed progression that transforms abstract Math and Physics concepts 
            into tangible, engaging learning experiences through robotics.
          </p>
        </div>

        {/* Grade-wise Curriculum */}
        <Tabs defaultValue="3-5" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {curriculumData.map((grade) => (
              <TabsTrigger 
                key={grade.gradeRange} 
                value={grade.gradeRange}
                className="flex items-center space-x-2"
              >
                {grade.icon}
                <span>Grades {grade.gradeRange}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {curriculumData.map((grade) => (
            <TabsContent key={grade.gradeRange} value={grade.gradeRange} className="space-y-8">
              {/* Grade Overview */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    {grade.icon}
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
                {grade.modules.map((module, index) => (
                  <Card key={index} className="overflow-hidden shadow-soft">
                    <CardHeader className="bg-gradient-card">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-foreground">{module.title}</CardTitle>
                        <Badge variant="outline">{module.duration}</Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Topics Covered
                            </h4>
                            <ul className="space-y-2">
                              {module.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center">
                              <Rocket className="h-4 w-4 mr-2 text-primary" />
                              Final Project
                            </h4>
                            <p className="text-sm text-muted-foreground">{module.project}</p>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <Calculator className="h-4 w-4 mr-2 text-primary" />
                              Math Concepts
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {module.mathConcepts.map((concept, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {concept}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <Microscope className="h-4 w-4 mr-2 text-primary" />
                              Physics Concepts
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {module.physicsConcepts.map((concept, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {concept}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Learning Outcomes */}
        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Learning Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What students achieve through our robotics-integrated curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;