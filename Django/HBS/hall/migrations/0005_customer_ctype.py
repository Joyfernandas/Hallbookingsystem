# Generated by Django 4.1 on 2022-10-09 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hall', '0004_rename_first_name_employe_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='ctype',
            field=models.CharField(blank=True, default='Customer', max_length=100, null=True, verbose_name='CustomerType'),
        ),
    ]