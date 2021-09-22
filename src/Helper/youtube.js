export async function getAuthentication(query) {
  console.log(query);
  const KEY = "AIzaSyAjeMTZin9oRtpOafBfzzZHwnjA2P0MxXs";
  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${KEY}`;
  //   const requestObject = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${KEY}`,
  //     },
  //   };

  const videoList = await fetch(URL);
  const processedVideoList = await videoList.json();
  console.log(processedVideoList);
  return processedVideoList;
}
