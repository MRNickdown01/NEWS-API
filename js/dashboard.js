document.addEventListener('DOMContentLoaded',()=>{

    let newsContainer = document.getElementById('newsContainer');

    let topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    
    const fetchData = async (url) =>{
        response = await fetch(url)
        data = await response.json()
        return data
    }


    const getStories = async () =>{
        let topstories =  await fetchData(topStoriesUrl)
        topstories.slice(0,100).map(async (storyId)=>{
            let  newsItemURL = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
            story = await fetchData(newsItemURL)
            if(story.url){

            storyDiv = `
          
            
            <div class="basic-card basic-card-aqua">
                <div class="card-content">
                    <span class="card-title"> BY : ${story.by}</span>
                    <p class="card-text">
                       ${story.title}
                    </p>
                </div>

                <div class="card-link">
                    <a href="${story.url}" title="Read Full"><span>Read Full</span></a>
                </div>
            </div>

            `
            newsContainer.innerHTML += storyDiv
            }
        })


    }

    getStories()

})