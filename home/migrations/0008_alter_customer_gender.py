# Generated by Django 4.2.1 on 2023-05-16 04:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0007_alter_book_book_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customer",
            name="gender",
            field=models.CharField(max_length=5, null=True),
        ),
    ]
