all: 
	python main.py

freeze:
	pip freeze > requirements.txt
