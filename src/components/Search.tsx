// import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { searchGifs } from '../api/giphy';
// import { Gif } from '../types/gif';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const { data, refetch } = useQuery(['searchGifs', query], () => searchGifs(query), {
//     enabled: false,
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         className="border p-2 w-full"
//         placeholder="Search GIFs..."
//       />
//       <button onClick={() => refetch()} className="bg-blue-500 text-white p-2 mt-2">Search</button>

//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//         {data?.data.map((gif: Gif) => (
//           <img key={gif.id} src={gif.images.original.url} alt={gif.title} className="w-full" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;
