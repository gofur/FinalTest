from django.db import models

# Create your models here.
class Profile(models.Model):

    class Meta:
        db_table = "profile"
    
    profile_name = models.CharField(max_length=128)
    position = models.TextField()
    highlight = models.ManyToManyField('highlight.Highlight', related_name="profile", blank=True)
    created_by = models.CharField(max_length=128)
    created_date = models.DateField(auto_now_add=True)

    

    def __str__(self):
        return self.profile_name

