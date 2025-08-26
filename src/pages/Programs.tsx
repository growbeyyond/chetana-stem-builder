import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { useInView } from "@/hooks/use-in-view";
import RobotMascot from "@/components/decor/RobotMascot";
import SectionWave from "@/components/decor/SectionWave";
import { useRef } from "react";
import { 
  GraduationCap, 
  Users, 
  Settings, 
  UserCheck, 
  Zap,
  Clock,
  Award,
  ArrowRight 
} from "lucide-react";

const Programs = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { rootMargin: '0px', once: true });

  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "School Integrated Programs",
      duration: "Full Academic Year",
      grades: "Grades 3-10",
      description: "We integrate robotics into class periods with grade-appropriate modules. Each topic links to specific Maths/Physics concepts.",
      story: {
        title: "Success Story: Grade 7 Water-Level Indicator",
        content: "Grade 7 built a water-level indicator to understand conductivity and circuits — their science fair standout! Students who previously struggled with concepts like circuits and measurements now build robots that solve real problems."
      },
      features: [
        "NEP 2020 aligned curriculum",
        "Teacher training included",
        "Monthly progress assessments",
        "Take-home robotics kits"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "After-School Labs",
      duration: "Weekends",
      grades: "All Ages",
      description: "Evening/weekend sessions — students build and present projects.",
      story: {
        title: "Student Spotlight: Line-Following Robot",
        content: "A Grade 5 student built a line-following robot in a week using IR sensors and PWM speed control. The project sparked their interest in programming and they now mentor younger students."
      },
      features: [
        "Project-based learning",
        "Peer collaboration",
        "Advanced robotics tools",
        "Competition preparation"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "ATL Setup & Support",
      duration: "Ongoing",
      grades: "Institutional",
      description: "We set up Atal Tinkering Labs end-to-end: procurement, safety, documentation, mentorship, competition readiness.",
      story: {
        title: "Impact: Rural School Transformation",
        content: "We set up an ATL at a government school in rural Telangana. Within 6 months, students who had never seen a computer were programming robots. The lab now serves 300+ students."
      },
      features: [
        "Complete lab setup",
        "Equipment procurement",
        "Curriculum customization",
        "Ongoing technical support"
      ]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Teacher Training",
      duration: "2-3 Days Intensive",
      grades: "Educators",
      description: "Hands-on training for teachers with resources and ongoing support. 100+ teachers trained.",
      story: {
        title: "Teacher Transformation",
        content: "Mrs. Sharma, a Math teacher with 15 years of experience, was initially hesitant about technology. After our training, she now runs the most popular robotics club in her school."
      },
      features: [
        "Hands-on workshops",
        "Curriculum integration guidance",
        "Ongoing support network",
        "Certification provided"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "STEM Camps",
      duration: "1-2 Weeks",
      grades: "All Levels",
      description: "Summer/Winter camps — smart cars, obstacle avoiders, solar bots, IoT basics.",
      story: {
        title: "Camp Magic: Summer Innovation Week",
        content: "During our summer camp, 30 students worked in teams to build robots that could sort recyclable waste. They learned motors, sensors, logic, and environmental science all at once."
      },
      features: [
        "Daily hands-on projects",
        "Team-based challenges",
        "Innovation competitions",
        "Portfolio development"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="STEM Programs - Chetana STEM Labs | Robotics Education in Hyderabad"
        description="Explore our comprehensive STEM programs: School integration, after-school labs, ATL setup, and teacher training. Transform Math & Physics learning through robotics for grades 3-10."
        keywords="STEM programs Hyderabad, school robotics integration, after school labs, ATL setup, teacher training robotics, NEP 2020 curriculum"
        path="/programs"
      />
      <StructuredData type="course" data={{
        name: "STEM Education Programs",
        description: "Comprehensive robotics-based STEM education programs for schools, students, and teachers"
      }} />
      
      <div className="min-h-screen py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 animate-spin-slow">
            <div className="w-32 h-32 border-4 border-primary rounded-full"></div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <div className="w-24 h-24 bg-gradient-primary rounded-lg rotate-45"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce">
            <RobotMascot className="w-16 h-16 text-success" />
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
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From school-integrated lessons to after-school labs, ATL setup, and teacher training.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="space-y-12">
            {programs.map((program, index) => {
              const cardRef = useRef<HTMLDivElement>(null);
              const cardInView = useInView(cardRef, { rootMargin: '0px', once: true });
              
              return (
                <Card 
                  key={index} 
                  ref={cardRef}
                  className={`overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 group ${
                    cardInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Program Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <CardHeader className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {program.icon}
                          </div>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                              {program.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="flex items-center gap-1 animate-pulse">
                                <Clock className="h-3 w-3" />
                                {program.duration}
                              </Badge>
                              <Badge variant="outline">{program.grades}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {program.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    {/* Success Story */}
                    <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-4">
                        <Award className="h-5 w-5 text-primary animate-wiggle" />
                        <h4 className="font-semibold text-foreground">{program.story.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {program.story.content}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-12 animate-fade-in hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Want program details for your school?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Transform your students' learning experience with our proven robotics-based approach. 
              Contact us to discuss which program fits your needs best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="animate-pulse-soft hover:scale-110 transition-transform duration-300" 
                asChild
              >
                <Link to="/contact">
                  Request Program Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link to="/curriculum">View Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <SectionWave position="bottom" className="text-accent" />
      </div>
    </>
  );
};

export default Programs;