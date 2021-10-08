export interface PaymentCard {
  number: string | undefined;
  name: string | undefined | null;
  type?: string;
  cvc?: number;
  exp: string;
}
