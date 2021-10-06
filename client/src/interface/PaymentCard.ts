export interface PaymentCard {
  number: number;
  name: string;
  type?: string;
  cvc?: number;
  exp: string;
}
