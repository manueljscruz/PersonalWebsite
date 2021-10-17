<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/fonts/fonts_styles.css">

        <title>Manuel Cruz</title>
    </head>
    <body>
        <!-- Header and Navigation -->
        <header>
            <button id="home-link" class="tablink link-active" onclick="openPage('home', this)">Home</button>
            <button id="about-link" class="tablink" onclick="openPage('about', this)">About</button>
            <button id="skills-link" class="tablink" onclick="openPage('skills', this)">Skills</button>
            <button id="work-link" class="tablink" onclick="openPage('work', this)">Work</button>
            <button id="stream-link" class="tablink" onclick="openPage('stream', this)">Stream</button>
            <button id="contact-link" class="tablink" onclick="openPage('contact', this)">Contact</button>
        </header>

        <!-- Cover -->
        <div id="home" class="tabcontent tab-active">
            <div id="cover-content">
                <h1>Manuel Cruz</h1>
                <!-- Separator -->
                <h3>Software Developer at Wave Solutions and Code Enthusiast</h3>
            </div>
        </div>

        <!-- About -->
        <div id="about" class="tabcontent">
            <div class="container">
                <!-- Profile -->
                <div class="row">
                    <h3 class="h3-alternative">Who am I?</h3>
                    <p>A creative individual in a pursuit for knowledge. I'm a software developer but i also love programming as a hobby. When i'm not coding for fun or for any personal project, I enjoy a good book or spending a few hours playing video games. Occasional streamer and a beginner blogger.</p>
                </div>
                <!-- Split Content -->
                <div class="row">
                    <!-- Experience -->
                    <div class="col-6">
                        <h3 class="h3-alternative">Experience</h3>
                        <div class="about-list">
                            <h5>Software Developer - Wave Solutions SI</h5>
                            <p>From June 2021 to this day : Working with mobile applications developed with Xamarin.</p>
                        </div>
                        <div class="about-list">
                            <h5>IT Systems Engineer - Reditus SA</h5>
                            <p>From July 2020 to June 2021 : Worked as a consultant for Amkor Technoloy Inc, continuing my work as an IT Systems Engineer with web applications in ASP.NET MVC with the Sencha framework.</p>
                        </div>
                        <div class="about-list">
                            <h5>Intern - Amkor Technoloy Inc Portugal</h5>
                            <p>From July 2019 to July 2020 : Worked as an Intern with web applications in ASP.NET MVC with the Sencha framework.</p>
                        </div>
                    </div>
                    <!-- Education -->
                    <div class="col-6">
                        <h3 class="h3-alternative">Education</h3>
                        <div class="about-list">
                            <h5>Master's Degree in Game Development - Polythecnic Institute of Cavado e Ave</h5>
                            <p>From October 2020 to present day : Info here...</p>
                        </div>
                        <div class="about-list">
                            <h5>Bachelor's Degree in Computer Engineering - Polythecnic Institute of Cavado e Ave</h5>
                            <p>Finished at 2019 : Info here...</p>
                        </div>
                        <div class="about-list">
                            <h5>Coursera</h5>
                            <ul>
                                <li><a href="https://www.coursera.org/account/accomplishments/verify/92BYX8LGNPPW">Introduction to Game Development - Michigan State University</a></li>
                                <li><a href="https://www.coursera.org/account/accomplishments/verify/ME6VTPBW7AGN">Building Web Applications in PHP - University of Michigan</a></li>
                                <li><a href="https://www.coursera.org/account/accomplishments/verify/W2N3NUWJ4ZLZ">Building Database Applications in PHP - University of Michigan</a></li>
                                <li><a href="https://www.coursera.org/account/accomplishments/verify/FTVUXLQW7XME">Introduction to Structured Query Language (SQL) - University of Michigan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Skills -->

        <!-- Watch -->

        <!-- Contact -->

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="scripts/home.js"></script>
    </body>
</html>