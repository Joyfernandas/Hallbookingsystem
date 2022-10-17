from rest_framework import serializers
from .models import *


class Employe_rleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe_role
        fields = '__all__'


class Hall_typeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall_type
        fields = '__all__'


class HallsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Halls
        fields = '__all__'

    def to_representation(self, instance):
        res = super().to_representation(instance)
        res['type'] = instance.type.hall_type
        return res


class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields = '__all__'

    def to_representation(self, instance):
        res = super().to_representation(instance)
        res['role'] = instance.role.role_title
        return res


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

    def to_representation(self, instance):
        res = super().to_representation(instance)
        return res


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

    def to_representation(self, instance):
        res = super().to_representation(instance)
        return res


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = '__all__'
