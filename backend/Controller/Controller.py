from flask import jsonify, request
from Models.DataDAO import DataDAO
from sqlalchemy.orm.exc import NoResultFound

class Controller:
    def __init__(self, app):
        self.app = app
        self.dao = DataDAO()
        self.dao.init_app(app)
        self.register_routes()

    def register_routes(self):
        @self.app.route('/')
        def index():
            return 'Hello, World!'
    
        @self.app.route('/dashboard/end-year/<int:year>', methods=['GET'])
        def get_data_by_end_year_handler(year):
            try:
                list_data = self.dao.get_by_end_year(year)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

        @self.app.route('/dashboard/topic', methods=['GET'])
        def get_data_by_topic_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.getByEmail(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404

        @self.app.route('/dashboard/sector', methods=['GET'])
        def get_data_by_sector_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_sector_name(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400
            

        @self.app.route('/dashboard/region', methods=['GET'])
        def get_data_by_region_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_region_name(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

        @self.app.route('/dashboard/pestle', methods=['GET'])
        def get_data_by_pestle_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_pest(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

        @self.app.route('/dashboard/source', methods=['GET'])
        def get_data_by_source_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_source(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

        @self.app.route('/dashboard/swot', methods=['GET'])
        def get_data_by_swot_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_swot(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

        @self.app.route('/dashboard/country', methods=['GET'])
        def get_data_by_country_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_country(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

        @self.app.route('/dashboard/city', methods=['GET'])
        def get_data_by_city_handler():
            keyword = request.args.get('keyword')
            try:
                list_data = self.dao.get_by_city(keyword)
                return jsonify(list_data), 200
            except NoResultFound:
                return jsonify({"error": "Data not found"}), 404
            except ValueError:
                return jsonify({"error": "Invalid year value"}), 400

