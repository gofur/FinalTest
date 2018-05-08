from django.contrib import admin

# Register your models here.

from .models import Highlight

class HighlightAdmin(admin.ModelAdmin):
    readonly_fields = ('created_date',)

admin.site.register(Highlight, HighlightAdmin)
