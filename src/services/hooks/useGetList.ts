import { useState, useEffect } from 'react';
import { GetRequestInitTemplate } from 'utils/defaults/RequestInitTemplate';

export interface IGetResponse {
  property_1: string;
  property_2: number;
  property_3: any;
}

function useGetList(
  top: number,
  skip: number
): [IGetResponse[], (value: IGetResponse[]) => void, boolean, any | null, () => void] {
  const [data, setData] = useState<IGetResponse[]>([]);
  const [isBusy, setIsBusy] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const GetList = async () => {
    try {
      setIsBusy(true);
      setError(null);
      const response = await fetch(
        `https:example.com/api/exampleGetListRequest?top=${top}&skip=${skip}`,
        GetRequestInitTemplate
      );
      if (!response.ok) throw new Error(`HTTP error - ${response.status} in method useGetList`);
      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (exception) {
      setError(exception);
    } finally {
      setIsBusy(false);
    }
  };

  useEffect(() => {
    GetList();
  }, [top, skip]);

  return [data, setData, isBusy, error, GetList];
}

export default useGetList;
