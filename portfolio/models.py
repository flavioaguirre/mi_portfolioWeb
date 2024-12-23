from django.db import models
from datetime import datetime
import pytz

# Define la zona horaria de tu país
timezone = pytz.timezone('America/Buenos_Aires')  # Cambia esto a tu zona horaria

# Obtén la hora actual en la zona horaria especificada
local_time = datetime.now(timezone)

# Formatea la hora
formatted_time = local_time.strftime('%Y-%m-%d %H:%M:%S')

class Mensajes(models.Model):
    fecha_mensaje = models.DateTimeField(default=formatted_time)
    nombre = models.CharField(max_length=30)
    email = models.CharField(max_length=20)
    mensaje = models.CharField(max_length=250)
    
    def __str__(self):
        return f'{self.nombre} te ha enviado un mensaje!'