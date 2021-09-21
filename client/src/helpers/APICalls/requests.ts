import { ReqValue } from '../../interface/Request';

export const getRequests = async (): Promise<ReqValue[]> => {
  return await fetch('/requests/sitter', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateReqs = async (reqId: string, status: string): Promise<ReqValue> => {
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
    .catch((err) => console.log(err));
};
