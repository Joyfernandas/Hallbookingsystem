# Generated by Django 4.1 on 2022-10-09 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hall', '0006_booking_price_alter_booking_hall_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='custmor',
            field=models.CharField(max_length=100, null=True, verbose_name='Customer'),
        ),
    ]
