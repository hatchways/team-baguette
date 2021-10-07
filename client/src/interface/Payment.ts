export interface PaymentCard {
  last4: string | undefined;
  fullName: string | undefined | null;
  type?: string;
  cvc?: number;
  exp: string;
}

export interface PaymentCardApiData {
  error?: { message: string };
  success?: PaymentCard;
}
