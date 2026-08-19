"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Transmitting securely..." });

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject,
      message: formData.message.trim(),
      honeypot: formData.honeypot.trim()
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server processing exception.");
      }

      setStatus({ type: "success", message: "Inquiry successfully routed to our systems group." });
      setFormData({ name: "", email: "", subject: "general", message: "", honeypot: "" });
    } catch (error: any) {
      setStatus({ type: "error", message: error.message || "Network transmission error." });
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <Container>
        {/* Form Outer Wrapper Card - Upgraded to border-gray-300 */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl shadow-sm transition-all duration-300">
          
          <form onSubmit={handleSubmit} className="space-y-5">
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

            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Prof. Sarah Jenkins"
                className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@institution.org"
                className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200"
              />
            </div>

            {/* Department Selector */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Inquiry Department
              </label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-all duration-200 appearance-none"
                >
                  <option value="general">General Operational Inquiries</option>
                  <option value="research">Research &amp; Labs Collaboration</option>
                  <option value="engineering">Systems Software &amp; Engineering</option>
                  <option value="careers">Careers &amp; Open Positions</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 dark:text-gray-300">
                  <svg className="fill-current h-4 w-4" xmlns="http://w3.org" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Inquiry Description
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Provide a technical summary of your proposal, application track, or inquiry..."
                className="w-full px-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 placeholder-gray-400 dark:placeholder-gray-600 resize-none transition-all duration-200"
              />
            </div>

            {status.type !== "idle" && (
              <div
                className={`p-3.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                  status.type === "loading"
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    : status.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400"
                    : "bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-400"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-100 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-sm mt-2"
            >
              {status.type === "loading" ? "Transmitting..." : "Submit"}
            </button>
          </form>

        </div>
      </Container>
    </section>
  );
}

