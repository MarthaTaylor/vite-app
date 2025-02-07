import { useQuery } from '@tanstack/react-query';
import { fetchTrendingGifs } from '../api/giphy';
import { Gif } from '../types/gif';
import { ApiResponse } from '../types/api';

const Trending = () => {
    const { data, error, isLoading } = useQuery<ApiResponse, Error>({
        queryKey: ['trendingGifs'], // ✅ Correct query key
        queryFn: fetchTrendingGifs, // ✅ Use function reference, no parameters
      });

  console.log("📊 Trending GIFs Data:", data); // ✅ Log API Data

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error loading GIFs: {error.message}</div>;

  if (!data || !data?.data || data?.data.length === 0) return <div>No GIFs found.</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {data?.data.map((gif: Gif) => (
        <img
          key={gif.id}
          src={gif.images.original.url}
          alt={gif.title}
          className="w-full rounded-md shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
        />
      ))}
    </div>
  );
};

export default Trending;
