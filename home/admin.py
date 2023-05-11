from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Customer)
admin.site.register(Address)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ['name']
admin.site.register(Author, AuthorAdmin)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'author', 'publisher', 'storage', 'book_image')
    search_fields = ['name']
    list_filter = ['author']
admin.site.register(Book, BookAdmin)
class PublisherAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ['name']
admin.site.register(Publisher, PublisherAdmin)
admin.site.register(Order)
admin.site.register(OrderDetails)
admin.site.register(Category)
