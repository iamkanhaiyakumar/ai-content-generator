'use client';
import { useEffect, useState } from 'react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
}

const ContributorsPage = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        // GitHub API endpoint to fetch contributors for a repo
        const response = await fetch(
            'https://api.github.com/repos/iamkanhaiyakumar/ai-content-generator/contributors'
        );
          

        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }

        const data = await response.json();
        console.log('fetched data=======',data); // Debug the fetched data
        setContributors(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchContributors();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (contributors.length === 0) {
    return <p>No contributors found</p>;
  }
  
  return (
    <div className="contributors-page">
      <h2 className="text-2xl font-bold text-center mt-4">Contributors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {contributors.map((contributor) => (
          <div key={contributor.login} className="contributor-card p-2 border rounded-lg shadow-md ">
            <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src={contributor.avatar_url}
                alt={`${contributor.login}'s avatar`}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-center mt-2 font-medium">{contributor.login}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorsPage;
