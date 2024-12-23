from django import forms
import pytz
from datetime import datetime


class MensajeForm(forms.Form):
    fecha_mensaje = forms.DateTimeField(widget=forms.TextInput(attrs={'class': 'input'}))
    nombre = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'class': 'input'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'input'}))
    mensaje = forms.CharField(widget=forms.Textarea(attrs={'class': 'input'}))
