export const GetRequestInitTemplate: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const PostRequestInitTemplate: RequestInit = {
  ...GetRequestInitTemplate,
  method: 'POST',
};

export const PutRequestInitTemplate: RequestInit = {
  ...GetRequestInitTemplate,
  method: 'PUT',
};

export const DeleteRequestInitTemplate: RequestInit = {
  ...GetRequestInitTemplate,
  method: 'DELETE',
};
