export type Transaction = {
  id: string;
  text: string;
  amount: number;
  type: string | null;
  userId: string | null; // Updated to allow null
  createdAt: Date;
  updatedAt: Date;
};
