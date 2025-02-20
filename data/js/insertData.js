movies = {}
movies.infinitySaga =
    [
        {
            "id": "captain-marvel",
            "title": "Captain Marvel",
            "data": {
                "releaseDate": "03-07-2019",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 1995,
                    "season" : null
                },
                "length": 120,
                "director": "Anna Boden, Ryan Fleck",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt4154664/',
                   'value':  6.8,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=Z1BCujX3pw8"
            },
            "colors": {
                "main": "rgb(221, 158, 89)",
                "secondary": "rgb(24, 34, 83)"
            },
            "moviesToWatch": [],
            "mainCharacters": [
                { "name": "Captain Marvel", "actor": "Brie Larson", "id": "carol-danvers" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Talos", "actor": "Ben Mendelsohn", "id": "talos" },
                { "name": "Monica Rambeau", "actor": "Akira Akbar", "id": "monica-rambeau" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers", "special": "uncredited" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff", "special": "uncredited" },
            ]
        },
        {
            "id": "iron-man-1",
            "title": "Iron Man",
            "data": {
                "releaseDate": "05-02-2008",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2010,
                    "season" : "start"
                },
                "length": 126,
                "director": "Jon Favreau",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0371746/',
                   'value':  7.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=8hYlB38asDY"
            },
            "moviesToWatch": [],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "James Rhodes", "actor": "Terrence Howard", "id": "james-rhodes" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury", "special": "uncredited" },
            ]
        },
        {
            "id": "iron-man-2",
            "title": "Iron Man 2",
            "data": {
                "releaseDate": "05-07-2010",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2010,
                    "season" : "middle"
                },
                "length": 124,
                "director": "Jon Favreau",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1228705/',
                   'value':  6.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=BoohRoVA9WQ"
            },
            "moviesToWatch": [
                { "id": "iron-man-1" }
            ],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "James Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
            ]
        },
        {
            "id": "thor-1",
            "title": "Thor",
            "data": {
                "releaseDate": "04-27-2011",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2010,
                    "season" : "middle"
                },
                "length": 115,
                "director": "Kenneth Branagh",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0800369/',
                   'value':  7.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=JOddp-nlNvQ"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Jane Foster", "actor": "Natalie Portman", "id": "jane-foster" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
                { "name": "Hawkeye", "actor": "Jeremy Renner", "id": "clint-barton" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury", "special": "uncredited" },
            ]
        },
        {
            "id": "the-incredible-hulk",
            "title": "The Incredible Hulk",
            "data": {
                "releaseDate": "06-13-2008",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2010,
                    "season" : "fall"   // aldrabar isto para forçar que seja depois de thor
                },
                "length": 112,
                "director": "Louis Leterrier",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0800080/',
                   'value':  6.6,
                },
                "streaming": "apple",
                "trailer": "https://www.youtube.com/watch?v=xbqNb2PFKKA"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Hulk", "actor": "Edward Norton", "id": "bruce-banner" },
                { "name": "Tony Stark", "actor": "Robert Downey Jr", "id": "tony-stark", "special": "uncredited" },
            ]
        },
        {
            "id": "captain-america-1",
            "title": "Captain America: The First Avenger",
            "data": {
                "releaseDate": "07-22-2011",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 1942,
                    "season" : null
                },
                "length": 124,
                "director": "Joe Johnston",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0458339/',
                   'value':  6.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=JerVrbLldXw"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Peggy Carter", "actor": "Hayley Atwell", "id": "peggy-carter" },
                { "name": "Bucky Barnes", "actor": "Sebastian Stan", "id": "bucky-barnes" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury", "special": "uncredited" },
            ]
        },
        {
            "id": "avengers-1",
            "title": "The Avengers",
            "data": {
                "releaseDate": "05-04-2012",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2012,
                    "season" : "spring"
                },
                "length": 143,
                "director": "Joss Whedon",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0848228/',
                   'value':  8.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=eOrNdBpGMv8"
            },
            "moviesToWatch": [
                { "id": "iron-man-1" },
                { "id": "thor-1" },
                { "id": "captain-america-1" }
            ],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Hulk", "actor": "Mark Ruffalo", "id": "bruce-banner" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Hawkeye", "actor": "Jeremy Renner", "id": "clint-barton" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Maria Hill", "actor": "Cobie Smulders", "id": "maria-hill" },
            ]
        },
        {
            "id": "iron-man-3",
            "title": "Iron Man 3",
            "data": {
                "releaseDate": "04-26-2013",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2012,
                    "season" : "christmas"
                },
                "length": 130,
                "director": "Shane Black",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1300854/',
                   'value':  7.1,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc"
            },
            "moviesToWatch": [
                { "id": "iron-man-1" },
                { "id": "iron-man-2" },
                { "id": "avengers-1" }
            ],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "James Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "Bruce Banner", "actor": "Mark Ruffalo", "id": "bruce-banner", "special": "uncredited" },
            ]
        },
        {
            "id": "thor-2",
            "title": "Thor: The Dark World",
            "data": {
                "releaseDate": "10-30-2013",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2013,
                    "season" : "early"
                },
                "length": 112,
                "director": "Alan Taylor",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0800369/',
                   'value':  7.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=npvJ9FTgZbM"
            },
            "moviesToWatch": [
                { "id": "thor-1" },
                { "id": "avengers-1" }
            ],
            "mainCharacters": [
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Jane Foster", "actor": "Natalie Portman", "id": "jane-foster" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers", "special": "uncredited" },
            ]
        },
        {
            "id": "captain-america-2",
            "title": "Captain America: The Winter Soldier",
            "data": {
                "releaseDate": "04-04-2014",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2014,
                    "season" : "early"
                },
                "length": 136,
                "director": "Anthony Russo, Joe Russo",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1843866/',
                   'value':  7.7,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=7SlILk2WMTI"
            },
            "moviesToWatch": [
                { "id": "captain-america-1" },
                { "id": "avengers-1" }
            ],
            "mainCharacters": [
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Winter Soldier", "actor": "Sebastian Stan", "id": "bucky-barnes" },
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "sam-wilson" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Maria Hill", "actor": "Cobie Smulders", "id": "maria-hill" },
                { "name": "Peggy Carter", "actor": "Hayley Atwell", "id": "peggy-carter" },
                { "name": "Scarlet Witch", "actor": "Elizabeth Olsen", "id": "wanda-maximoff", "special": "uncredited" },
            ]
        },
        {
            "id": "gog-1",
            "title": "Guardians of the Galaxy Vol.1",
            "data": {
                "releaseDate": "07-31-2014",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2014,
                    "season" : "spring"
                },
                "length": 122,
                "director": "James Gunn",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt2015381/',
                   'value':  8.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=d96cjJhvlMA"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Star-Lord", "actor": "Chris Pratt", "id": "peter-quill" },
                { "name": "Gamora", "actor": "Zoe Saldaña", "id": "gamora" },
                { "name": "Drax", "actor": "Dave Bautista", "id": "drax" },
                { "name": "Rocket", "actor": "Bradley Cooper", "id": "rocket", "special": "voice" },
                { "name": "Groot", "actor": "Vin Diesel", "id": "groot", "special": "voice" },
                { "name": "Nebula", "actor": "Karen Gillan", "id": "nebula" }
            ]
        },
        {
            "id": "gog-2",
            "title": "Guardians of the Galaxy Vol.2",
            "data": {
                "releaseDate": "04-28-2017",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2014,
                    "season" : "middle"
                },
                "length": 136,
                "director": "James Gunn",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt3896198/',
                   'value':  7.6,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=2cv2ueYnKjg"
            },
            "moviesToWatch": [
                { "id": "gog-1" }
            ],
            "mainCharacters": [
                { "name": "Star-Lord", "actor": "Chris Pratt", "id": "peter-quill" },
                { "name": "Gamora", "actor": "Zoe Saldaña", "id": "gamora" },
                { "name": "Drax", "actor": "Dave Bautista", "id": "drax" },
                { "name": "Mantis", "actor": "Pom Klementieff", "id": "mantis" },
                { "name": "Rocket", "actor": "Bradley Cooper", "id": "rocket", "special": "voice" },
                { "name": "Groot", "actor": "Vin Diesel", "id": "groot", "special": "voice" },
                { "name": "Nebula", "actor": "Karen Gillan", "id": "nebula" }
            ]
        },
        {
            "id": "avengers-2",
            "title": "Avengers: Age of Ultron",
            "data": {
                "releaseDate": "04-22-2015",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2015,
                    "season" : null
                },
                "length": 141,
                "director": "Joss Whedon",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt2395427/',
                   'value':  7.3,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=tmeOjFno6Do"
            },
            "moviesToWatch": [
                { "id": "avengers-1" }
            ],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Hulk", "actor": "Mark Ruffalo", "id": "bruce-banner" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Hawkeye", "actor": "Jeremy Renner", "id": "clint-barton" },
                { "name": "Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "sam-wilson" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Maria Hill", "actor": "Cobie Smulders", "id": "maria-hill" },
                { "name": "Scarlet Witch", "actor": "Elizabeth Olsen", "id": "wanda-maximoff" },
                { "name": "Vision", "actor": "Paul Bettany", "id": "vision" },
            ]
        },
        {
            "id": "ant-man-1",
            "title": "Ant-Man",
            "data": {
                "releaseDate": "07-14-2015",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2015,
                    "season" : null
                },
                "length": 117,
                "director": "Peyton Reed",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0478970/',
                   'value':  7.2,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=pWdKf3MneyI"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Ant-Man", "actor": "Paul Rudd", "id": "scott-lang" },
                { "name": "Hope van Dyne", "actor": "Evangeline Lilly", "id": "hope-van-dyne" },
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "sam-wilson" },
                { "name": "Peggy Carter", "actor": "Hayley Atwell", "id": "peggy-carter" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers", "special": "uncredited" },
                { "name": "Winter Soldier", "actor": "Sebastian Stan", "id": "bucky-barnes", "special": "uncredited" },
            ]
        },
        {
            "id": "captain-america-3",
            "title": "Captain America: Civil War",
            "data": {
                "releaseDate": "04-27-2016",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2016,
                    "season" : null
                },
                "length": 147,
                "director": "Anthony Russo, Joe Russo",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt3498820/',
                   'value':  7.8,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=dKrVegVI0Us"
            },
            "moviesToWatch": [
                { "id": "captain-america-2" },
                { "id": "avengers-2" }
            ],
            "mainCharacters": [
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Winter Soldier", "actor": "Sebastian Stan", "id": "bucky-barnes" },
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "sam-wilson" },
                { "name": "Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "Hawkeye", "actor": "Jeremy Renner", "id": "clint-barton" },
                { "name": "Black Panther", "actor": "Chadwick Boseman", "id": "tchalla" },
                { "name": "Vision", "actor": "Paul Bettany", "id": "vision" },
                { "name": "Scarlet Witch", "actor": "Elizabeth Olsen", "id": "wanda-maximoff" },
                { "name": "Ant-Man", "actor": "Paul Rudd", "id": "scott-lang" },
                { "name": "Spider-Man", "actor": "Tom Holland", "id": "peter-parker" },
            ]
        },
        {
            "id": "spider-man-1",
            "title": "Spider-Man: Homecoming",
            "data": {
                "releaseDate": "06-28-2017",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2016,
                    "season" : null
                },
                "length": 133,
                "director": "Jon Watts",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt2250912/',
                   'value':  7.4,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=U0D3AOldjMU"
            },
            "moviesToWatch": [
                { "id": "captain-america-3" }
            ],
            "mainCharacters": [
                { "name": "Spider-Man", "actor": "Tom Holland", "id": "peter-parker" },
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers", "special": "uncredited" },
            ]
        },
        {
            "id": "black-widow",
            "title": "Black Widow",
            "data": {
                "releaseDate": "07-07-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2016,
                    "season" : null
                },
                "length": 133,
                "director": "Cate Shortland",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt3480822/',
                   'value':  6.6,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=Fp9pNPdNwjI"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Yelena Belova", "actor": "Florence Pugh", "id": "yelena-belova" },
            ]
        },
        {
            "id": "black-panther-1",
            "title": "Black Panther",
            "data": {
                "releaseDate": "02-14-2018",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2017,
                    "season" : null
                },
                "length": 134,
                "director": "Ryan Coogler",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1825683/',
                   'value':  7.3,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=xjDjIWPwcPU"
            },
            "moviesToWatch": [
                { "id": "captain-america-3" }
            ],
            "mainCharacters": [
                { "name": "Black Panther", "actor": "Chadwick Boseman", "id": "t-challa" },
                { "name": "Shuri", "actor": "Letitia Wright", "id": "shuri" },
                { "name": "Winter Soldier", "actor": "Sebastian Stan", "id": "bucky-barnes", "special": "uncredited" },
            ]
        },
        {
            "id": "doctor-strange-1",
            "title": "Doctor Strange",
            "data": {
                "releaseDate": "10-27-2016",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2017,
                    "season" : null
                },
                "length": 115,
                "director": "Scott Derrickson",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1211837/',
                   'value':  7.5,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=HSzx-zryEgM"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Doctor Strange", "actor": "Benedict Cumberbatch", "id": "doctor-strange" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor", "special": "uncredited" },
            ]
        },
        {
            "id": "thor-3",
            "title": "Thor: Ragnarok",
            "data": {
                "releaseDate": "10-25-2017",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2017,
                    "season" : null
                },
                "length": 130,
                "director": "Taika Waititi",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt3501632/',
                   'value':  7.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=ue80QwXMRHg"
            },
            "moviesToWatch": [
                { "id": "avengers-2" }
            ],
            "mainCharacters": [
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
                { "name": "Valkyrie", "actor": "Tessa Thompson", "id": "valkyrie" },
                { "name": "Hulk", "actor": "Mark Ruffalo", "id": "bruce-banner" },
                { "name": "Doctor Strange", "actor": "Benedict Cumberbatch", "id": "doctor-strange" },
            ]
        },
        {
            "id": "ant-man-2",
            "title": "Ant-Man and the Wasp",
            "data": {
                "releaseDate": "07-04-2018",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2018,
                    "season" : "start"
                },
                "length": 118,
                "director": "Peyton Reed",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt5095030/',
                   'value':  7.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=UUkn-enk2RU"
            },
            "moviesToWatch": [
                { "id": "ant-man-1" },
                { "id": "captain-america-3" }
            ],
            "mainCharacters": [
                { "name": "Ant-Man", "actor": "Paul Rudd", "id": "scott-lang" },
                { "name": "Wasp", "actor": "Evangeline Lilly", "id": "hope-van-dyne" },
            ]
        },
        {
            "id": "avengers-3",
            "title": "Avengers: Infinity War",
            "data": {
                "releaseDate": "04-25-2018",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2018,
                    "season" : "spring"
                },
                "length": 149,
                "director": "Anthony Russo, Joe Russo",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt4154756/',
                   'value':  8.4,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Hulk", "actor": "Mark Ruffalo", "id": "bruce-banner" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "sam-wilson" },
                { "name": "Bucky Barnes", "actor": "Sebastian Stan", "id": "bucky-barnes" },
                { "name": "Black Panther", "actor": "Chadwick Boseman", "id": "tchalla" },
                { "name": "Spider-Man", "actor": "Tom Holland", "id": "peter-parker" },
                { "name": "Doctor Strange", "actor": "Benedict Cumberbatch", "id": "doctor-strange" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Scarlet Witch", "actor": "Elizabeth Olsen", "id": "wanda-maximoff" },
                { "name": "Vision", "actor": "Paul Bettany", "id": "vision" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
                { "name": "Star-Lord", "actor": "Chris Pratt", "id": "peter-quill" },
                { "name": "Gamora", "actor": "Zoe Saldaña", "id": "gamora" },
                { "name": "Drax", "actor": "Dave Bautista", "id": "drax" },
                { "name": "Mantis", "actor": "Pom Klementieff", "id": "mantis" },
                { "name": "Rocket", "actor": "Bradley Cooper", "id": "rocket", "special": "voice" },
                { "name": "Groot", "actor": "Vin Diesel", "id": "groot", "special": "voice" },
                { "name": "Nebula", "actor": "Karen Gillan", "id": "nebula" },
                { "name": "Shuri", "actor": "Letitia Wright", "id": "shuri" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury", "special": "uncredited" },
                { "name": "Maria Hill", "actor": "Cobie Smulders", "id": "maria-hill", "special": "uncredited" },
            ]
        },
        {
            "id": "avengers-4",
            "title": "Avengers: Endgame",
            "data": {
                "releaseDate": "04-24-2019",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2023,
                    "season" : "spring"
                },
                "length": 181,
                "director": "Anthony Russo, Joe Russo",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt4154796/',
                   'value':  8.4,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c"
            },
            "moviesToWatch": [
                { "id": "avengers-3" }
            ],
            "mainCharacters": [
                { "name": "Iron Man", "actor": "Robert Downey Jr", "id": "tony-stark" },
                { "name": "Captain America", "actor": "Chris Evans", "id": "steve-rogers" },
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Hulk", "actor": "Mark Ruffalo", "id": "bruce-banner" },
                { "name": "Black Widow", "actor": "Scarlett Johansson", "id": "natasha-romanoff" },
                { "name": "Hawkeye", "actor": "Jeremy Renner", "id": "clint-barton" },
                { "name": "Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "Ant-Man", "actor": "Paul Rudd", "id": "scott-lang" },
                { "name": "Captain Marvel", "actor": "Brie Larson", "id": "carol-danvers" },
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "sam-wilson" },
                { "name": "Bucky Barnes", "actor": "Sebastian Stan", "id": "bucky-barnes" },
                { "name": "Black Panther", "actor": "Chadwick Boseman", "id": "tchalla" },
                { "name": "Spider-Man", "actor": "Tom Holland", "id": "peter-parker" },
                { "name": "Doctor Strange", "actor": "Benedict Cumberbatch", "id": "doctor-strange" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Scarlet Witch", "actor": "Elizabeth Olsen", "id": "wanda-maximoff" },
                { "name": "Wasp", "actor": "Evangeline Lilly", "id": "hope-van-dyne" },
                { "name": "Valkyrie", "actor": "Tessa Thompson", "id": "valkyrie" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
                { "name": "Star-Lord", "actor": "Chris Pratt", "id": "peter-quill" },
                { "name": "Gamora", "actor": "Zoe Saldaña", "id": "gamora" },
                { "name": "Drax", "actor": "Dave Bautista", "id": "drax" },
                { "name": "Mantis", "actor": "Pom Klementieff", "id": "mantis" },
                { "name": "Rocket", "actor": "Bradley Cooper", "id": "rocket", "special": "voice" },
                { "name": "Groot", "actor": "Vin Diesel", "id": "groot", "special": "voice" },
                { "name": "Nebula", "actor": "Karen Gillan", "id": "nebula" },
                { "name": "Shuri", "actor": "Letitia Wright", "id": "shuri" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Peggy Carter", "actor": "Hayley Atwell", "id": "peggy-carter" },
            ]
        }
    ]

movies.multiverseSaga =
    [
        {
            "id": "wandavision",
            "title": "WandaVision",
            "data": {
                "releaseDate": "01-15-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2023,
                    "season" : "summer"
                },
                "length": 350,
                "episodes": 9,
                "director": "Matt Shakman",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9140560/',
                   'value':  7.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=sj9J2ecsSpo"
            },
            "moviesToWatch": [
                { "id": "avengers-2" },
                { "id": "avengers-3" },
                { "id": "avengers-4" }
            ],
            "mainCharacters": [
                { "name": "Wanda Maximoff", "actor": "Elizabeth Olsen", "id": "wanda-maximoff" },
                { "name": "Vision", "actor": "Paul Bettany", "id": "vision" },
                { "name": "Monica Rambeau", "actor": "Teyonah Parris", "id": "monica-rambeau" },
            ]
        },
        {
            "id": "tfatws",
            "title": "The Falcon and the Winter Soldier",
            "data": {
                "releaseDate": "03-19-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2024,
                    "season" : "early"
                },
                "length": 300,
                "episodes": 6,
                "director": "Kari Skogland",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9208876/',
                   'value':  7.1,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=ojGHE581lsM"
            },
            "moviesToWatch": [
                { "id": "captain-america-3" },
                { "id": "avengers-3" },
                { "id": "avengers-4" }
            ],
            "mainCharacters": [
                { "name": "Falcon", "actor": "Anthony Mackie", "id": "falcon" },
                { "name": "Winter Soldier", "actor": "Sebastian Stan", "id": "bucky-barnes" },
                { "name": "General Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
            ]
        },
        {
            "id": "eternals",
            "title": "Eternals",
            "data": {
                "releaseDate": "11-05-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2023,
                    "season" : "fall"
                },
                "length": 157,
                "director": "Chloé Zhao",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9032400/',
                   'value':  6.3,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=0WVDKZJkGlY"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Sersi", "actor": "Gemma Chan", "id": "sersi" },
                { "name": "Thena", "actor": "Angelina Jolie", "id": "thena" },
                { "name": "Kingo", "actor": "Kumail Nanjiani", "id": "kingo" },
                { "name": "Druig", "actor": "Barry Keoghan", "id": "druig" },
                { "name": "Makkari", "actor": "Lauren Ridloff", "id": "makkari" },
                { "name": "Phastos", "actor": "Brian Tyree Henry", "id": "phastos" },
            ]
        },
        {
            "id": "shang-chi-1",
            "title": "Shang-Chi and the Legend of the Ten Rings",
            "data": {
                "releaseDate": "09-03-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2024,
                    "season" : "spring"
                },
                "length": 132,
                "director": "Destin Cretton",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9376612/',
                   'value':  7.3,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=8YjFbMbfXaQ"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Shang-Chi", "actor": "Simu Liu", "id": "shang-chi" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Bruce Banner", "actor": "Mark Ruffalo", "id": "bruce-banner", "special": "uncredited" },
                { "name": "Captain Marvel", "actor": "Brie Larson", "id": "carol-danvers", "special": "uncredited" },
            ]
        },
        {
            "id": "spider-man-2",
            "title": "Spider-Man: Far From Home",
            "data": {
                "releaseDate": "07-02-2019",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2024,
                    "season" : "summer"
                },
                "length": 129,
                "director": "Jon Watts",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt6320628/',
                   'value':  7.4,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=Nt9L1jCKGnE"
            },
            "moviesToWatch": [
                { "id": "spider-man-1" },
                { "id": "avengers-3" },
                { "id": "avengers-4" }
            ],
            "mainCharacters": [
                { "name": "Spider-Man", "actor": "Tom Holland", "id": "peter-parker" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Maria Hill", "actor": "Cobie Smulders", "id": "maria-hill" },
                { "name": "Talos", "actor": "Ben Mendelsohn", "id": "talos", "special": "uncredited" },

            ]
        },
        {
            "id": "spider-man-3",
            "title": "Spider-Man: No Way Home",
            "data": {
                "releaseDate": "12-17-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2024,
                    "season" : "fall"
                },
                "length": 149,
                "director": "Jon Watts",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10872600/',
                   'value':  8.2,
                },
                "streaming": "prime",
                "trailer": "https://www.youtube.com/watch?v=rt-2cxAiPJk"
            },
            "moviesToWatch": [
                { "id": "spider-man-2" },
                { "id": "sm-1" },
                { "id": "sm-2" },
                { "id": "sm-3" },
                { "id": "asm-1" },
                { "id": "asm-2" },

            ],
            "mainCharacters": [
                { "name": "Spider-Man", "actor": "Tom Holland", "id": "peter-parker" },
                { "name": "Doctor Strange", "actor": "Benedict Cumberbatch", "id": "doctor-strange" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Spider-Man", "actor": "Tobey Maguire", "id": "peter-parker-sm" },
                { "name": "Spider-Man", "actor": "Andrew Garfield", "id": "peter-parker-asm" },

            ]
        },
        {
            "id": "doctor-strange-2",
            "title": "Doctor Strange in the Multiverse of Madness",
            "data": {
                "releaseDate": "05-06-2022",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2024,
                    "season" : "fall"
                },
                "length": 126,
                "director": "Sam Raimi",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9419884/',
                   'value':  6.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=rt-2cxAiPJk"
            },
            "moviesToWatch": [
                { "id": "doctor-strange-1" },
                { "id": "wandavision" }
            ],
            "mainCharacters": [
                { "name": "Doctor Strange", "actor": "Benedict Cumberbatch", "id": "doctor-strange" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Scarlet Witch", "actor": "Elizabeth Olsen", "id": "wanda-maximoff" },
                { "name": "America Chavez", "actor": "Xochitl Gomez", "id": "america-chavez" },
                { "name": "Captain Carter", "actor": "Hayley Atwell", "id": "peggy-carter" },
            ]
        },
        {
            "id": "hawkeye",
            "title": "Hawkeye",
            "data": {
                "releaseDate": "11-24-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2024,
                    "season" : "christmas"
                },
                "length": 297,
                "episodes": 6,
                "director": "Rhys Thomas",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10160804/',
                   'value':  7.5,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=5VYb3B1ETlk"
            },
            "moviesToWatch": [
                { "id": "avengers-3" },
                { "id": "avengers-4" }
            ],
            "mainCharacters": [
                { "name": "Hawkeye", "actor": "Jeremy Renner", "id": "clint-barton" },
                { "name": "Kate Bishop", "actor": "Hailee Steinfeld", "id": "kate-bishop" },
                { "name": "Yelena Belova", "actor": "Florence Pugh", "id": "yelena-belova" },
                { "name": "Maya Lopez", "actor": "Alaqua Cox", "id": "maya-lopez" },
            ]
        },
        {
            "id": "she-hulk",
            "title": "She-Hulk",
            "data": {
                "releaseDate": "08-17-2022",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2025,
                    "season" : "summer"
                },
                "length": 309,
                "episodes": 9,
                "director": "Kat Coiro",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10857160/',
                   'value':  5.2,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=u7JsKhI2An0"
            },
            "moviesToWatch": [
                { "id": "the-incredible-hulk" },
                { "id": "daredevil" }
            ],
            "mainCharacters": [
                { "name": "She-Hulk", "actor": "Tatiana Maslany", "id": "jennifer-walters" },
                { "name": "Hulk", "actor": "Mark Ruffalo", "id": "bruce-banner" },
                { "name": "Wong", "actor": "Benedict Wong", "id": "wong" },
                { "name": "Daredevil", "actor": "Charlie Cox", "id": "matt-murdock" },
            ]
        },
        {
            "id": "echo",
            "title": "Echo",
            "data": {
                "releaseDate": "01-09-2024",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2025,
                    "season" : "spring"
                },
                "length": 213,
                "episodes": 5,
                "director": "Sydney Freeland",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt13966962/',
                   'value':  6.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=AFUKnherhuw"
            },
            "moviesToWatch": [
                { "id": "hawkeye" },
                { "id": "daredevil" }

            ],
            "mainCharacters": [
                { "name": "Echo", "actor": "Alaqua Cox", "id": "maya-lopez" },
                { "name": "Daredevil", "actor": "Charlie Cox", "id": "matt-murdock" },
            ]
        },
        {
            "id": "moon-knight",
            "title": "Moon Knight",
            "data": {
                "releaseDate": "03-30-2022",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2025,
                    "season" : "early"
                },
                "length": 282,
                "episodes": 6,
                "director": "Mohamed Diab",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10234724/',
                   'value':  7.3,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=x7Krla_UxRg"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Moon Knight", "actor": "Oscar Isaac", "id": "marc-spector" },
            ]
        },
        {
            "id": "black-panther-2",
            "title": "Black Panther: Wakanda Forever",
            "data": {
                "releaseDate": "11-11-2022",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2025,
                    "season" : "spring"
                },
                "length": 161,
                "director": "Ryan Coogler",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1825683/',
                   'value':  7.3,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=RlOB3UALvrQ"
            },
            "moviesToWatch": [
                { "id": "black-panther-1" }
            ],
            "mainCharacters": [
                { "name": "Black Panther", "actor": "Letitia Wright", "id": "shuri" },
                { "name": "Riri Williams", "actor": "Dominique Thorne", "id": "riri-williams" },
            ]
        },
        {
            "id": "thor-4",
            "title": "Thor: Love and Thunder",
            "data": {
                "releaseDate": "07-08-2022",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2025,
                    "season" : "end"
                },
                "length": 119,
                "director": "Taika Waititi",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10648342/',
                   'value':  6.2,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=Go8nTmfrQd8"
            },
            "moviesToWatch": [
                { "id": "thor-1" },
                { "id": "thor-2" },
                { "id": "thor-3" },
                { "id": "avengers-4" }
            ],
            "mainCharacters": [
                { "name": "Thor", "actor": "Chris Hemsworth", "id": "thor" },
                { "name": "Jane Foster", "actor": "Natalie Portman", "id": "jane-foster" },
                { "name": "Valkyrie", "actor": "Tessa Thompson", "id": "valkyrie" },
                { "name": "Star-Lord", "actor": "Chris Pratt", "id": "peter-quill" },
                { "name": "Drax", "actor": "Dave Bautista", "id": "drax" },
                { "name": "Mantis", "actor": "Pom Klementieff", "id": "mantis" },
                { "name": "Rocket", "actor": "Bradley Cooper", "id": "rocket", "special": "voice" },
                { "name": "Groot", "actor": "Vin Diesel", "id": "groot", "special": "voice" },
            ]
        },
        {
            "id": "gog-3",
            "title": "Guardians of the Galaxy Vol.3",
            "data": {
                "releaseDate": "05-05-2023",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "middle"
                },
                "length": 149,
                "director": "James Gunn",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt6791350/',
                   'value':  7.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=u3V5KDHRQvk&pp=ygUNZ29nIDMgdHJhaWxlcg%3D%3D"
            },
            "moviesToWatch": [
                { "id": "gog-1" },
                { "id": "gog-2" },
                { "id": "avengers-3" },
                { "id": "avengers-4" }
            ],
            "mainCharacters": [
                { "name": "Star-Lord", "actor": "Chris Pratt", "id": "peter-quill" },
                { "name": "Gamora", "actor": "Zoe Saldaña", "id": "gamora" },
                { "name": "Drax", "actor": "Dave Bautista", "id": "drax" },
                { "name": "Mantis", "actor": "Pom Klementieff", "id": "mantis" },
                { "name": "Rocket", "actor": "Bradley Cooper", "id": "rocket", "special": "voice" },
                { "name": "Groot", "actor": "Vin Diesel", "id": "groot", "special": "voice" },
                { "name": "Nebula", "actor": "Karen Gillan", "id": "nebula" }
            ]
        },
        {
            "id": "loki-1",
            "title": "Loki S1",
            "data": {
                "releaseDate": "06-09-2021",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "early",
                    "special" : "Out of Time"
                },
                "length": 287,
                "episodes": 6,
                "director": "Kate Herron",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9140554/',
                   'value':  8.2,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=nW948Va-l10"
            },
            "moviesToWatch": [
            ],
            "mainCharacters": [
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
            ]
        },
        {
            "id": "ant-man-3",
            "title": "Ant-Man and the Wasp: Quantumania",
            "data": {
                "releaseDate": "02-17-2023",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "early"
                },
                "length": 125,
                "director": "Peyton Reed",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10954600/',
                   'value':  6.0,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=ZlNFpri-Y40"
            },
            "moviesToWatch": [
                { "id": "ant-man-2" },
                { "id": "loki-1" },
                { "id": "loki-2" }
            ],
            "mainCharacters": [
                { "name": "Ant-Man", "actor": "Paul Rudd", "id": "scott-lang" },
                { "name": "Wasp", "actor": "Evangeline Lilly", "id": "hope-van-dyne" },
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki", "special": "uncredited" },
            ]
        },
        {
            "id": "loki-2",
            "title": "Loki S2",
            "data": {
                "releaseDate": "10-06-2023",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "early",
                    "special" : "Out of Time"
                },
                "length": 299,
                "episodes": 6,
                "director": "Kate Herron",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt9140554/',
                   'value':  8.2,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=dug56u8NN7g"
            },
            "moviesToWatch": [
                { "id": "loki-1" },
            ],
            "mainCharacters": [
                { "name": "Loki", "actor": "Tom Hiddleston", "id": "loki" },
            ]
        },
        {
            "id": "deadpool-3",
            "title": "Deadpool & Wolverine",
            "data": {
                "releaseDate": "07-25-2024",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "early",
                    "special" : "Out of Time"
                },
                "length": 128,
                "director": "David Leitch",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt6263850/',
                   'value':  7.6,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=ZIM1HydF9UA"
            },
            "moviesToWatch": [
                { "id": "deadpool-1" },
                { "id": "deadpool-2" },
                { "id": "loki-1" },
                { "id": "loki-2" }
            ],
            "mainCharacters": [
                { "name": "Deadpool", "actor": "Ryan Reynolds", "id": "wade-wilson" },
                { "name": "Wolverine", "actor": "Hugh Jackman", "id": "logan" },
            ]
        },
        {
            "id": "ms-marvel",
            "title": "Ms. Marvel",
            "data": {
                "releaseDate": "06-08-2022",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2025,
                    "season" : "fall"
                },
                "length": 300,
                "episodes": 6,
                "director": "Bisha K. Ali",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10857164/',
                   'value':  6.2,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=m9EX0f6V11Y"
            },
            "moviesToWatch": [
                { "id": "captain-marvel" }
            ],
            "mainCharacters": [
                { "name": "Ms. Marvel", "actor": "Iman Vellani", "id": "kamala-khan" },
                { "name": "Captain Marvel", "actor": "Brie Larson", "id": "carol-danvers", "special": "uncredited" },
            ]
        },
        {
            "id": "the-marvels",
            "title": "The Marvels",
            "data": {
                "releaseDate": "07-28-2023",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "end"
                },
                "length": 105,
                "director": "Nia DaCosta",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt10676048/',
                   'value':  5.5,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=wS_qbDztgVY&pp=ygUTdGhlIG1hcnZlbHMgdHJhaWxlcg%3D%3D"
            },
            "moviesToWatch": [
                { "id": "captain-marvel" },
                { "id": "wandavision" },
                { "id": "ms-marvel" }

            ],
            "mainCharacters": [
                { "name": "Captain Marvel", "actor": "Brie Larson", "id": "carol-danvers" },
                { "name": "Ms. Marvel", "actor": "Iman Vellani", "id": "kamala-khan" },
                { "name": "Monica Rambeau", "actor": "Teyonah Parris", "id": "monica-rambeau" },
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Valkyrie", "actor": "Tessa Thompson", "id": "valkyrie" },
                { "name": "Kate Bishop", "actor": "Hailee Steinfeld", "id": "kate-bishop", "special": "uncredited" }
            ]
        },
        {
            "id": "secret-invasion",
            "title": "Secret Invasion",
            "data": {
                "releaseDate": "06-21-2023",    //mm-dd-yyyy
                "movieDate": 
                {
                    "year": 2026,
                    "season" : "fall"
                },
                "length": 272,
                "episodes": 6,
                "director": "Ali Selim",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt13157618/',
                   'value':  5.9,
                },
                "streaming": "disney+",
                "trailer": "https://www.youtube.com/watch?v=qZVTkn2NjS0&pp=ygUXc2VjcmV0IGludmFzaW9uIHRyYWlsZXI%3D"
            },
            "moviesToWatch": [
                { "id": "captain-marvel" }
            ],
            "mainCharacters": [
                { "name": "Nick Fury", "actor": "Samuel L. Jackson", "id": "nick-fury" },
                { "name": "Maria Hill", "actor": "Cobie Smulders", "id": "maria-hill" },
                { "name": "Colonel Rhodes", "actor": "Don Cheadle", "id": "james-rhodes" },
                { "name": "G'iah", "actor": "Emilia Clarke", "id": "giah" },
                { "name": "Talos", "actor": "Ben Mendelsohn", "id": "talos" },
            ]
        },
    ]

