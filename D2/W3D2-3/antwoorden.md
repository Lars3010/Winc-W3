# 1: Doe een GET request op  (Koppelingen naar een externe site.)https://api.thecatapi.com/v1/breeds

## Response
Response ingekort voor leesbaarheid
```
[
    {
        "weight": {
            "imperial": "7  -  10",
            "metric": "3 - 5"
        },
        "id": "abys",
        "name": "Abyssinian",
        "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
        "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
        "origin": "Egypt",
        "country_codes": "EG",
        "country_code": "EG",
        "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
        "life_span": "14 - 15",
        "indoor": 0,
        "lap": 1,
        "alt_names": "",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 3,
        "dog_friendly": 4,
        "energy_level": 5,
        "grooming": 1,
        "health_issues": 2,
        "intelligence": 5,
        "shedding_level": 2,
        "social_needs": 5,
        "stranger_friendly": 5,
        "vocalisation": 1,
        "experimental": 0,
        "hairless": 0,
        "natural": 1,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
        "hypoallergenic": 0
    },
    {
        "weight": {
            "imperial": "7 - 10",
            "metric": "3 - 5"
        },
        "id": "aege",
        "name": "Aegean",
        "vetstreet_url": "http://www.vetstreet.com/cats/aegean-cat",
        "temperament": "Affectionate, Social, Intelligent, Playful, Active",
        "origin": "Greece",
        "country_codes": "GR",
        "country_code": "GR",
        "description": "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
        "life_span": "9 - 12",
        "indoor": 0,
        "alt_names": "",
        "adaptability": 5,
        "affection_level": 4,
        "child_friendly": 4,
        "dog_friendly": 4,
        "energy_level": 3,
        "grooming": 3,
        "health_issues": 1,
        "intelligence": 3,
        "shedding_level": 3,
        "social_needs": 4,
        "stranger_friendly": 4,
        "vocalisation": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Aegean_cat",
        "hypoallergenic": 0
    },
    {
        "weight": {
            "imperial": "7 - 16",
            "metric": "3 - 7"
        },
        "id": "abob",
        "name": "American Bobtail",
        "cfa_url": "http://cfa.org/Breeds/BreedsAB/AmericanBobtail.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/american-bobtail",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail",
        "temperament": "Intelligent, Interactive, Lively, Playful, Sensitive",
        "origin": "United States",
        "country_codes": "US",
        "country_code": "US",
        "description": "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
        "life_span": "11 - 15",
        "indoor": 0,
        "lap": 1,
        "alt_names": "",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 3,
        "grooming": 1,
        "health_issues": 1,
        "intelligence": 5,
        "shedding_level": 3,
        "social_needs": 3,
        "stranger_friendly": 3,
        "vocalisation": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 1,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/American_Bobtail",
        "hypoallergenic": 0
    }
]
```

## Status Code

Status code: 200 OK

# 2: Doe een GET request op  (Koppelingen naar een externe site.)http://www.omdbapi.com/?i=tt3896198

## Response

```
{
    "Response": "False",
    "Error": "No API key provided."
}
```

## Status Code

Status Code: 401 Unauthorized

# 3: Voeg nu aan de Parameters het volgende toe en doe opnieuw de GET request:

## Response

```
{
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy, Sci-Fi",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 14 wins & 52 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.6",
    "imdbVotes": "526,626",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "22 Aug 2017",
    "BoxOffice": "$389,804,217",
    "Production": "Walt Disney Pictures",
    "Website": "N/A",
    "Response": "True"
}
```

## Status Code

Status Code: 200 OK

