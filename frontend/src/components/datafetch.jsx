import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual Django API endpoint URL
  const apiUrl = 'http://localhost:8000/api/'; // Example for port 8000

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        // Render your data here, e.g., using a list or table
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.field1} - {item.field2}</li>
          ))}
        </ul>
      )}
      {data.length === 0 && !isLoading && <p>No data found.</p>}
    </div>
  );
};

export default MyComponent;
