import { FetchOptions } from '../../interface/FetchOptions';
import { PaymentCard, PaymentCardApiData, PaymentIntentApiData } from '../../interface/Payment';

export const savePaymentMethod = async (paymentMethod: PaymentCard): Promise<PaymentCardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentMethod }),
    credentials: 'include',
  };
  return await fetch(`/payment/method`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to save payment method' },
    }));
};
export const getPaymentMethodById = async (id: string): Promise<PaymentCardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/payment/method/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to get payment method' },
    }));
};
export const createPaymentIntent = async (price: number): Promise<PaymentIntentApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price }),
    credentials: 'include',
  };
  return await fetch(`/payment/intent`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to save payment method' },
    }));
};
