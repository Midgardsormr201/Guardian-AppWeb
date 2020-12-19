from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm
from django.contrib.auth import authenticate,login, logout
from django.contrib.auth.decorators import login_required
from datetime import datetime
from modulos.appforms.models import reporte
import csv

# Create your views here.

@login_required(login_url='login')
def Index(request):
    return render(request, "index.html")

def QuienesSomos(request):
    return render(request, "quienes-somos.html")

def Register(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    context = {'form':form}
    return render(request, "registro.html", context)

def Login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return render(request, "login.html")
    context = {}
    return render(request, "login.html", context)

@login_required(login_url='login')
def Logout(request):
    logout(request)
    return redirect('login')

@login_required(login_url='login')
def Reportar(request):
    if request.method == "POST":
        username = request.POST['username']
        latitud = request.POST['latitud']
        longitud = request.POST['longitud']
        detalles = request.POST['detalles']
        anonimo = request.POST['anonimo']
        if anonimo == "SI":
            anonimo = True
        elif anonimo == "NO":
            anonimo = False
        report = reporte(username=username, anonimo=anonimo, latitud=latitud, longitud=longitud, detalles=detalles, fecha=datetime.today().strftime('%Y-%m-%d %H:%M:%S%z'))
        report.save()
        with open('Reportes.csv','a', newline='') as f:
            reportar = csv.writer(f)
            reportar.writerow([username, anonimo, latitud, longitud, detalles, datetime.today().strftime('%Y-%m-%d %H:%M:%S%z')])
        return render (request, "index.html")
    return render(request, "reporte.html")
