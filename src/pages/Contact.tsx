import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import RobotMascot from "@/components/decor/RobotMascot";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle,
  Users,
  GraduationCap,
  Award,
  Calendar
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    grade: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const { toast } = useToast();

  // Typing animation effect
  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      school: "",
      grade: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Numbers",
      details: ["09705269485", "8074695485"],
      description: "Call us during business hours"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["chetanastemlabs@gmail.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: ["Hyderabad, Telangana"],
      description: "Serving schools across Telangana and beyond"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Sunday: Workshops & Special Programs"
    }
  ];

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We serve students from Grades 3-10, with age-appropriate curriculum designed for each grade level."
    },
    {
      question: "Do you provide teacher training?",
      answer: "Yes! We offer comprehensive 2-3 day intensive training programs for teachers, with ongoing support and certification."
    },
    {
      question: "Can you set up a complete lab at our school?",
      answer: "Absolutely! We provide complete ATL setup including equipment procurement, curriculum customization, and ongoing technical support."
    },
    {
      question: "What makes your approach different?",
      answer: "We integrate robotics directly into Math and Physics curriculum, making abstract concepts tangible through hands-on learning experiences."
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Chetana STEM Labs | Get Started with Robotics Education"
        description="Contact Chetana STEM Labs for STEM education programs in Hyderabad. Call 09705269485 or email chetanastemlabs@gmail.com. Transform your school's Math & Physics curriculum today."
        keywords="contact Chetana STEM Labs, robotics education inquiry, STEM programs enrollment, Hyderabad education contact, school partnership inquiry"
        path="/contact"
      />
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center mb-6">
            <RobotMascot size="lg" className="mr-4" />
            <h1 className={`text-4xl lg:text-5xl font-bold text-foreground transition-all duration-500 ${
              typingComplete ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="relative inline-block overflow-hidden">
                <span className={`inline-block ${typingComplete ? 'animate-typing' : 'w-0'}`}>
                  Get In Touch
                </span>
                <span className={`absolute right-0 w-0.5 h-full bg-primary ${
                  typingComplete ? 'animate-blink' : ''
                }`}></span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Ready to transform your students' learning experience? Let's discuss how 
            Chetana STEM Labs can bring engaging robotics education to your school.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            We typically respond within 24 hours
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-medium relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <CardHeader className="relative">
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              <p className="text-muted-foreground">Tell us about your school, grade levels, and goals — we'll tailor a program for you.</p>
            </CardHeader>
            <CardContent className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">School/Organization</Label>
                    <Input
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      placeholder="School or organization name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade/Level</Label>
                    <Input
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      placeholder="e.g., Grade 6-8 or Teacher"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-soft resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full transition-all duration-300 hover:shadow-medium hover:scale-[1.02]" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                      {info.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground font-medium">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Impact Stats */}
            <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-2xl font-bold text-primary">
                        <AnimatedCounter end={2000} suffix="+" />
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <GraduationCap className="h-4 w-4 text-success" />
                      <span className="text-2xl font-bold text-success">
                        <AnimatedCounter end={50} suffix="+" />
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Schools</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <Award className="h-4 w-4 text-warning" />
                      <span className="text-2xl font-bold text-warning">
                        <AnimatedCounter end={100} suffix="+" />
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Teachers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <Calendar className="h-4 w-4 text-info" />
                      <span className="text-2xl font-bold text-info">
                        <AnimatedCounter end={5} suffix="+" />
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-16 overflow-hidden shadow-medium">
          <CardContent className="p-0">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169492693!2d78.24323219384408!3d17.41262665863069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chetana STEM Labs Location - Hyderabad, Telangana"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Hyderabad, Telangana</p>
                    <p className="text-xs text-muted-foreground">Serving schools across India</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partnerships CTA */}
        <Card className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-medium">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Partner with Us for Robotics Programs
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We work with schools to integrate hands-on learning across grades. 
                Transform your curriculum with engaging STEM education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="animate-pulse-soft hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Book a Call
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Request Brochure
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-semibold text-foreground">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-8">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center bg-success rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-success to-success/80"></div>
          <div className="relative">
            <MessageCircle className="h-16 w-16 text-success-foreground mx-auto mb-4 animate-bounce-gentle" />
            <h2 className="text-2xl font-bold text-success-foreground mb-2">
              Need Immediate Assistance?
            </h2>
            <p className="text-success-foreground/90 mb-6">
              Chat with us on WhatsApp for quick responses to your queries
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:scale-105 transition-all duration-300 shadow-medium"
              asChild
            >
              <a
                href="https://wa.me/919705269485?text=Hi%20Chetana%20STEM%20Labs,%20I'm%20interested%20in%20your%20robotics%20programs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;