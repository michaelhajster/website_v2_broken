'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().min(2, "Firmenname muss mindestens 2 Zeichen lang sein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

const inputClasses = "w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.24] hover:border-black/[.16] dark:hover:border-white/[.45] bg-white/[.03] dark:bg-white/[.08] focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors text-foreground dark:text-white placeholder:text-foreground/70 dark:placeholder:text-white/70";

// Define the form data type based on your schema
type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contactSubmissions'), {
        ...data,
        timestamp: new Date().toISOString(),
      });
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className={inputClasses}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-Mail
          </label>
          <input
            {...register("email")}
            type="email"
            className={inputClasses}
            placeholder="ihre@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Unternehmen
          </label>
          <input
            {...register("company")}
            type="text"
            className={inputClasses}
            placeholder="Ihr Unternehmen"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Nachricht
          </label>
          <textarea
            {...register("message")}
            rows={4}
            className={inputClasses}
            placeholder="Wie können wir Ihnen helfen?"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </button>

      {submitSuccess && (
        <p className="text-green-500 text-center">
          Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.
        </p>
      )}
    </form>
  );
} 