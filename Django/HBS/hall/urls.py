from rest_framework import routers
from django.urls import path, include
from .views import *

routers = routers.DefaultRouter()
routers.register("Employe_role", Employe_roleview)
routers.register("Hall_type", Hall_typeview)
routers.register("Halls", Hallsview)
routers.register("Employe", Employeview)
routers.register("Customer", Customerview)
routers.register("Booking", Bookingview)
routers.register("Bill", Billview)


urlpatterns = [
    path('api/', include(routers.urls))
]
