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
        <a href="${this.postUrl}" target="_blank" rel="noopener noreferrer" class="work_card blog-card">
            <div class="card-header-row">
                <i class="bi bi-file-earmark-text card-icon"></i>
                <h5 class="card-title">${this.postTitle}</h5>
            </div>
            <div class="card-footer-row">
                <span class="date-badge">
                    <i class="bi bi-calendar3"></i>
                    ${this.postDate}
                </span>
                <span class="card-link-icon"><i class="bi bi-box-arrow-up-right"></i></span>
            </div>
        </a>
        `;
    }
  }

  customElements.define("blog-post", BlogPost);
