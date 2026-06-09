'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import SparklesCore from '@/components/ui/sparkles';
import { Label } from '@/components/ui/label';
import { Check, Loader2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUs1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          service: 'General Inquiry'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-[var(--bg-main)]">
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, var(--primary-500), transparent 70%)`,
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, var(--primary-500), transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            {/* Left: Form */}
            <div className="relative p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex w-full gap-2"
              >
                <h2 className="mb-4 bg-gradient-to-r from-[var(--text-main)] to-[var(--text-muted)] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Get in
                </h2>

                <span className="relative z-10 w-full text-4xl font-bold tracking-tight italic text-[var(--primary-500)] md:text-5xl">
                  Touch
                </span>

                <SparklesCore
                  id="contact-sparkles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={500}
                  className="absolute inset-0 top-0 h-24 w-full"
                  particleColor="var(--primary-500)"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 text-[var(--text-muted)] text-lg"
              >
                Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.
              </motion.p>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* Error Display */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{error}</span>
                  </motion.div>
                )}

                {/* Success Display */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700"
                  >
                    <Check className="h-4 w-4" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="I need help with..."
                    required
                    className="h-32 resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-b from-[var(--primary-500)] to-[var(--primary-700)] text-white shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-5 w-5" />
                        Message Sent!
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden pr-8"
            >
              <article className="relative mx-auto h-[400px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-700)] p-8 text-white md:h-[500px]">
                <div className="relative z-20 space-y-6">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Let's Create Something Amazing Together
                  </h3>
                  <p className="text-lg opacity-90">
                    We're here to help bring your ideas to life with our expert digital solutions.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">info@idealsolutionsne.co.uk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <a href="tel:+447855175014" className="text-sm hover:underline transition">+44 7855 175014</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm">Newcastle Upon Tyne, UK</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Globe */}
                <div className="absolute -right-16 -bottom-16 z-10 mx-auto flex h-full w-full max-w-[350px] items-center justify-center transition-all duration-700 hover:scale-110 md:-right-20 md:-bottom-20 md:max-w-[450px]">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse">
                      <div className="h-full w-full rounded-full bg-white opacity-20 blur-xl"></div>
                    </div>
                    <Earth
                      scale={1.3}
                      baseColor={[0.07, 0.31, 0.64]}     // primary-500
                      markerColor={[0.18, 0.62, 0.31]}   // secondary-500
                      glowColor={[0.23, 0.51, 0.94]}     // primary-600
                      className="relative z-10"
                    />
                  </div>
                </div>
              </article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
