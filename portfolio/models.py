from django.db import models

class Mensaje(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()
    fecha_mensaje = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'mensajes'
        managed = False
    
    def __str__(self):
        return f"{self.nombre} - {self.email} ({self.fecha_mensaje.strftime('%Y-%m-%d %H:%M:%S')})"