movies.sony = [
    {
        "id": "sm-1",
        "title": "Spider-Man",
        "data": {
            "releaseDate": "06-21-2002",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2002,
                "season" : null
            },
        "length": 121,
            "director": "Sam Raimi",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0145487/',
                   'value':  7.4,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=_yhFofFZGcc"
        },
        "moviesToWatch": [

        ],
        "mainCharacters": [
            { "name": "Spider-Man", "actor": "Tobey Maguire", "id": "peter-parker-sm" },
        ]
    },
    {
        "id": "sm-2",
        "title": "Spider-Man 2",
        "data": {
            "releaseDate": "07-15-2004",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2004,
                "season" : null
            },
            "length": 127,
            "director": "Sam Raimi",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0316654/',
                   'value':  7.5,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=1s9Yln0YwCw&t"
        },
        "moviesToWatch": [
            { "id": "sm-1" }
        ],
        "mainCharacters": [
            { "name": "Spider-Man", "actor": "Tobey Maguire", "id": "peter-parker-sm" },
        ]
    },
    {
        "id": "sm-3",
        "title": "Spider-Man 3",
        "data": {
            "releaseDate": "05-03-2007",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2007,
                "season" : null
            },
            "length": 139,
            "director": "Sam Raimi",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0413300/',
                   'value':  6.3,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=wPosLpgMtTY"
        },
        "moviesToWatch": [
            { "id": "sm-1" },
            { "id": "sm-2" }
        ],
        "mainCharacters": [
            { "name": "Spider-Man", "actor": "Tobey Maguire", "id": "peter-parker-sm" },
        ]
    },
    {
        "id": "asm-1",
        "title": "Amazing Spider-Man",
        "data": {
            "releaseDate": "07-03-2012",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2012,
                "season" : null
            },
            "length": 136,
            "director": "Mark Webb",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt0948470/',
                   'value':  6.9,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=-tnxzJ0SSOw"
        },
        "moviesToWatch": [

        ],
        "mainCharacters": [
            { "name": "Spider-Man", "actor": "Andrew Garfield", "id": "peter-parker-asm" },
        ]
    },
    {
        "id": "asm-2",
        "title": "Amazing Spider-Man 2",
        "data": {
            "releaseDate": "04-17-2014",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2014,
                "season" : null
            },
            "length": 142,
            "director": "Mark Webb",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1872181/',
                   'value':  6.6,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=nbp3Ra3Yp74"
        },
        "moviesToWatch": [
            { "id": "asm-1" }
        ],
        "mainCharacters": [
            { "name": "Spider-Man", "actor": "Andrew Garfield", "id": "peter-parker-asm" },
        ]
    }
]

