```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err);
      }
      finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (userData) {
    return (
      <View>
        <Text>{userData.name}</Text>
        {/* Access other properties of userData safely here */}
      </View>
    );
  }

  return <Text>No data available</Text>;
};

export default MyComponent;
```