import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});

export type ICategorySchema = z.infer<typeof categoryFormSchema>;

export const brandFormSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});

export type IBrandSchema = z.infer<typeof categoryFormSchema>;
