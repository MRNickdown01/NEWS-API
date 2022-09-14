var topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

var newsItemURL = ' https://hacker-news.firebaseio.com/v0/item/160705.json';


const fetchData = (url) => {
    return new Promise((resolve,reject) =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
}


const showData = async () => {
    var data = await fetchData(topStoriesUrl);
    console.log(data);
    data.map(async (d) => {
        let newsData = await fetchData(`${newsItemURL}${d}.json`);
        console.log(newsData);
    });
};
 
showData();