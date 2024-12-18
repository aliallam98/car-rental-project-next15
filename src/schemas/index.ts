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

export const customerFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().optional(),
  phoneNumber: z.string(),
  addressOne: z.string().min(1),
  addressTwo: z.string().optional(),
  customerType: z.string(),
  personalId: z.string(),
  emergencyContactName: z.string(),
  emergencyContactRelationship: z.string(),
  emergencyContactPhoneNumber: z.string(),
  licenseNumber: z.string().optional(),
  licenseExpirationDate: z.coerce.date().optional(),
});

export type ICustomerSchema = z.infer<typeof customerFormSchema>;

export const reservationFormSchema = z.object({
  fullName: z.string().min(2),
  phoneNumber: z.string(),
  rentalStartDate: z.coerce.date(),
  rentalEndDate: z.coerce.date(),
  specialRequest: z.string().optional(),
  carNameAndModel: z.string(),
  status: z.string(),
  pickupLocation: z.string(),
  dropOffLocation: z.string(),
  totalPrice: z.number(),
  paymentStatus: z.string(),
  insurance: z.boolean().default(true).optional(),
  insurancePolicy: z.string().optional(),
  notes: z.string().optional(),
  bookingReferenceNumber: z.string(),
});
export type IReservationSchema = z.infer<typeof reservationFormSchema>;
