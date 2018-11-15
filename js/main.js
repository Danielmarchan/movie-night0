//Movie array
var movies = [];

//Constructior function
function Movie (title, year, poster, rating, synopsis, link) {
    this.title = title;
    this.year = year;
    this.poster = poster;
    this.rating = rating;
    this.synopsis = synopsis;
    this.link = link;
    
    movies.push(this);
}

//Object creation
new Movie("The Shawshank Redemption", "1994", "img/shawshank.jpg", 9.3, "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "https://www.amazon.com/dp/B001XUJNJ0?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("The Godfather", "1972", "img/godfather.jpg", 9.2, "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", "https://www.amazon.com/dp/B005DNPFUE?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("The Godfather: Part II", "1974", "img/godfather2.jpg", 9.0, "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", "https://www.amazon.com/dp/B005DNPFV8?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("The Dark Knight", "2008", "img/dark.jpg", 9.0, "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "https://www.amazon.com/dp/B001OGWY1W?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("12 Angry Men", "1957", "img/angry.jpg", 8.9, "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", "https://www.amazon.com/dp/B07JD8T8J8?ref_=imdbref_tt_wbr_piv&tag=imdbtag_tt_wbr_piv-20");
new Movie("Schindler's List", "1993", "img/schindler.jpg", 9.9, "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", "https://www.amazon.com/dp/B00BP4X3W2?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("The Lord of the Rings: The Return of the King", "2003", "img/lord3.jpg", 8.9, "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", "https://www.amazon.com/dp/B005T5MYXC?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("Pulp Fiction", "1994", "img/pulp.jpg", 8.9, "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "https://www.amazon.com/dp/B005T5MYXC?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("The Good, the Bad and the Ugly", "1966", "img/good.jpg", 8.8, "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", "https://www.amazon.com/dp/B07J23DPM9?ref_=imdbref_tt_wbr_piv&tag=imdbtag_tt_wbr_piv-20");
new Movie("Fight Club", "1999", "img/fight.jpg", 8.8, "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.", "https://www.amazon.com/dp/B001H1SVO8?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("The Lord of the Rings: The Fellowship of the Ring", "2001", "img/lord1.jpg", 8.8, "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", "https://www.amazon.com/dp/B000YMH4CG?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");
new Movie("Forrest Gump", "1994", "img/forrest.jpg", 8.7, "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", "https://www.amazon.com/dp/B0035JRVBO?ref_=imdbref_tt_wbr_aiv&tag=imdbtag_tt_wbr_aiv-20");

//Object display in page, start at x and show y movies
function loadMovies(x, y) {
    for (let i = x; i < (x + y); i++) {
        //Create html elements
        var elementBigDiv = document.createElement("div");
        var elementTopDiv = document.createElement("div");
        var elementBottomDiv = document.createElement("div");
        var elementTitle = document.createElement("h4");
        var elementYear = document.createElement("h6");
        var elementPoster = document.createElement("img");
        var elementRating = document.createElement("h6");
        var elementSynopsis = document.createElement("p");
        var elementLinkButton = document.createElement("a");
        
        //Style and content of html elements
        elementBigDiv.className = "col-12 col-sm-6 col-md-4 mx-auto text-center big-div";
        elementTopDiv.className = "top-div";
        elementBottomDiv.className = "bottom-div";
        elementTitle.textContent = movies[i].title;
        elementYear.textContent = movies[i].year;
        elementYear.className = "bottom-align";
        elementPoster.src = movies[i].poster;
        elementPoster.alt = movies[i].title;
        elementPoster.setAttribute("style", "width: 200px; object-fit: cover;");
        elementRating.textContent = movies[i].rating;
        elementSynopsis.textContent = movies[i].synopsis;
        elementLinkButton.href = movies[i].link;
        elementLinkButton.textContent = "Watch now";
        elementLinkButton.className = "btn btn-primary bottom-align";
        
        // append html elements
        elementTopDiv.appendChild(elementTitle);
        elementTopDiv.appendChild(elementYear);
    
        elementBottomDiv.appendChild(elementSynopsis);
        elementBottomDiv.appendChild(elementLinkButton);
        
        elementBigDiv.appendChild(elementTopDiv);
        elementBigDiv.appendChild(elementPoster);
        elementBigDiv.appendChild(elementRating);
        elementBigDiv.appendChild(elementBottomDiv);
        
        //Display in page
        document.getElementById("movies-div").appendChild(elementBigDiv);
    }   
}

//Loads next 6 movies
function loadMore() {
    document.getElementById("load-more").style.display = "none";
    loadMovies(6, 6)
}

//Load first 6 movies
loadMovies(0, 6);