from flask import Flask,request,jsonify
from flask_cors import CORS, cross_origin
import sqlite3

Api=Flask(__name__)
cors=CORS(Api)
Api.config['CORS_HEADERS'] = 'Content-Type'


@cross_origin()
@Api.route('/enviar', methods=['POST'])
def Postar():
    conn=sqlite3.connect('databse.db')
    cur=conn.cursor()
    cur.execute('CREATE TABLE  IF NOT EXISTS herois(id text, realnome text, poderes text)')
    content = request.get_json()
    cur.execute("INSERT INTO herois VALUES(?,?,?)",(content['id'],content['realnome'],content['poderes']))
    conn.commit()
    return 'Enviado com Sucesso!'

@Api.route('/buscar', methods=['GET'])
def Getar():
    conn=sqlite3.connect('databse.db')
    cur=conn.cursor()
    data=cur.execute("SELECT * FROM herois").fetchall()
    return jsonify(list(data))

@Api.route('/buscar/<name>', methods=['GET'])
def BuscarName(name):
    conn=sqlite3.connect('databse.db')
    cur=conn.cursor()
    data=cur.execute("SELECT realnome,poderes FROM herois WHERE id=?",(name,)).fetchall()
    return ({
        'nome':data[0][0],
        'poderes':data[0][1]
        
    })

    

Api.run(port=5000)



