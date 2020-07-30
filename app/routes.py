from app import flaskApp
from flask import render_template

@flaskApp.route('/')
@flaskApp.route('/checklist')
def home():
    return render_template('checklist.html')

@flaskApp.route('/about')
def about():
    return render_template('about.html')

@flaskApp.route('/todo')
def todo():
    return render_template('todo.html')