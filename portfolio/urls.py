from django.urls import path
from .views import IndexView
from .views import GraciasView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('gracias/', GraciasView.as_view(), name='gracias'),
]