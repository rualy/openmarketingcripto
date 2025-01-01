import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Download = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Here you would typically handle form submission
  };

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              CONTACT US
            </h2>
            <p className="text-xl text-white/60">
              For more information and direct contact, visit our official website where you'll find all the details about our services and communication channels.
            </p>
            <div>
              <a 
                href="https://openmarketing.group/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                  Visit Website
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/20 text-white placeholder:text-white/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/20 text-white placeholder:text-white/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/20 text-white placeholder:text-white/50"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;