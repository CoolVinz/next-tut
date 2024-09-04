import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "คุณกรอก Email ไม่ถูกต้อง" }),
  password: z.string().min(6, {
    message: "กรุณา กรอกรหัสผ่านมากกว่า 6 ตัวอักษร",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
