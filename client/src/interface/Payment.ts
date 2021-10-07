export interface PaymentCard {
  last4: string | undefined;
  fullName: string | undefined | null;
  type?: string;
  cvc?: number;
  exp: string;
  paymentMethodId: string;
}

export interface PaymentCardApiData {
  error?: { message: string };
  success?: PaymentCard;
}

export interface PaymentIntentApiData {
  error?: { message: string };
  success?: string;
}
