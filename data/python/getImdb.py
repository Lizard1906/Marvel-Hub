
# abrir o js original
with open("data/js/insertData.js", "r", encoding="utf-8") as file:
    lines = file.readlines()

# requests
from urllib.request import urlopen, Request
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}
from bs4 import BeautifulSoup


isCheckingMovies = True
# abrir o novo js
with open("data/js/insertData.js", "w", encoding="utf-8") as file:
    for line in lines:
        if (isCheckingMovies==False):
            file.write(line)
        else:
            if (line.strip().startswith("'value':")):
                req = Request(url=imdb_to_search, headers=headers) 
                html = urlopen(req).read() 

                soup = BeautifulSoup(html, 'html.parser')
                try:
                    imdb_value = soup.find('span', {'class': 'sc-d541859f-1 imUuxf'}).text
                except:
                    imdb_value = "null"
                file.write(f"                   'value':  {imdb_value},\n")
            else:
                file.write(line)
                if (line.strip().startswith("characters")):
                    isCheckingMovies = False
                elif (line.strip().startswith("'link':")):
                    imdb_to_search = line.split(": ")[1].strip().replace(',', '').replace("'", '')