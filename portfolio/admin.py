from django.contrib import admin
from .models import Mensaje

class MensajesAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'mensaje', 'fecha_mensaje')
    # Añadimos un filtro para que podamos filtrar por fecha de recepción
    list_filter = ('fecha_mensaje',)
    # Permitimos búsqueda por campos como nombre y email
    search_fields = ('nombre', 'email')

admin.site.register(Mensaje, MensajesAdmin)

