from django.shortcuts import render

def home(request):
    return render(request, 'home/index.html')  # Certifique-se de que este template existe
