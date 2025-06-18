import { ReactNode } from "react";
export interface PaymentContextProviderProps {
  children: ReactNode;
}

export interface PaymentContextType {
  AddPaymentData: (payment_id: string, payment_status: string, amount: number) => Promise<void>;
  handlePayment: (
    removeAllItems: (uid: string) => void,
    amount: number,
    shippingCost?: number
  ) => Promise<void>;
}