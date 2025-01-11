import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../api/apiCategories';

export function useCategories() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryFn: getCategories,
    queryKey: ['categories'],
  });

  return { isLoading, categories, error };
}
