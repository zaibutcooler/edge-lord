from django.db import models

class Users(models.Model):
    username = models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=30)
    created=models.DateTimeField(auto_now_add=True)