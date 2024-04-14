from django.db import models
from  django.contrib.auth.models import User



#author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

#this is for adding notes models.cascade will remove all notes and note values relating to the user

class vanslist(models.Model):
    id = models.IntegerField(primary_key=True)

    title = models.CharField(max_length= 100)
    description = models.TextField()
    year = models.DateTimeField()
    price = models.CharField(max_length=20)
    mileage = models.CharField(max_length=20)




    def __str__ (self):
        return self.title
    

