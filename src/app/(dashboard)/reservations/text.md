fullName: { type: String, required: true, lowercase: true },
mobilePhone: { type: String, required: true },
specialRequest: { type: String },
rentalStartDate: { type: Date, required: true, min: Date.now() },
rentalEndDate: { type: Date, required: true, min: Date.now() },

carId: { type: Types.ObjectId, ref: "Car", required: true },

carNameAndModel: { type: String, required: true, lowercase: true },
status: { type: String, default: "Pending", enum: ["Pending", "Received", "Canceled", "Finished"] },

pickupLocation: { type: String, required: true, lowercase: true },
dropOffLocation: { type: String, required: true, lowercase: true },

customerId: { type: Types.ObjectId, ref: "Customer", required: true },
carId: { type: Types.ObjectId, ref: "Car", required: true },

totalPrice: { type: Number, required: true },
paymentStatus: {
type: String,
default: "Pending",
enum: ["Pending", "Paid", "Failed"],
},
insurance: { type: Boolean, default: false },
insurancePolicy: { type: String },
adminNotes: { type: String },
bookingReferenceNumber: { type: String, required: true, unique: true },
