from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    article = models.TextField()
    image = models.ImageField(upload_to="media/", default='')
    date_written = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title