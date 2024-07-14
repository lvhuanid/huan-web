import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

soup = BeautifulSoup(open("index.html"),features="lxml")
images = soup.find_all('img')
images = images[3:-1]
// 1


for image in tqdm(images):
	link = image.attrs.get("src")
	headers = {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0'
	}
	im = requests.get(link,headers=headers).content
	filname = r"Cards" + link[link.rfind("/"):]
	with open(filname,'wb') as file:
		file.write(im)

