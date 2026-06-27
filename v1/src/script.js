function change_color() {
    let options = document.querySelectorAll(".option")
    options.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.add(".option-selected");
        })
    });
}

function fill_table_with_data() {
    let table = document.querySelector("table")
    let data = [
["James",            "James@gmail.com",      "Product designer",         "patricia",     "Product Team",     "Imaginer USA",     "Active"],
["Michael",          "Michael@gmail.com",    "User interface designer",  "ennifer",      "Design Team",      "Imaginer AUS",     "Active"],
["Robert",           "Robert@gmail.com",     "User experience designer", "Linda",        "Design Team",      "Imaginer India",   "Active"],
["John",             "Jhon@gmail.com",       "Graphical designer",       "Elizabeth",    "Marketing Team",   "Imaginer SA",      "Active"],
["David",            "David@gmail.com",      "CX Designer",              "Barbara",      "Product Team",     "Imaginer CH",      "Active"],
["William",          "Richard@gmail.com",    "User experience designer", "Christopher",  "Design Team",      "Imaginer India",   "Active"],
["Richard",          "David@gmail.com",      "CX Designer",              "Chorles",      "Product Team",     "Imaginer SA",      "Probation"],
["Joseph",           "Joseph@gmail.com",     "User interface designer",  "Marv",         "Design Team",      "Imaginer CH",      "On Leave"],
["Thomas",           "Thomas@gmail.com",     "User interface designer",  "Matthew",      "Marketing Taam",   "Imaginer AUS",     "On Leave"],
["Shiva Chandru",    "Shiva@imaginers.com",   "Graphical designer",       "kennetl",      "Marketing Team",   "Imaginer India",  "On Leave"],
["Andrew",           "Andrew@gmall.com",     "Graphical designer",       "kennetl",      "Marketing Team",   "Imaginer India",   "On Leave"],
]
}

change_color()
fill_table_with_data()