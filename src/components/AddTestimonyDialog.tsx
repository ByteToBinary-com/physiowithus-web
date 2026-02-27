"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    mobile: z.string().regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, {
        message: "Please enter a valid mobile number.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    testimony: z
      .string()
      .min(1, {
        message: "Testimony must not be empty.",
      })
      .max(200, {
        message: "Testimony must not be longer than 200 characters.",
      }),
    rating: z.number().min(1).max(5),
  });

const AddTestimonyDialog = ({ onAddTestimony }: { onAddTestimony: (data: z.infer<typeof formSchema>) => void }) => {
    const [rating, setRating] = useState(0);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          mobile: "",
          email: "",
          testimony: "",
          rating: 0,
        },
      });
    const { toast } = useToast();
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const accessKey = process.env.NEXT_PUBLIC_TESTIMONY_ACCESS_KEY;
        if (!accessKey) {
          toast({
            title: "Configuration Error",
            description: "Feedback form is not configured. Please contact us directly.",
            variant: "destructive",
          });
          return;
        }

        const formData = new FormData();
        formData.append("access_key", accessKey);
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });

        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          }).then((res) => res.json());

          if (res.success) {
            toast({
              title: "Success",
              description: "Testimony submitted successfully!",
            });
            onAddTestimony(values);
          } else {
            toast({
              title: "Error",
              description: "Failed to submit. Please try again.",
              variant: "destructive",
            });
          }
        } catch {
          toast({
            title: "Error",
            description: "An unexpected error occurred. Please try again.",
            variant: "destructive",
          });
        }
      }

  return (
    <>
        <DialogHeader>
          <DialogTitle>Add your Testimony</DialogTitle>
          <DialogDescription>
            We'd love to hear about your experience with us.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                        <Input placeholder="Your mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="testimony"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Testimony</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Tell us about your experience"
                        className="resize-none"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel id="rating-label">Rating</FormLabel>
                        <FormControl>
                            <div
                            className="flex items-center gap-2"
                            role="radiogroup"
                            aria-labelledby="rating-label"
                            >
                            {[1, 2, 3, 4, 5].map((star) => {
                                const currentValue = field.value || rating;
                                const isSelected = star === currentValue;
                                return (
                                <button
                                    key={star}
                                    type="button"
                                    role="radio"
                                    aria-checked={isSelected}
                                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                                    tabIndex={isSelected ? 0 : -1}
                                    className="cursor-pointer p-1"
                                    onClick={() => {
                                    setRating(star);
                                    field.onChange(star);
                                    }}
                                    onKeyDown={(event) => {
                                    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                                        event.preventDefault();
                                        const next = Math.min((currentValue || 1) + 1, 5);
                                        setRating(next);
                                        field.onChange(next);
                                    } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                                        event.preventDefault();
                                        const prev = Math.max((currentValue || 1) - 1, 1);
                                        setRating(prev);
                                        field.onChange(prev);
                                    }
                                    }}
                                >
                                    <Star
                                    className={`${
                                        star <= currentValue
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-400"
                                    }`}
                                    aria-hidden="true"
                                    />
                                </button>
                                );
                            })}
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </form>
        </Form>
    </>
  );
};

export default AddTestimonyDialog;
