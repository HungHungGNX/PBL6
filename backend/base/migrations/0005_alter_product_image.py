# Generated by Django 4.1.2 on 2022-11-22 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_orderitem_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
    ]
