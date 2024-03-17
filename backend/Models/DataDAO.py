from flaskext.mysql import MySQL
from flask import current_app

class DataDAO:
    def __init__(self, app=None):
        self.mysql = MySQL()
        self.connection = None
        
    def init_app(self, app):
        self.mysql.init_app(app)
        self.connection = self.mysql.connect()
        print(1,"self.connection", self.connection)

    def get_by_end_year(self, year):
        return self._execute_query("SELECT * FROM data WHERE end_year = %s", (year,))

    def get_by_email(self, email):
        return self._execute_query("SELECT * FROM data WHERE email = %s", (email,))

    def get_by_sector_name(self, sector_name):
        return self._execute_query("SELECT * FROM data WHERE sector_name = %s", (sector_name,))
    
    def get_by_topic(self, topic):
        return self._execute_query("SELECT * FROM data WHERE topic = %s", (topic,))

    def get_by_sector_name(self, sector):
        return self._execute_query("SELECT * FROM data WHERE sector_name = %s", (sector,))

    def get_by_region_name(self, region):
        return self._execute_query("SELECT * FROM data WHERE region_name = %s", (region,))

    def get_by_pest(self, pest):
        return self._execute_query("SELECT * FROM data WHERE pest = %s", (pest,))

    def get_by_source(self, source):
        return self._execute_query("SELECT * FROM data WHERE source = %s", (source,))

    def get_by_swot(self, swot):
        return self._execute_query("SELECT * FROM data WHERE swot = %s", (swot,))

    def get_by_country(self, country):
        print("Country", country)
        return self._execute_query("SELECT * FROM data WHERE country = %s", (country,))

    def get_by_city(self, city):
        return self._execute_query("SELECT * FROM data WHERE city = %s", (city,))

    def _execute_query(self, query, params):
        if self.connection is None:
            raise RuntimeError("MySQL connection not initialized. Call init_app(app) first.")
        cursor = self.connection.cursor()
        cursor.execute(query, params)
        data = cursor.fetchall()
        cursor.close()
        return data
