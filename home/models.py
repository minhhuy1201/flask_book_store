from typing import Any
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Address(models.Model):
    province = models.CharField(max_length=30, null=True)
    ward = models.CharField(max_length=30, null=True)
    address_line = models.CharField(max_length=100, null=True) 
    
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=50, null=True, blank=False)
    email = models.EmailField(max_length=254, null=True)
    phone = models.CharField(max_length=30, null=True)
    gender = models.CharField(max_length=3, null=True)
    age = models.IntegerField()
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True)
    created_on = models.DateTimeField(auto_now_add=True, null=True)
    modified_on = models.DateTimeField(null=True)
    
    def __str__(self):
        return self.name
    
class Author(models.Model):
    name = models.CharField(max_length=50, null=True)
    
    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=30, null=True)
    category_parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True,  blank=True)
    
    def __str__(self):
        return self.name
    
class Publisher(models.Model):
    name = models.CharField(max_length=50, null=True)
    
    def __str__(self):
        return self.name
       
class Book(models.Model):
    name = models.CharField(max_length= 150)
    price = models.DecimalField(max_digits=20, decimal_places=3, null=True)
    author = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    publisher = models.ForeignKey(Publisher, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(blank=True, default='')
    storage = models.IntegerField(null=True)
    book_image = models.ImageField(upload_to='images',null=True)
    
    def __str__(self):
        return self.name

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    order_date = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    
    def __str__(self):
        return self.name
    
class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(null=True)
    
    def __str__(self):
        return self.name    
