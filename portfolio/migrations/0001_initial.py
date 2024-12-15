# Generated by Django 5.1.3 on 2024-12-15 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Certificados',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo_curso', models.CharField(max_length=120)),
                ('fecha_obtencion', models.CharField(max_length=70)),
                ('imagen_curso', models.ImageField(blank=True, null=True, upload_to='./static/assets/img/certificados')),
            ],
        ),
    ]
