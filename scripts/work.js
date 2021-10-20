var githubrepos_div = document.getElementById('github_repos');
var blogposts_div = document.getElementById('blog_posts');

GetAllRepos();
GetAllBlogPosts();

// Get all repositories
function GetAllRepos(){
    let userRepositories = new Array();
    let uriGitHub = 'https://api.github.com/users/manueljscruz/repos';

    // Fetch data
    fetch(uriGitHub)
    .then((response) =>{
        return response.json()
    }).then((data)=>{
        // If data was received
        if(data.length != 0){
            // For each entry received, parse data
            for(let i = 0; i < data.length; i++){
                let repoName = data[i].name != null ? data[i].name : '';
                let repoDescription = data[i].description != null ? data[i].description : '';
                let repoUrl = data[i].html_url != null ? data[i].html_url : '';
                let repoLanguage = data[i].language != null ? data[i].language : '';
                // Create a new repository object and add to the list
                let repository = new gitrepos(repoName, repoDescription, repoUrl, repoLanguage);
                userRepositories.push(repository);
            }
            PopulateRepos(userRepositories);
        }
        else{
            let paragraph = document.createElement("p");
            paragraph.textContent = "No entries found";
            githubrepos_div.appendChild(paragraph);
        }
    })
}

// Get All blog posts
function GetAllBlogPosts(){
    let userBlogs = new Array();
    let uriBlogger = 'https://www.googleapis.com/blogger/v3/blogs/4292191252265181331/posts?key=AIzaSyAbwGEjaajYdRhJExuULMiIJqA93toPgbw';

    // fetch data
    fetch(uriBlogger)
    .then((response) =>{
        return response.json()
    }).then((data)=>{
        // if data was received
        if(data.items.length != 0){
            // For each blog entry received
            for(let i = 0; i < data.items.length; i++){
                let postName = data.items[i].title;
                let postDate = data.items[i].published;
                let postUrl = data.items[i].url;
                // create a new blog post object and add to the list
                let blogPost = new blogpost(postName, postUrl, postDate);
                userBlogs.push(blogPost);
            }
            
            PopulateBlogPosts(userBlogs);
        }
        else{
            let paragraph = document.createElement("p");
            paragraph.textContent = "No entries found";
            githubrepos_div.appendChild(paragraph);
        }
    })
}


function PopulateRepos(projects){
    if(projects.length != 0){
        for(let i = 0; i < projects.length; i++){
            let github_card = document.createElement('github-card');
            github_card.setAttribute("projectName", projects[i]._repoName);
            github_card.setAttribute("language", projects[i]._repoLanguage);
            github_card.setAttribute("url", projects[i]._repoUrl);
            github_card.setAttribute("description", projects[i]._repoDescription);

            githubrepos_div.appendChild(github_card);
        }
    }
    else console.log("No data");
}

function PopulateBlogPosts(posts){
    if(posts.length != 0){
        for(let i = 0; i< posts.length; i++){
            let blogpost_card = document.createElement('blog-post');
            blogpost_card.setAttribute("postTitle", posts[i]._postName);
            let date = new Date(posts[i]._postDateCreate);
            blogpost_card.setAttribute("postDate", date.toDateString());
            blogpost_card.setAttribute("postUrl", posts[i]._postUrl);

            blogposts_div.appendChild(blogpost_card);
        }
    }
    else console.log("No data");
}


// Populate Work
/*
function PopulateWork(userRepositories, userBlogPosts){
    // debugger;
    if(userRepositories.length != 0){
        for(let i = 0; i < userRepositories.length; i++){
            let github_card = document.createElement('github-card');
            github_card.setAttribute("projectName", userRepositories[i]._repoName);
            github_card.setAttribute("language", userRepositories[i]._repoLanguage);
            github_card.setAttribute("url", userRepositories[i]._repoUrl);
            github_card.setAttribute("description", userRepositories[i]._repoDescription);

            githubrepos_div.appendChild(github_card);
            console.log(github_card);
        }
    }

    if(userBlogPosts.length != 0){
        for(let i = 0; i < userBlogPosts.length; i++){
            
        }
    }
}
*/

// Repos
/*
var repos = {
    value = new Array(),
    get Repositories(){
        return this.value;
    },
    set Repositories(value){
        this.value = value;
        debugger;
        this.PopulateRepos();
    },
    PopulateRepos(){
        if(this.Repositories.length != 0){
            for(let i = 0; i < this.Repositories.length; i++){
                let github_card = document.createElement('github-card');
                github_card.setAttribute("projectName", this.Repositories[i]._repoName);
                github_card.setAttribute("language", this.Repositories[i]._repoLanguage);
                github_card.setAttribute("url", this.Repositories[i]._repoUrl);
                github_card.setAttribute("description", this.Repositories[i]._repoDescription);
    
                githubrepos_div.appendChild(github_card);
                console.log(github_card);
            }
        }
    }
}
*/