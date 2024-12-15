from django.db import models

class Certificados(models.Model):
    titulo_curso = models.CharField(max_length=120)
    fecha_obtencion = models.CharField(max_length=70)
    imagen_curso= models.ImageField(upload_to='./static/assets/img/certificados', null=True, blank=True)

    def __str__(self):
        return f'{self.titulo_curso}  ----  Obtenido el dia: {self.fecha_obtencion}'