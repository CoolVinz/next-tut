"use server";

import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import bcrypt from "bcryptjs";
import { error } from "console";

export async function registerUser(data: RegisterSchema) {
  const validated = registerSchema.safeParse(data);

  if (!validated.success) {
    return { error: validated.error.errors };
  }

  const { name, email, password } = validated.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) return { error: "มีผู้ใช้นี้อยู่แล้วในระบบ" };

  return prisma.user.create({
    data: { name, email, passwordHash: hashedPassword },
  });
}
