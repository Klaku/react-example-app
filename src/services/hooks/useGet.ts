import { useState, useEffect } from 'react';
import { GetRequestInitTemplate } from 'utils/defaults/RequestInitTemplate';

export interface IGetResponse {
  property_1: string;
  property_2: number;
  property_3: any;
}

function useGet(id: number): [IGetResponse | null, (value: IGetResponse) => void, boolean, any | null, () => void] {
  const [data, setData] = useState<IGetResponse | null>(null);
  const [isBusy, setIsBusy] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const Get = async () => {
    try {
      setIsBusy(true);
      setError(null);
      const response = await fetch(`https:example.com/api/exampleGetRequest?id=${id}`, GetRequestInitTemplate);
      if (!response.ok) throw new Error(`HTTP error - ${response.status} in method useGet`);
      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (exception) {
      setError(exception);
    } finally {
      setIsBusy(false);
    }
  };

  useEffect(() => {
    Get();
  }, [id]);

  return [data, setData, isBusy, error, Get];
}

export default useGet;
