# Generated by Django 4.1 on 2022-10-09 13:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hall', '0007_alter_booking_custmor'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='country',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='state',
        ),
        migrations.RemoveField(
            model_name='employe',
            name='country',
        ),
    ]
