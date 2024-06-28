"use server";

import { db } from "@/libs/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    });
    const expenses = await db.transaction.findMany({
      where: { userId, type: "expense" },
    });
    const incomes = await db.transaction.findMany({
      where: { userId, type: "income" },
    });

    const income = incomes.reduce((acc, item) => acc + item.amount, 0);

    const expense = expenses.reduce((acc, item) => acc + item.amount, 0);
    revalidatePath("/");

    return { income, expense: Math.abs(expense) };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getIncomeExpense;
