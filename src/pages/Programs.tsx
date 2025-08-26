import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
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
  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "School Integrated Programs",
      duration: "Full Academic Year",
      grades: "Grades 3-10",
      description: "Seamlessly integrated robotics curriculum that transforms regular Math and Physics classes into engaging, hands-on experiences.",
      story: {
        title: "Success Story: Greenfield High School",
        content: "After implementing our integrated program, Grade 7 students at Greenfield High showed a 40% improvement in geometry scores. Students who previously struggled with concepts like angles and measurements now build robots that navigate mazes, making abstract concepts tangible."
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
      title: "After-school Labs",
      duration: "Weekends",
      grades: "All Ages",
      description: "Weekend workshops where students dive deeper into robotics projects, building everything from line-following robots to smart home systems.",
      story: {
        title: "Student Spotlight: Arjun's Journey",
        content: "Arjun, a shy 9th grader, joined our weekend labs struggling with physics concepts. After building a solar-powered robot car, he not only understood renewable energy but went on to win the district science fair. Today, he mentors younger students in our program."
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
      description: "Complete Atal Tinkering Lab setup with equipment, curriculum design, and ongoing mentorship support to ensure sustainable STEM education.",
      story: {
        title: "Impact: Rural School Transformation",
        content: "We set up an ATL at a government school in rural Telangana. Within 6 months, students who had never seen a computer were programming robots. The lab now serves 300+ students and has become a model for neighboring schools."
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
      description: "Comprehensive training programs that empower teachers to confidently integrate robotics into their existing curriculum.",
      story: {
        title: "Teacher Transformation: Mrs. Sharma's Experience",
        content: "Mrs. Sharma, a Math teacher with 15 years of experience, was initially hesitant about technology. After our training, she now runs the most popular robotics club in her school and reports that her students' problem-solving skills have dramatically improved."
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
      description: "Intensive holiday camps featuring exciting projects like smart cars, obstacle-avoiding robots, and solar-powered systems.",
      story: {
        title: "Camp Magic: Summer Innovation Week",
        content: "During our summer camp, 30 students worked in teams to build robots that could sort recyclable waste. Not only did they learn about motors and sensors, but they also understood environmental science and developed teamwork skills that their parents still talk about."
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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we're transforming education through innovative robotics programs 
            designed to make Math and Physics engaging, practical, and unforgettable.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Program Info */}
                <div className="lg:col-span-2 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        {program.icon}
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
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
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Success Story */}
                <div className="bg-gradient-card p-6 rounded-lg border border-border">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">{program.story.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.story.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Join Our Programs?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform your students' learning experience with our proven robotics-based approach. 
            Contact us to discuss which program fits your needs best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/curriculum">View Curriculum</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Programs;