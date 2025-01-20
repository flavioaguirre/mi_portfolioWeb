from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .models import Mensaje
from .forms import MensajeForm

class IndexView(CreateView):
    model = Mensaje
    form_class = MensajeForm
    template_name = './portfolio/index.html'
    success_url = reverse_lazy('gracias')


class GraciasView(CreateView):
    model = Mensaje
    form_class = MensajeForm
    template_name = './portfolio/gracias.html'
    success_url = reverse_lazy('index')