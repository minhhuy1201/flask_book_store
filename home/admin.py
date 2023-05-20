from django.contrib import admin
from .models import *
# Register your models here.
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'age', 'created_on', 'modified_on')
    search_fields = ['name']
admin.site.register(Customer, CustomerAdmin)
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
class OrderAdmin(admin.ModelAdmin):
    list_display = ('customer', 'total', 'order_date')
    list_filter = ['customer']
admin.site.register(Order, OrderAdmin)
class OrderDetailAdmin(admin.ModelAdmin):
    list_display = ('order', 'book', 'quantity')
    list_filter = ['order']
admin.site.register(OrderDetail, OrderDetailAdmin)
admin.site.register(Category)
