#!/usr/bin/node

import requests
import sys

if len(sys.argv) != 2:
    print("Usage: python script.py <Movie ID>")
    sys.exit(1)

movie_id = sys.argv[1]
url = f"https://swapi.dev/api/films/{movie_id}/"
response = requests.get(url)

if response.status_code != 200:
    print(f"Error: {response.status_code} {response.reason}")
    sys.exit(1)

data = response.json()
characters = data["characters"]

for character_url in characters:
    response = requests.get(character_url)
    character_data = response.json()
    print(character_data["name"])
