from django.shortcuts import render
from .models import *
from django.db import connection
cursor = connection.cursor()
# Create your views here.
def get_home(request):
    return render(request, 'home.html')

def get_book(request):
    cursor.execute('call getBook')
    books = cursor.fetchall()
    context = {'books': books}
    return render(request, 'book.html', context)

def get_novel(request):
    return render(request, 'novel.html')

def get_cart(request):
    if (request.user.is_authenticated):
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer)
        cursor.execute('call orderDetailAmount(%s, %s)',(customer.id,order.id))
        items = cursor.fetchall()
    else:
        items = []
    context={'items': items, 'order': order}
    return render(request, 'cart.html', context)

def get_search(request):
    if 'keyword' in request.GET:
        keyword = request.GET.get('keyword')
        cursor.execute('CALL search(%s)', [keyword])
        searchs = cursor.fetchall()
        context = {'searchs': searchs}
        return render(request, 'search.html', context)
    else:
        return render(request, 'base.html')