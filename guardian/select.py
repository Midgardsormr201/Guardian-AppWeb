import psycopg2
from psycopg2 import Error

def extraer_datos():
    try:
        conn = psycopg2.connect(database="test2", user="postgres", password="guardian-web", host="localhost", port="5432")
        sacar = conn.cursor()
        print("Reportes:")
        print("")
        sacar.execute("SELECT * FROM appforms_reporte")
        datos = sacar.fetchall()
        print(datos)
        '''
        for row in datos:
            latitud = row[2]
            longitud = row[3]
            fecha = str(row[4])
            detalle = str(row[5])
            username = ""
            if row[1] == True:
                username = "Anónimo"
            else:
                username = str(row[6])
            print(latitud)
            print(longitud)
            print(fecha)
            print(detalle)
            print(username)
            print("")
        '''

    except:
        print("Error")

extraer_datos()