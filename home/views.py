from django.shortcuts import render
from .models import *
# Create your views here.
def get_home(request):
    return render(request, 'home.html')
def get_book(request):
    books = Book.objects.all()
    context = {'books': books}
    return render(request, 'book.html', context)