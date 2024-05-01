from flask import Flask
from Models.DataDAO import DataDAO
from Controller.Controller import Controller
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# MySQL configuration
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''  
app.config['MYSQL_DATABASE_DB'] = 'blackcoffer'

# Create an instance of DataDAO
data_dao = DataDAO()

# Initialize DataDAO with the Flask app instance
data_dao.init_app(app)

if data_dao.connection is not None:
    print("Connection to MySQL database established successfully.")
else:
    print("Failed to establish connection to MySQL database.")

controller = Controller(app)

# Import and register the Controller module

if __name__ == "__main__":
    app.run(debug=True)
