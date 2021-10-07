import { FetchOptions } from '../../interface/FetchOptions';
import { PaymentCard, PaymentCardApiData } from '../../interface/Payment';

export const savePaymentMethod = async (paymentMethod: PaymentCard): Promise<PaymentCardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentMethod }),
    credentials: 'include',
  };
  return await fetch(`/paymentMethod`, fetchOptions)
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
  return await fetch(`/paymentMethod/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to get payment method' },
    }));
};
