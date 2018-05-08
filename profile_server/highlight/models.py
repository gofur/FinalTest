from django.db import models

# Create your models here.
class Highlight(models.Model):

    class Meta:
        db_table = "highlight"
    
    highlight = models.CharField(max_length=128)
    created_date = models.DateField(auto_now_add=True)
    

    def __str__(self):
        return self.highlight

