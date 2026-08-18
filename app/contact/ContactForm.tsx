"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
    honeypot: "", // Bot defense element
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message securely..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission endpoint dropped context.");
      }

      setStatus({ 
        type: "success", 
        message: "Thank you! Your message has been sent successfully. We will get back to you shortly." 
      });
      setFormData({ name: "", email: "", subject: "general", message: "", honeypot: "" });
    } catch (error: any) {
      setStatus({ 
        type: "error", 
        message: error.message || "An unexpected error occurred. Please try again." 
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeader
          badge="Message Us"
          title="Send Us a Message"
          description="Have a question or collaboration proposal? Fill out the form below."
        />

        <div className="max-w-2xl mx-auto mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* SPAM BOT PROTECTION TRAP: Visually hidden field */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-700">Full Name</label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange} placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700">Email Address</label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange} placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-700">Inquiry Department</label>
              <select
                id="subject" name="subject" value={formData.subject} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors cursor-pointer"
              >
                <option value="general">General Inquiries</option>
                <option value="research">Research Collaborations</option>
                <option value="engineering">Engineering &amp; Infrastructure</option>
                <option value="careers">Careers &amp; Open Positions</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-700">Your Message</label>
              <textarea
                id="message" name="message" required rows={5}
                value={formData.message} onChange={handleChange} placeholder="Describe your inquiry in detail..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors resize-none"
              />
            </div>

            {status.type !== "idle" && (
              <div className={`p-4 text-xs font-medium rounded-lg border leading-relaxed ${
                status.type === "loading" ? "bg-gray-50 border-gray-200 text-gray-700" :
                status.type === "success" ? "bg-emerald-50/50 border-emerald-200 text-emerald-800" :
                "bg-rose-50/50 border-rose-200 text-rose-800"
              }`}>
                {status.message}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit" disabled={status.type === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-gray-900 text-white transition-all duration-200 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

