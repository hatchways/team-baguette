import { ReqValueApiData, ReqValue } from '../../interface/Request';

export const getRequests = async (): Promise<ReqValue[]> => {
  return await fetch('/requests/sitter', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to get requests. Please try again' },
    }));
};

export const updateReqs = async (reqId: string, status: string): Promise<ReqValueApiData> => {
  return await fetch('/requests', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      reqId: reqId,
      accepted: status,
    }),
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to update request. Please try again' },
    }));
};
