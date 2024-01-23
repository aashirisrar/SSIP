"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Input } from "./ui/input";
import { useState } from "react";

const FormSchema = z.object({
  title: z.string(),
  content: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export function TextareaForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [authorized, setAuthorized] = useState(false);
  const [clicked, setClicked] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await axios.post("api/posts", data);

      if (response.status === 200) {
        setAuthorized(true);
        form.setValue("title", "");
        form.setValue("content", "");
      } else if (response.status === 401) {
        setAuthorized(false);
      } else {
        console.log(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
    setClicked(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Post Title</FormLabel>
              <FormControl>
                <Input placeholder="Title of blog post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Post Text</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your blog post text here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@type</span> anything.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      {!authorized && clicked ? (
        <div className="mt-2">
          You are not logged in to post. First log in and then try again.
        </div>
      ) : (
        <></>
      )}
    </Form>
  );
}
