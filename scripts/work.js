let githubrepos_div = document.getElementById('github_repos');
let blogposts_div = document.getElementById('blog_posts');

let repositories = GetAllRepos();
let blogposts = GetAllBlogPosts();

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
            for(let i = 0; i < data.length; i++){
                let repoName = data[i].name;
                let repoDescription = data[i].description;
                let repoUrl = data[i].html_url;
                let repoLanguage = data[i].language;

                let repository = new gitrepos(repoName, repoDescription, repoUrl, repoLanguage);
                userRepositories.push(repository);
            }
        }
    })

    return userRepositories;
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
            for(let i = 0; i < data.items.length; i++){
                let postName = data.items[i].title;
                let postDate = data.items[i].published;
                let postUrl = data.items[i].url;
                
                let blogPost = new blogpost(postName, postUrl, postDate);
                userBlogs.push(blogPost);
            }
        }
    })

    return userBlogs;
}

// Populate Work
function PopulateWork(userRepositories, userBlogPosts){
    if(userRepositories.length != 0){
        for(let i = 0; i < userRepositories.length; i++){

        }
    }

    if(userBlogPosts.length != 0){
        for(let i = 0; i < userBlogPosts.length; i++){
            
        }
    }
}