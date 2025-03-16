import BackgroundFetch from 'react-native-background-fetch';

useEffect(() => {
  BackgroundFetch.configure(
    {
      minimumFetchInterval: 15, // Fetch interval in minutes
    },
    async (taskId) => {
      console.log('Background fetch initiated');
      // Perform data sync here
      BackgroundFetch.finish(taskId);
    },
    (error) => {
      console.log('Background fetch failed', error);
    }
  );

  return () => {
    BackgroundFetch.stop();
  };
}, []);
