import { z } from "zod";

export const categoryFormSchema = z.object({
  id:z.number().optional(),
  name: z.string().min(3),
  description: z.string().optional(),
});

export type ICategorySchema = z.infer<typeof categoryFormSchema>;

export const brandFormSchema = z.object({
  id:z.number().optional(),
  name: z.string().min(3),
  description: z.string().optional(),
});

export type IBrandSchema = z.infer<typeof categoryFormSchema>;

export const vehicleFormSchema = z.object({
  id:z.number().optional(),
  plateNumber: z.string(),
  name: z.string().min(3),
  description: z.string().optional(),
  categoryId: z.string(),
  brandId: z.string(),
  modelYear: z.number().min(4),
  seater: z.number(),
  rentalCost: z.number(),
  powerHorse: z.number(),
  kilometersIncluded: z.number(),
  isOnSale: z.boolean().default(true).optional(),
  discountByPercent: z.number().optional(),
  discountByAmount: z.number().optional(),
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


export const reportFormSchema = z.object({
  id:z.string().optional(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  status: z.string(),
});
export type IReportSchema = z.infer<typeof reportFormSchema>;
