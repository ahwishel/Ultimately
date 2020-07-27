from flask import Flask

flaskApp = Flask(__name__)

flaskApp.static_folder = 'static'

from app import routes