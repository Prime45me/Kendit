"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { services } from "@/data/services";
import { Button } from "../ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  details: string;
  honeypot: string; // anti-spam bot trap
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  details: "",
  honeypot: "",
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return undefined;
      case "service":
        if (!value) return "Please select a required service.";
        return undefined;
      case "details":
        if (!value.trim()) return "Please describe your project or enquiry.";
        if (value.trim().length < 10) return "Please provide at least 10 characters of project details.";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const serviceErr = validateField("service", formData.service);
    if (serviceErr) newErrors.service = serviceErr;

    const detailsErr = validateField("details", formData.details);
    if (detailsErr) newErrors.details = detailsErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam bot detected via honeypot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    // Mark all required fields as touched
    setTouched({
      name: true,
      email: true,
      service: true,
      details: true,
    });

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      //reply_to: formData.email.trim(),
      company: formData.company.trim() || "Not specified",
      service: formData.service,
      message: formData.details.trim(),
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback for preview/local dev when keys are not configured yet
        console.warn(
          "EmailJS credentials (NEXT_PUBLIC_EMAILJS_*) are not configured in environment variables. Simulating successful send."
        );
        await new Promise((res) => setTimeout(res, 1200));
      }
      setStatus("success");
      setFormData(initialFormData);
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("EmailJS transmission failed:", err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData(initialFormData);
    setTouched({});
    setErrors({});
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-canvas-elevated/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-surface">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-text-primary">
          Project Enquiry
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Fill in the details below. We review each enquiry personally and reply promptly.
        </p>
      </div>

      {/* Success State */}
      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-kendits-turquoise/30 bg-kendits-turquoise/[0.06] p-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-kendits-turquoise/15 text-kendits-turquoise">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-text-primary">
            Enquiry Received
          </h3>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-md mx-auto">
            Thank you for reaching out. The Kendits studio team will review your project brief
            and respond within 24 to 48 hours.
          </p>
          <div className="mt-6">
            <Button variant="secondary" size="md" onClick={handleReset}>
              Send Another Enquiry
            </Button>
          </div>
        </div>
      )}

      {/* Error State Banner */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-8 rounded-xl border border-rose-500/30 bg-rose-500/[0.08] p-5 text-left"
        >
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold uppercase tracking-wider text-rose-200">
                Transmission Interrupted
              </h4>
              <p className="mt-1 text-xs text-rose-300/90 leading-relaxed">
                We were unable to deliver your enquiry automatically. You can retry below or email
                us directly at{" "}
                <a
                  href="mailto:opokuacheampongkenneth360@gmail.com"
                  className="font-medium underline underline-offset-2 hover:text-white"
                >
                  opokuacheampongkenneth360@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form (Hidden when in success state) */}
      {status !== "success" && (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot anti-spam field */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {/* Row: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-text-secondary mb-2"
              >
                Your Name <span className="text-kendits-turquoise">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Ama Mensah"
                disabled={status === "submitting"}
                className={`w-full rounded-xl bg-white/[0.03] border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kendits-turquoise/50 focus:border-kendits-turquoise disabled:opacity-50 ${
                  errors.name
                    ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1.5 text-xs text-rose-400 font-mono">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-text-secondary mb-2"
              >
                Email Address <span className="text-kendits-turquoise">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. ama@brand.com"
                disabled={status === "submitting"}
                className={`w-full rounded-xl bg-white/[0.03] border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kendits-turquoise/50 focus:border-kendits-turquoise disabled:opacity-50 ${
                  errors.email
                    ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1.5 text-xs text-rose-400 font-mono">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row: Company & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company / Organization */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-text-secondary mb-2"
              >
                Company / Organization <span className="text-text-muted font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Studio / Agency / Brand"
                disabled={status === "submitting"}
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kendits-turquoise/50 focus:border-kendits-turquoise disabled:opacity-50"
              />
            </div>

            {/* Service Selection (Populated strictly from Phase 6 services data) */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-text-secondary mb-2"
              >
                Desired Service <span className="text-kendits-turquoise">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === "submitting"}
                  className={`w-full appearance-none rounded-xl bg-canvas border px-4 py-3 pr-10 text-sm text-text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kendits-turquoise/50 focus:border-kendits-turquoise disabled:opacity-50 ${
                    errors.service
                      ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <option value="" disabled className="bg-canvas text-text-muted">
                    Select a service category
                  </option>
                  {services.map((svc) => (
                    <option key={svc.title} value={svc.title} className="bg-canvas text-text-primary">
                      {svc.title}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-text-muted">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.service && (
                <p id="service-error" role="alert" className="mt-1.5 text-xs text-rose-400 font-mono">
                  {errors.service}
                </p>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-xs font-mono uppercase tracking-[0.15em] text-text-secondary mb-2"
            >
              Project Details <span className="text-kendits-turquoise">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              required
              aria-required="true"
              aria-invalid={!!errors.details}
              aria-describedby={errors.details ? "details-error" : undefined}
              value={formData.details}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell us about the project goals, scope, creative inspirations, and any target milestones..."
              disabled={status === "submitting"}
              className={`w-full rounded-xl bg-white/[0.03] border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kendits-turquoise/50 focus:border-kendits-turquoise disabled:opacity-50 resize-y ${
                errors.details
                  ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                  : "border-white/10 hover:border-white/20"
              }`}
            />
            {errors.details && (
              <p id="details-error" role="alert" className="mt-1.5 text-xs text-rose-400 font-mono">
                {errors.details}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              Fields marked with <span className="text-kendits-turquoise">*</span> are required.
            </p>
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              isLoading={status === "submitting"}
              disabled={status === "submitting"}
              className="min-w-[200px]"
            >
              {status === "submitting" ? "Transmitting..." : "Send Enquiry →"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
