# requests
import json
import os
from urllib.request import urlopen, Request
import requests
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}
from bs4 import BeautifulSoup
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.getenv("OMDB_API_KEY")
if not API_KEY:
    raise RuntimeError("OMDB_API_KEY não encontrada. Verifica se o ficheiro .env existe e tem a chave.")


def getIMDB_(url):
    """
    DEPRECATED: Use getIMDB() instead. This function was used for scraping IMDb ratings
    """
    try:
        req = Request(url=url, headers=headers) 
        html = urlopen(req) 

        soup = BeautifulSoup(html, 'html.parser')
        imdb_value = soup.find('span', {'class': 'sc-4dc495c1-1 lbQcRY'}).text
    except:
        imdb_value = "null"
    return imdb_value

def getIMDB(imdb_id, api_key):
    """
    Use OMDBapi

    Args:
        imdb_id: ID do IMDb, ex: 'tt0111161'
        api_key: chave gratuita obtida em https://www.omdbapi.com/apikey.aspx

    Returns:
        IMDB rating
    """
    resp = requests.get(
        "https://www.omdbapi.com/",
        params={"i": imdb_id, "apikey": api_key},
        timeout=10,
    )
    resp.raise_for_status()
    data = resp.json()

    if data.get("Response") == "False":
        raise ValueError(data.get("Error", "Erro desconhecido"))

    if data.get("imdbRating") == "N/A":
        return None
    return float(data.get("imdbRating"))



def updateIMDB():
    i = 0

    with open("data/movies.json", "r", encoding="utf-8") as file:
        movies_loaded = json.load(file)

        for saga in movies_loaded:
            for movie in movies_loaded[saga]:
                imdb_id = movie['data']['imdb']['link'].split('/')[-2]
                movie['data']['imdb']['value'] = getIMDB(imdb_id, API_KEY)
                print(f"Movie: {movie['title']} | IMDb: {movie['data']['imdb']['value']}")
                i += 1

    # save the updated data back to the JSON file
    with open("data/movies.json", "w", encoding="utf-8") as file:
        json.dump(movies_loaded, file, ensure_ascii=False, indent=4)

updateIMDB()