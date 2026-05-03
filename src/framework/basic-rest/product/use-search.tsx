import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const fetchSearchedProducts = async ({ queryKey }: any) => {
  const [_key, options] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.SEARCH);

  function search(array: any[], text: string) {
    return array?.filter((item: any) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  return search(data, options.text);
};
export const useSearchQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>({
    queryKey: [API_ENDPOINTS.SEARCH, options],
    queryFn: fetchSearchedProducts
  });
};