movies.netflix = [
    {
        "id": "daredevil",
        "title": "Daredevil",
        "data": {
            "releaseDate": "04-10-2015",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2014,
                "season" : null
            },
            "length": 2106,
            "episodes": 39,
            "director": "Steven S. DeKnight, Erik Oleson",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt3322312/',
                   'value':  8.6,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=jAy6NJ_D5vU"
        },
        "moviesToWatch": [
        ],
        "mainCharacters": [
            { "name": "Daredevil", "actor": "Charlie Cox", "id": "matt-murdock" },
        ]
    }
]

movies.fox = [
    {
        "id": "deadpool-1",
        "title": "Deadpool",
        "data": {
            "releaseDate": "02-12-2016",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2016,
                "season" : null
            },
            "length": 108,
            "director": "Tim Miller",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt1431045/',
                   'value':  8.0,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=FyKWUTwSYAs"
        },
        "moviesToWatch": [
        ],
        "mainCharacters": [
            { "name": "Deadpool", "actor": "Ryan Reynolds", "id": "deadpool" },
        ]
    },
    {
        "id": "deadpool-2",
        "title": "Deadpool 2",
        "data": {
            "releaseDate": "05-18-2018",    //mm-dd-yyyy
            "movieDate": 
            {
                "year": 2018,
                "season" : null
            },
            "length": 119,
            "director": "David Leitch",
                "imdb": {
                   'link': 'https://www.imdb.com/title/tt5463162/',
                   'value':  7.6,
                },
            "streaming": "disney+",
            "trailer": "https://www.youtube.com/watch?v=D86RtevtfrA"
        },
        "moviesToWatch": [
            { "id": "deadpool-1" }
        ],
        "mainCharacters": [
            { "name": "Deadpool", "actor": "Ryan Reynolds", "id": "deadpool" },
        ]
    }
]


