from django.db import models

# Create your models here.

class usuario(models.Model):
    username = models.CharField(max_length=50, primary_key=True, null=False)
    contraseña = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.username

class reporte(models.Model):
    username = models.ForeignKey(usuario, on_delete=models.CASCADE)
    anonimo = models.BooleanField(default=False)
    latitud = models.DecimalField(null=False, blank=False, max_digits=9, decimal_places=6)
    longitud = models.DecimalField(null=False, blank=False, max_digits=9, decimal_places=6)
    fecha = models.DateTimeField(auto_now_add=True)
    detalles = models.TextField()
    
    def __str__(self):
        txt = 'Reporte en ({0},{1}) por {2}'
        txt_an = 'Reporte en ({0},{1}) por {2} (ANÓNIMO)'
        if self.anonimo == True:
            return txt_an.format(self.latitud, self.longitud, self.username)
        return txt.format(self.latitud, self.longitud, self.username)
