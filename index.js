console.log('this is my index file')



//initialize the news api variables
let source = 'bbc-news';
let apiKey = '52a7cf41380046dabc92a4c32e1214ea';

// grabbing the news container
let newsAccordian = document.getElementById('newsAccordian');

//creating the ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if(this.status === 200){

        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        let newsHtml = "";
        //console.log(articles);
        articles.forEach((element, index) => {
            console.log(index)

        let news = `
        <div class="accordion" id="newsAccordian">
                <div class="accordion-item">
                       <h2 class="accordion-header" id="heading${index}">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"   
                            data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                             <b>Taazaa Khabar ${index+1}: </b>${element["title"]}
                          </button>
                       </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"   
                      data-bs-parent="#newsAccordian">
                       <div class="accordion-body">
                         ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here </a>
                       </div>
                    </div>
                </div>
        </div>`

            newsHtml = newsHtml + news;
    });
    newsAccordian.innerHTML = newsHtml; 
}
    else{
        console.log("Some error occured")
    }
}
xhr.send()


