"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import os, datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=["POST"])
def signup():
    data = request.get_json()
    name = data.get('name')
    lastname = data.get('lastname')
    email = data.get('email')
    password = data.get('password')
    
    if User.query.filter_by(email=email).first():
        return jsonify({"message" : "Mail ya registrado"}), 400
    
    hashed_password = generate_password_hash(password)
    user = User(name=name, lastname=lastname, email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"message" : "Usuario creado correctamente"}), 200

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    print (f"Email: {email}")
    print (f"Password: {password}")
    
    required_fields = {"email", "password"}
    missing_field = {field for field in required_fields if not data.get(field)}
    
    if missing_field:
        return jsonify({"message" : f"Estos campos son requeridos {', '.join(missing_field)}"}), 400
    else:
        user = User.query.filter_by(email=email).first()
        if user is None:
            return jsonify({"message" : "Alguno de los datos no es correcto"}), 400
        
        
        else: 
            print(f"Contraseña hasheada : {user.password}")
            if check_password_hash(user.password, f"{password}"):
                expire_at = datetime.timedelta(days=3)
                token = create_access_token(identity=str(user.id), expires_delta=expire_at)
                return jsonify({
                    "token" : token,
                    "name" : user.name,
                    "lastname": user.lastname,
                    "email": user.email,

                    }), 200
            else:
                return jsonify({"message":"Sus credenciales no son correctas"}),400

    
    
