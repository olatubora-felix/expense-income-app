"use server";

import { db } from "@/libs/db";
import { auth } from "@clerk/nextjs/server";

async function getUserBalance(): Promise<{
  balance?: number;
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

    // Get Balance
    const balance = transactions.reduce(
      (sum, transaction) => {
        if (transaction.type === "income") {
          sum += transaction.amount;
        } else {
          sum -= transaction.amount;
        }

        return sum;
      },
      0 // Initialize sum with 0
    );

    return { balance };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getUserBalance;
