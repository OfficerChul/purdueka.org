import requests
from bs4 import BeautifulSoup

url = 'https://www.admissions.purdue.edu/majors/'

majors = []
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, features='html.parser')
    major_elements = soup.find_all('a', attrs={'data-localizer': "ignore"})
    for element in major_elements:
        majors.append(element.text)

print(majors)

