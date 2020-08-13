const KEY = 'AIzaSyDVTCtvnzqkcAQ0B_iaEzFRMDyTRoY_1yA';


const youtubeRequest = async (term)=>{
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${KEY}&q=${term}`;
    
    const request = await fetch(url);
    const data = await request.json();
    return data;
}

export default youtubeRequest;