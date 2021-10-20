class GitHubCard extends HTMLElement {
    constructor() {
        super();
    
        this.projectName = "";
        this.language = "";
        this.url = "";
        this.description = "";
    }
  
    connectedCallback() {

        this.projectName = this.getAttribute("projectName");
        this.language = this.getAttribute("language");
        this.url = this.getAttribute("url");
        this.description = this.getAttribute("description");

        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="${this.url}" class="work_card">
            <div class="row">
                <div class="col-8">
                    <h5>${this.projectName}</h5>
                </div>
                <div class="col-4">
                    <h5>${this.language}</h5>
                </div>
            </div>
            <div class="row">
                <p>${this.description}</p>
            </div>
        </a>
        `;
    }
  }
  
  customElements.define("github-card", GitHubCard);