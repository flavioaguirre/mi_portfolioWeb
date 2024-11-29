from django.views.generic import TemplateView
# from .models import Proyectos


class IndexView(TemplateView):
    template_name = 'portfolio/index.html'
