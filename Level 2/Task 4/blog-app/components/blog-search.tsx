"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { Input } from "./ui/input";
import { useState } from "react";

const FormSchema = z.object({
  title: z.string(),
});

export function SearchPost() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await axios.post("api/searchposts", data);

      if (response.status === 200) {
        form.setValue("title", "");
        setBlogss(response.data.blogs);
      } else {
        console.log("Error");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const [blogss, setBlogss] = useState([]);

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
        <Button type="submit">Submit</Button>
        <div>
          {blogss.length ? (
            blogss.map((blog: any) => (
              <div className="p-2" key={blog.content}>
                <div>Content:{blog.content}</div>
                <div>Author:{blog.authorEmail}</div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </form>
    </Form>
  );
}
