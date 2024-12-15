from django.views.generic import TemplateView
from django.shortcuts import render
from .models import Certificados
# from .models import Proyectos


class IndexView(TemplateView):
    template_name = 'portfolio/index.html'
    model = Certificados
    
    def mis_certificados(self,request):
        lista_certificados = Certificados.objects.all()
        fecha_obtencion = Certificados.objects.order_by('-fecha_obtencion')
        return render(request, self.template_name,
                      {'lista_certificados': lista_certificados} )