characters = {
    "heroes": [
        {
            "id": "tony-stark",
            "name": "Tony Stark",
            "actor": [
                {
                    "name": "Robert Downey Jr",
                    "birth": "04/04/1965",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Robert_Downey_Jr."
                }
            ]
        },
        {
            "id": "steve-rogers",
            "name": "Steve Rogers",
            "actor": [
                {
                    "name": "Chris Evans",
                    "birth": "13/06/1981",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Chris_Evans_(actor)"
                }
            ]
        },
        {
            "id": "thor",
            "name": "Thor Odinson",
            "actor": [
                {
                    "name": "Chris Hemsworth",
                    "birth": "11/08/1983",
                    "originCountry": "Australia",
                    "info": "https://en.wikipedia.org/wiki/Chris_Hemsworth"
                }
            ]
        },
        {
            "id": "bruce-banner",
            "name": "Bruce Banner",
            "actor": [
                {
                    "name": "Mark Ruffalo",
                    "birth": "22/11/1967",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Mark_Ruffalo"
                },
                {
                    "name": "Edward Norton",
                    "birth": "18/08/1969",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Edward_Norton"
                }
            ]
        },
        {
            "id": "natasha-romanoff",
            "name": "Natasha Romanoff",
            "actor": [
                {
                    "name": "Scarlett Johansson",
                    "birth": "22/11/1984",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Scarlett_Johansson"
                }
            ]
        },
        {
            "id": "clint-barton",
            "name": "Clint Barton",
            "actor": [
                {
                    "name": "Jeremy Renner",
                    "birth": "07/01/1971",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Jeremy_Renner"
                }
            ]
        },
        {
            "id": "nick-fury",
            "name": "Nick Fury",
            "actor": [
                {
                    "name": "Samuel L. Jackson",
                    "birth": "21/12/1948",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Samuel_L._Jackson"
                }
            ]
        },
        {
            "id": "maria-hill",
            "name": "Maria Hill",
            "actor": [
                {
                    "name": "Cobie Smulders",
                    "birth": "03/04/1982",
                    "originCountry": "Canada",
                    "info": "https://en.wikipedia.org/wiki/Cobie_Smulders"
                }
            ]
        },
        {
            "id": "loki",
            "name": "Loki",
            "actor": [
                {
                    "name": "Tom Hiddleston",
                    "birth": "09/02/1981",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Tom_Hiddleston"
                }
            ]
        },
        {
            "id": "bucky-barnes",
            "name": "Bucky Barnes",
            "actor": [
                {
                    "name": "Sebastian Stan",
                    "birth": "13/08/1982",
                    "originCountry": "Romania",
                    "info": "https://en.wikipedia.org/wiki/Sebastian_Stan"
                }
            ]
        },
        {
            "id": "jane-foster",
            "name": "Jane Foster",
            "actor": [
                {
                    "name": "Natalie Portman",
                    "birth": "09/06/1981",
                    "originCountry": "Israel",
                    "info": "https://en.wikipedia.org/wiki/Natalie_Portman"
                }
            ]
        },
        {
            "id": "peggy-carter",
            "name": "Peggy Carter",
            "actor": [
                {
                    "name": "Hayley Atwell",
                    "birth": "05/04/1982",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Hayley_Atwell"
                }
            ]
        },
        {
            "id": "peter-quill",
            "name": "Peter Quill",
            "actor": [
                {
                    "name": "Chris Pratt",
                    "birth": "21/06/1979",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Chris_Pratt"
                }
            ]
        },
        {
            "id": "gamora",
            "name": "Gamora",
            "actor": [
                {
                    "name": "Zoe Saldaña",
                    "birth": "19/06/1978",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Zoe_Saldaña"
                }
            ]
        },
        {
            "id": "drax",
            "name": "Drax",
            "actor": [
                {
                    "name": "Dave Bautista",
                    "birth": "18/01/1969",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Dave_Bautista"
                }
            ]
        },
        {
            "id": "rocket",
            "name": "Rocket",
            "actor": [
                {
                    "name": "Bradley Cooper",
                    "birth": "05/01/1975",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Bradley_Cooper"
                }
            ]
        },
        {
            "id": "groot",
            "name": "Groot",
            "actor": [
                {
                    "name": "Vin Diesel",
                    "birth": "18/07/1967",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Vin_Diesel"
                }
            ]
        },
        {
            "id": "mantis",
            "name": "Mantis",
            "actor": [
                {
                    "name": "Pom Klementieff",
                    "birth": "03/05/1986",
                    "originCountry": "Canada",
                    "info": "https://en.wikipedia.org/wiki/Pom_Klementieff"
                }
            ]
        },
        {
            "id": "james-rhodes",
            "name": "James Rhodes",
            "actor": [
                {
                    "name": "Don Cheadle",
                    "birth": "29/11/1964",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Don_Cheadle"
                },
                {
                    "name": "Terrence Howard",
                    "birth": "11/03/1969",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Terrence_Howard"
                }
            ]
        },
        {
            "id": "sam-wilson",
            "name": "Sam Wilson",
            "actor": [
                {
                    "name": "Anthony Mackie",
                    "birth": "23/09/1978",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Anthony_Mackie"
                }
            ]
        },
        {
            "id": "wanda-maximoff",
            "name": "Wanda Maximoff",
            "actor": [
                {
                    "name": "Elizabeth Olsen",
                    "birth": "16/02/1989",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Elizabeth_Olsen"
                }
            ]
        },
        {
            "id": "vision",
            "name": "Vision",
            "actor": [
                {
                    "name": "Paul Bettany",
                    "birth": "27/05/1971",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Paul_Bettany"
                }
            ]
        },
        {
            "id": "scott-lang",
            "name": "Scott Lang",
            "actor": [
                {
                    "name": "Paul Rudd",
                    "birth": "06/04/1969",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Paul_Rudd"
                }
            ]
        },
        {
            "id": "hope-van-dyne",
            "name": "Hope van Dyne",
            "actor": [
                {
                    "name": "Evangeline Lilly",
                    "birth": "03/08/1979",
                    "originCountry": "Canada",
                    "info": "https://en.wikipedia.org/wiki/Evangeline_Lilly"
                }
            ]
        },
        {
            "id": "doctor-strange",
            "name": "Doctor Strange",
            "actor": [
                {
                    "name": "Benedict Cumberbatch",
                    "birth": "19/07/1976",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Benedict_Cumberbatch"
                }
            ]
        },
        {
            "id": "wong",
            "name": "Wong",
            "actor": [
                {
                    "name": "Benedict Wong",
                    "birth": "03/06/1971",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Benedict_Wong"
                }
            ]
        },
        {
            "id": "peter-parker",
            "name": "Peter Parker",
            "actor": [
                {
                    "name": "Tom Holland",
                    "birth": "01/06/1996",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Tom_Holland"
                }
            ]
        },
        {
            "id": "t-challa",
            "name": "T'Challa",
            "actor": [
                {
                    "name": "Chadwick Boseman",
                    "birth": "29/11/1976",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Chadwick_Boseman"
                }
            ]
        },
        {
            "id": "shuri",
            "name": "Shuri",
            "actor": [
                {
                    "name": "Letitia Wright",
                    "birth": "31/10/1993",
                    "originCountry": "Guyana",
                    "info": "https://en.wikipedia.org/wiki/Letitia_Wright"
                }
            ]
        },
        {
            "id": "valkyrie",
            "name": "Valkyrie",
            "actor": [
                {
                    "name": "Tessa Thompson",
                    "birth": "03/10/1983",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Tessa_Thompson"
                }
            ]
        },
        {
            "id": "carol-danvers",
            "name": "Carol Danvers",
            "actor": [
                {
                    "name": "Brie Larson",
                    "birth": "01/10/1989",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Brie_Larson"
                }
            ]
        },
        {
            "id": "monica-rambeau",
            "name": "Monica Rambeau",
            "actor": [
                {
                    "name": "Teyonah Parris",
                    "birth": "22/09/1987",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Teyonah_Parris"
                },
            ]
        },
        {
            "id": "kamala-khan",
            "name": "Kamala Khan",
            "actor": [
                {
                    "name": "Iman Vellani",
                    "birth": "12/08/2002",
                    "originCountry": "Pakistan",
                    "info": "https://en.wikipedia.org/wiki/Iman_Vellani"
                }
            ]
        },
        {
            "id": "kate-bishop",
            "name": "Kate Bishop",
            "actor": [
                {
                    "name": "Hailee Steinfeld",
                    "birth": "11/12/1996",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Hailee_Steinfeld"
                }
            ]
        },
        {
            "id": "yelena-belova",
            "name": "Yelena Belova",
            "actor": [
                {
                    "name": "Florence Pugh",
                    "birth": "03/01/1996",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Florence_Pugh"
                }
            ]
        },
        {
            "id": "maya-lopez",
            "name": "Maya Lopez",
            "actor": [
                {
                    "name": "Alaqua Cox",
                    "birth": "30/11/2000",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Alaqua_Cox"
                }
            ]
        },
        {
            "id": "jennifer-walters",
            "name": "Jennifer Walters",
            "actor": [
                {
                    "name": "Tatiana Maslany",
                    "birth": "22/09/1985",
                    "originCountry": "Canada",
                    "info": "https://en.wikipedia.org/wiki/Tatiana_Maslany"
                }
            ]
        },
        {
            "id": "matt-murdock",
            "name": "Matt Murdock",
            "actor": [
                {
                    "name": "Charlie Cox",
                    "birth": "15/12/1982",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Charlie_Cox"
                }
            ]
        },
        {
            "id": "peter-parker-sm",
            "name": "Peter Parker",
            "actor": [
                {
                    "name": "Tobey Maguire",
                    "birth": "27/06/1975",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Tobey_Maguire"
                }
            ]
        },
        {
            "id": "peter-parker-asm",
            "name": "Peter Parker",
            "actor": [
                {
                    "name": "Andrew Garfield",
                    "birth": "20/08/1983",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Andrew_Garfield"
                }
            ]
        },
        {
            "id": "america-chavez",
            "name": "America Chavez",
            "actor": [
                {
                    "name": "Xochitl Gomez",
                    "birth": "29/04/2006",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Xochitl_Gomez"
                }
            ]
        },
        {
            "id": "shang-chi",
            "name": "Shang-Chi",
            "actor": [
                {
                    "name": "Simu Liu",
                    "birth": "19/04/1989",
                    "originCountry": "China",
                    "info": "https://en.wikipedia.org/wiki/Simu_Liu"
                }
            ]
        },
        {
            "id": "sersi",
            "name": "Sersi",
            "actor": [
                {
                    "name": "Gemma Chan",
                    "birth": "29/11/1982",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Gemma_Chan"
                }
            ]
        },
        {
            "id": "thena",
            "name": "Thena",
            "actor": [
                {
                    "name": "Angelina Jolie",
                    "birth": "04/06/1975",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Angelina_Jolie"
                }
            ]
        },
        {
            "id": "kingo",
            "name": "Kingo",
            "actor": [
                {
                    "name": "Kumail Nanjiani",
                    "birth": "21/02/1978",
                    "originCountry": "Pakistan",
                    "info": "https://en.wikipedia.org/wiki/Kumail_Nanjiani"
                }
            ]
        },
        {
            "id": "druig",
            "name": "Druig",
            "actor": [
                {
                    "name": "Barry Keoghan",
                    "birth": "18/10/1992",
                    "originCountry": "Ireland",
                    "info": "https://en.wikipedia.org/wiki/Barry_Keoghan"
                }
            ]
        },
        {
            "id": "makkari",
            "name": "Makkari",
            "actor": [
                {
                    "name": "Lauren Ridloff",
                    "birth": "06/07/1978",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Lauren_Ridloff"
                }
            ]
        },
        {
            "id": "phastos",
            "name": "Phastos",
            "actor": [
                {
                    "name": "Brian Tyree Henry",
                    "birth": "31/03/1982",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Brian_Tyree_Henry"
                }
            ]
        },
        {
            "id": "marc-spector",
            "name": "Marc Spector",
            "actor": [
                {
                    "name": "Oscar Isaac",
                    "birth": "09/03/1979",
                    "originCountry": "Guatemala",
                    "info": "https://en.wikipedia.org/wiki/Oscar_Isaac"
                }
            ]
        },
        {
            "id": "riri-williams",
            "name": "Riri Williams",
            "actor": [
                {
                    "name": "Dominique Thorne",
                    "birth": "01/11/1998",
                    "originCountry": "USA",
                    "info": "https://en.wikipedia.org/wiki/Dominique_Thorne"
                }
            ]
        },
        {
            "id": "talos",
            "name": "Talos",
            "actor": [
                {
                    "name": "Ben Mendelsohn",
                    "birth": "03/04/1969",
                    "originCountry": "Australia",
                    "info": "https://en.wikipedia.org/wiki/Ben_Mendelsohn"
                }
            ]
        },
        {
            "id": "giah",
            "name": "G'iah",
            "actor": [
                {
                    "name": "Emilia Clarke",
                    "birth": "23/10/1986",
                    "originCountry": "UK",
                    "info": "https://en.wikipedia.org/wiki/Emilia_Clarke"
                }
            ]
        },
        {
            "id": "wade-wilson",
            "name": "Wade Wilson",
            "actor": [
                {
                    "name": "Ryan Reynolds",
                    "birth": "23/10/1976",
                    "originCountry": "Canada",
                    "info": "https://en.wikipedia.org/wiki/Ryan_Reynolds"
                }
            ]
        },
        {
            "id": "logan",
            "name": "Logan",
            "actor": [
                {
                    "name": "Hugh Jackman",
                    "birth": "12/10/1968",
                    "originCountry": "Australia",
                    "info": "https://en.wikipedia.org/wiki/Hugh_Jackman"
                }
            ]
        }
    ]
}

