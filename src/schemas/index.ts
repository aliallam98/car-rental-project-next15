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

export const vehicleFormSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  categoryId: z.string(),
  brandId: z.string(),
  modelYear: z.number().min(4),
  seater: z.string(),
  rentalCost: z.number(),
  powerHorse: z.number(),
  kilometersIncluded: z.number(),
  isOnSale: z.boolean().default(true).optional(),
  discountByPercent: z.string().optional(),
  discountByAmount: z.string().optional(),
  relatedVideo: z.string().optional(),
});

export type IVehicleSchema = z.infer<typeof vehicleFormSchema>;
