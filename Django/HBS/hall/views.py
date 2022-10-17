from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import viewsets

# Create your views here.


class Employe_roleview (viewsets.ModelViewSet):
    queryset = Employe_role.objects.all()
    serializer_class = Employe_rleSerializer


class Hall_typeview (viewsets.ModelViewSet):
    queryset = Hall_type.objects.all()
    serializer_class = Hall_typeSerializer


class Hallsview (viewsets.ModelViewSet):
    queryset = Halls.objects.all()
    serializer_class = HallsSerializer


class Employeview (viewsets.ModelViewSet):
    queryset = Employe.objects.all()
    serializer_class = EmployeSerializer


class Customerview (viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class Bookingview (viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class Billview (viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