data = {}
data.movies = movies



//stacks

//movie stacks

mainStack = [];
Object.entries(data.movies.infinitySaga).forEach(movie => {
    mainStack.push(movie[1]);
});
Object.entries(data.movies.multiverseSaga).forEach(movie => {
    mainStack.push(movie[1]);
});

defaultStack = [];
Object.entries(data.movies).forEach(([sagaName, movies]) => {
    movies.forEach(movie => {
        defaultStack.push(movie);
    });
});

chronologicalStack = [...defaultStack];
// Definindo a ordem das seasons
const seasonOrder = ["early", "spring", "middle", "summer", "fall", "christmas", "end", null];

// Função de ordenação
chronologicalStack.sort((a, b) => {
    const yearA = a.data.movieDate.year;
    const yearB = b.data.movieDate.year;

    // Ordena por ano
    if (yearA !== yearB) {
        return yearA - yearB;
    }

    // Se os anos são iguais, ordena por season
    const seasonA = a.data.movieDate.season;
    const seasonB = b.data.movieDate.season;

    const seasonIndexA = seasonOrder.indexOf(seasonA);
    const seasonIndexB = seasonOrder.indexOf(seasonB);

    if (seasonIndexA !== seasonIndexB) {
        return seasonIndexA - seasonIndexB;
    }

    // Se as seasons são iguais, ordena por releaseDate
    const releaseDateA = new Date(a.data.releaseDate);
    const releaseDateB = new Date(b.data.releaseDate);

    return releaseDateA - releaseDateB;
});

