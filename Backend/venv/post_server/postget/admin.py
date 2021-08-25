from django.contrib import admin
from postget.models import Postget

# Register your models here.

class PostgetAdmin(admin.ModelAdmin):
    list_display=('title', 'author', 'created',)

admin.site.register(Postget, PostgetAdmin)