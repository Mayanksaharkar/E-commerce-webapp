import { ReactNode } from "react";
export interface PaymentContextProviderProps {
  children: ReactNode;
}

export interface PaymentContextType {
  makePayment: () => Promise<string>;
  AddPaymentData: (payment_id: string, payment_status: string) => Promise<void>;
}
