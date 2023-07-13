import axios from '@/lib/helpers/axios.helper';
import { CitiesResponse } from '../interfaces/cities.interface';
import { useQuery } from '@tanstack/react-query';

export async function getCities() {
  const { data } = await axios.get<CitiesResponse[]>('/cities');
  return data;
}

export async function getCityBySlug(slug: string) {
  const { data } = await axios.get<CitiesResponse>(`/cities/${slug}`);
  return data;
}

export function useCities() {
  const { data, isError, isLoading } = useQuery(['cities'], getCities);

  return {
    data,
    isError,
    isLoading,
  };
}

export function useCityBySlug(slug: string) {
  const { data, isError, isLoading } = useQuery(
    ['cities'],
    () => getCityBySlug(slug),
    { enabled: !!slug }
  );

  return {
    data,
    isError,
    isLoading,
  };
}
