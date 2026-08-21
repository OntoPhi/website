"use client";

import { FormEvent, useState } from "react";

const interestGroups = [
  {
    title: "Engineering",
    items: [
      "Optimization",
      "Runtime Systems",
      "Compiler Technologies",
      "Edge Computing",
      "Platforms",
    ],
  },
  {
    title: "Systems Research",
    items: [
      "Optimization & Compiler Research",
      "Distributed Systems",
      "Performance Engineering",
    ],
  },
  {
    title: "Intelligence Research",
    items: [
      "Computational Neuroscience",
      "Cognitive Neuroscience",
      "Neuroengineering",
      "Cognitive Systems",
    ],
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      role: String(formData.get("role") || "").trim(),
      interests: formData.getAll("interests").map(String),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Unable to submit waitlist form.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setStatus("error");
    }
  }

  /* Success State */
  if (status === "success") {
    return (
      <div className="mx-auto w-full max-w-2xl border border-gray-300 bg-gray-50 px-6 py-10 text-center transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Thank You
        </p>

        <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          You&apos;re on the list.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
          We&apos;ll keep you informed about relevant OntoPhi research,
          engineering work, and releases.
        </p>
      </div>
    );
  }

  /* Form */
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl border border-gray-300 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:p-8"
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-600 dark:focus:border-gray-300"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-600 dark:focus:border-gray-300"
          />
        </div>

        {/* Organization */}
        <div>
          <label
            htmlFor="organization"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Organization / University
            <span className="ml-2 text-xs font-normal text-gray-400">
              Optional
            </span>
          </label>

          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Organization or university"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-600 dark:focus:border-gray-300"
          />
        </div>

        {/* Role */}
        <div>
          <label
            htmlFor="role"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Role
            <span className="ml-2 text-xs font-normal text-gray-400">
              Optional
            </span>
          </label>

          <input
            id="role"
            name="role"
            type="text"
            placeholder="Researcher, Engineer, Student..."
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-600 dark:focus:border-gray-300"
          />
        </div>

        {/* Areas of Interest */}
        <fieldset>
          <legend className="mb-5 text-sm font-medium text-gray-900 dark:text-gray-200">
            Areas of interest
          </legend>

          <div className="space-y-7">
            {interestGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  {group.title}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((interest) => (
                    <label
                      key={interest}
                      className="flex cursor-pointer items-center gap-3 border border-gray-200 px-3 py-3 text-sm text-gray-600 transition-colors hover:border-gray-400 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        className="h-4 w-4"
                      />

                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        {/* Error */}
        {status === "error" && (
          <p className="text-center text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          {status === "loading" ? "Joining..." : "Join the Waitlist"}
        </button>

        {/* Privacy note */}
        <p className="mx-auto max-w-lg text-center text-xs leading-5 text-gray-400 dark:text-gray-600">
          By joining, you agree to receive relevant updates from OntoPhi.
        </p>
      </div>
    </form>
  );
}