ratingStack = [...defaultStack];
ratingStack.sort((a, b) => a.data.imdb - b.data.imdb);

lengthStack = [...defaultStack];
lengthStack.sort((a, b) => a.data.length - b.data.length);

releaseStack = [...defaultStack];
releaseStack.sort((a, b) => new Date(a.data.releaseDate) - new Date(b.data.releaseDate));

totalStacks = {}
totalStacks.movies = { mainStack, defaultStack, chronologicalStack, ratingStack, lengthStack, releaseStack }

data.stacks = totalStacks
if (localStorage.getItem('marvel-hub')) {
    const savedData = JSON.parse(localStorage.getItem('marvel-hub'));
    if (savedData.activeMovieStack) {
        data.activeMovieStack = savedData.activeMovieStack;
    } else {
        data.activeMovieStack = null;
    }
} else {
    data.activeMovieStack = null;
}


// characters


Object.entries(characters).forEach(([characterType, characters_]) => {
    characters_.forEach(character => {
        releaseStack.forEach(movie => {
            if (movie.mainCharacters.some(mainCharacter => mainCharacter.id === character.id && mainCharacter.special !== "uncredited" )) {
                if (!character.movies) {
                    character.movies = [];
                }
                character.movies.push(movie);
            }
        })
    })  
})

data.characters = characters


localStorage.clear();
localStorage.setItem('marvel-hub', JSON.stringify(data))
console.log(data)