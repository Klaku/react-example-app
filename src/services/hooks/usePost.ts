import { useState } from 'react';
import { PostRequestInitTemplate } from 'utils/defaults/RequestInitTemplate';

export interface IPostRequestBody {
  property_1: string;
  property_2: number;
  property_3: any;
}

function usePost(): [(body: IPostRequestBody) => unknown, boolean, any | null, () => void] {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const Post = async (body: IPostRequestBody) => {
    try {
      setIsBusy(true);
      setError(null);
      const response = await fetch(`https:example.com/api/examplePost`, {
        ...PostRequestInitTemplate,
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`HTTP error - ${response.status} in method usePost`);
      const parsedResponse = await response.json();
      return parsedResponse;
    } catch (exception) {
      setError(exception);
    } finally {
      setIsBusy(false);
    }
  };

  const Reset = () => setError(null);

  return [Post, isBusy, error, Reset];
}

export default usePost;
