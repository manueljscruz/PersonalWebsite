class BlogPost extends HTMLElement {
    constructor() {
        super();
    
        this.postTitle = "";
        this.postDate = "";
        this.postUrl = "";
    }
  
    connectedCallback() {

        this.postTitle = this.getAttribute("postTitle");
        this.postDate = this.getAttribute("postDate");
        this.postUrl = this.getAttribute("postUrl");

        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="${this.postUrl}" class="work_card">
            <div class="row">
                <div class="col-8">
                    <h5>${this.postTitle}</h5>
                </div>
                <div class="col-4"></div>
            </div>
            <div class="row">
                <p>${this.postDate}</p>
            </div>
        </a>
        `;
    }
  }
  
  customElements.define("blog-post", BlogPost);