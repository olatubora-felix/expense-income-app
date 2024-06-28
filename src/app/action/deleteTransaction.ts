"use server";

import { db } from "@/libs/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId: string): Promise<{
  error?: string;
  message?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.delete({
      where: { id: transactionId },
    });
    revalidatePath("/");
    return { message: "Transaction Deleted" };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default deleteTransaction;
