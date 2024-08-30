from googlesearch import search

# abrir o js original
with open("data/js/insertData.js", "r", encoding="utf-8") as file:
    lines = file.readlines()


isCheckingMovies = True
imdb_link = None
# abrir o novo js
with open("data/js/insertData.js", "w", encoding="utf-8") as file:
    for line in lines:
        if (isCheckingMovies==False):
            file.write(line)
        else:
            if (line.strip().startswith('"imdb":')):
                current_value = line.strip().split(':')[1].replace(',','')
                file.write('                "imdb": {\n')
                file.write(f"                   'link': '{imdb_link}',\n")
                file.write(f"                   'value': {current_value},\n")
                file.write('                },\n')
            else:
                file.write(line)
                if (line.strip().startswith("characters")):
                    isCheckingMovies = False
                elif (line.strip().startswith('"title":')):
                    movieToSearch = line.split(":")[1].strip().replace('"', '').replace(',', '')

                    query = movieToSearch + " imdb"
                    try:
                        imdb_link = next(search(query, num_results=1))
                        print(imdb_link)
                    except Exception as e:
                        imdb_link = ''                        

