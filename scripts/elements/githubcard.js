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

    getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#3178c6',
            'C#': '#178600',
            'PHP': '#4F5D95',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Python': '#3572A5',
            'Java': '#b07219',
            'C++': '#f34b7d',
            'GDScript': '#355570'
        };
        return colors[language] || '#8B5D33';
    }

    render() {
        const langColor = this.getLanguageColor(this.language);
        this.innerHTML = `
        <a href="${this.url}" target="_blank" rel="noopener noreferrer" class="work_card github-card">
            <div class="card-header-row">
                <i class="bi bi-folder2-open card-icon"></i>
                <h5 class="card-title">${this.projectName}</h5>
            </div>
            <p class="card-description">${this.description || 'No description available'}</p>
            <div class="card-footer-row">
                ${this.language ? `
                <span class="language-badge">
                    <span class="language-dot" style="background-color: ${langColor}"></span>
                    ${this.language}
                </span>
                ` : ''}
                <span class="card-link-icon"><i class="bi bi-box-arrow-up-right"></i></span>
            </div>
        </a>
        `;
    }
  }

  customElements.define("github-card", GitHubCard);
