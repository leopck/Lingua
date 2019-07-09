all: 
	python main.py

freeze:
	pip freeze > requirements.txt

commit:
	git add .
	git commit -s

push:
	git push origin master
