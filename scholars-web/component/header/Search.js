import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';



function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { data: session } = useSession(); // get the user session data


  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
    setQuery('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const [searchHistory, setSearchHistory] = useState(() => {
    if (session) {
      const storedHistory = localStorage.getItem('searchHistory');
      return storedHistory ? JSON.parse(storedHistory) : [];
    }
    return [];
  });

  useEffect(() => {
    if (session && query) {
      setSearchHistory((prevHistory) => [query, ...prevHistory]);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }, [query, session]);
  return (
    <div className={`search`} >
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={handleChange} placeholder='Search...' />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
    {session && (
        <ul>
          {searchHistory.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
