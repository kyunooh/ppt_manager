from django.db import models


# Create your models here.
class room(models.Model):
    number = models.AutoField()
    password = models.CharField()
    
    
