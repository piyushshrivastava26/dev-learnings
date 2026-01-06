import React, { useEffect, useState } from "react";



function GithubProfile() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/DigitalTrailblazer");
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    throw new Error('Failed to fetch GitHub data');
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchGithubData();  // calling fetch function
    }, []);

    if (!data) {
        return <div className="text-center text-3xl text-rose-700 p-4 bg-gray-300">Loading...</div>;
    }


//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.github.com/users/DigitalTrailblazer")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);

//         setData(data);
//     });
//   }, []);
  return (
    <>
      <div className="text-center text-3xl text-rose-700 p-4 bg-gray-300">
      Github Username: {data.login}
      </div>
      <div className="text-center text-3xl text-rose-700 p-4 bg-gray-300">
      Followers: {data.followers}
      </div>
    </>
  );
}

export default GithubProfile;
