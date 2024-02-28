'use server';

import { User } from '@prisma/client';
import prisma from '@/prisma/client';

import * as z from 'zod';

import * as bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FormSchema } from '@/app/schemas/schemas';

export const registerUser = async (values: z.infer<typeof FormSchema>) => {
  try {
    console.log(values);
    const validatedFields = FormSchema.safeParse(values);

    if (!validatedFields.success) {
      return Promise.reject('Invalid fields!');
    }

    const { email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return Promise.reject(new Error('Email already exists'));
    }

    await prisma.user.create({
      data: {
        email,
        hashedPassword: hashedPassword,
        userRole: 'EMPLOYER',
      },
    });

    // Login the user after successful registration
    // await signIn('credentials', {
    //   email,
    //   password,
    //   redirect: false, // Set to true if you want NextAuth.js to handle redirection
    // });

    return { success: '200' };
  } catch (error) {
    return Promise.reject(error);
  }
};
