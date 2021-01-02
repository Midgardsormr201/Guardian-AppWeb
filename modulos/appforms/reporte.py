def extraerReporte():
    csv = open('Reportes.csv','r')
    
    for report in csv:
        r = report.strip()
        reporte = r.split(";")
        username = reporte[0]
        anonimo = reporte[1]
        latitud = reporte[2]
        longitud = reporte[3]
        print(reporte)

print(extraerReporte())