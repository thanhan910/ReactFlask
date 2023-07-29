# React Flask app

A sentiment analysis web app made with React as frontend and Flask as backend.

This app is based on the code by Daniel Simmons-Ritchie's [Flask React Boilerplate app](https://github.com/SimmonsRitchie/flask-react-app) and the tutorials referenced in its readme.md file.


## Installation

1. First make sure that you have Python and Node.js installed.

2. Clone this repository.

3. Install npm dependencies
```bash
npm install
```
4. Install Python dependencies

Go to the backend folder:
```bash
cd backend
```

Install and activate virtual environment:
```bash
python -m venv .venv
.venv\Scripts\activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the app

In the backend folder, run:
```bash
flask --app api.py run
```
or
```bash
python api.py
```

In the frontend (root) folder, run:
```bash
npm start
```


## My development process

1. Create React app
```bash
npx create-react-app my-app
```
2. Create Flask app
```bash
mkdir backend
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install Flask
pip install python-dotenv
pip install nltk
```

3. Configure Proxy in React app
In package.json add:
```json
"proxy": "http://localhost:5000"
```

4. Add JS files and Python scripts

