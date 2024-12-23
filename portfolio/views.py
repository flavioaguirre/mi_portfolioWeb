from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.contrib import messages
from .models import Mensajes
from .forms import MensajeForm

class IndexView(TemplateView):
    template_name = 'portfolio/index.html'
    
    def post(self, request, **kwargs):
        form = MensajeForm(request.POST)
        if form.is_valid():
            nombre = form.cleaned_data['nombre']
            email = form.cleaned_data['email']
            mensaje = form.cleaned_data['mensaje']

            Mensajes.objects.create(nombre=nombre, email=email, mensaje=mensaje)
            form = MensajeForm()

            messages.success(request, "Mensaje enviado correctamente.")
 
        else:
            messages.error(request, "Hubo un error en el formulario. Intenta nuevamente.")

        return render(request, self.template_name, {'form': form})
    
    def get(self, request, *args, **kwargs):
        form = MensajeForm()
        return render(request, self.template_name, {'form': form})





