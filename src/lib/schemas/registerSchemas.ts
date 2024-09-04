import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, {
    message: "กรุณา กรอกชื่อผู้ใช้งาน มากกว่า 3 ตัวอักษร",
  }),
  email: z.string().email({ message: "คุณกรอก Email ไม่ถูกต้อง" }),
  password: z.string().min(6, {
    message: "กรุณา กรอกรหัสผ่านมากกว่า 6 ตัวอักษร",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
