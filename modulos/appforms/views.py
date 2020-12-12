from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm
from modulos.appforms.models import reporte

# Create your views here.

def Register(request):
    form = CreateUserForm()

    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, "login.html")
    context = {'form':form}
    return render(request, "registro.html", context)

def Login(request):
    return render(request, "login.html")

def Reportar(request):
    return render(request, "reporte.html")

def Index(request):
    return render(request, "index.html")

def QuienesSomos(request):
    return render(request, "quienes-somos.html")