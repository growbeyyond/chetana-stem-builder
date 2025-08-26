import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle
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
  const { toast } = useToast();

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
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your students' learning experience? Let's discuss how 
            Chetana STEM Labs can bring engaging robotics education to your school.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
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
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-16 overflow-hidden shadow-medium">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-card flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Hyderabad, Telangana</h3>
                <p className="text-muted-foreground">Serving schools across India</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center bg-success rounded-2xl p-8">
          <MessageCircle className="h-16 w-16 text-success-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-success-foreground mb-2">
            Need Immediate Assistance?
          </h2>
          <p className="text-success-foreground/90 mb-6">
            Chat with us on WhatsApp for quick responses to your queries
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            asChild
          >
            <a
              href="https://wa.me/919705269485"
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
    </>
  );
};

export default Contact;