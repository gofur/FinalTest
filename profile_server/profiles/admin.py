from django.contrib import admin

# Register your models here.

from .models import Profile

class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('created_date',)

admin.site.register(Profile, ProfileAdmin)
