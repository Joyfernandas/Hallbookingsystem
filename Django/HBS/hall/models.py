from ctypes import addressof
from distutils.command.upload import upload
import email
from email.mime import image
from pyexpat import model
from tabnanny import verbose
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import CustomUser
from django.contrib.auth.models import Group
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import get_template

# Create your models here.

GENDER = (('Male', 'Male'), ('Female', 'Female'), ('Others', 'Others'))


class Hall_type(models.Model):
    hall_type = models.CharField(
        "Hall Type", max_length=20, null=True, blank=False)

    class Meta:
        verbose_name_plural = ("Hall type")

    def __str__(self):
        return self.hall_type


class Employe_role(models.Model):
    role_title = models.CharField(
        "Role title", max_length=20, null=True, blank=False)

    class Meta:
        verbose_name_plural = ("Employe role")

    def __str__(self):
        return self.role_title


class Customer (models.Model):
    first_name = models.CharField(
        "First Name", max_length=20, null=True, blank=False)
    last_name = models.CharField(
        "Last Name", max_length=20, null=True, blank=False)
    dob = models.DateField("DOB", null=True, blank=False)
    age = models.IntegerField("Age", null=True, blank=False)
    gender = models.CharField(
        "Gender", max_length=6, null=True, blank=False, choices=GENDER, default="Male")
    email = models.EmailField("Email", null=True, blank=False)
    address1 = models.TextField("Address", null=True, blank=False)
    address2 = models.TextField("Address", null=True, blank=False)
    city = models.CharField(
        "Name", max_length=50, null=True, blank=False)
    pincode = models.CharField(
        "Pincode", max_length=6, null=True, blank=False)
    contect = models.CharField(
        "Contect Number", max_length=10, null=True, blank=False)
    adhar = models.BigIntegerField(
        "Adhar Number", null=True, blank=False)
    ctype = models.CharField(
        "CustomerType", max_length=100, null=True, blank=True, default='Customer')

    class Meta:
        verbose_name_plural = ("Customer")

    def __str__(self):
        return self.first_name


@receiver(post_save, sender=Customer)
def event_attender_create(sender, instance, *args, **kwargs):
    if instance and kwargs['created']:
        user = CustomUser.objects.create(first_name=instance.first_name, email=instance.email, username=instance.email,
                                         Customer=instance, role="Customer", is_staff=True)
        user.set_password(instance.first_name.lower() +
                          instance.last_name.lower())
        if instance.ctype == "Customer":
            if Group.objects.filter(name='NewUser').exists():
                user.groups.add(Group.objects.get(name='NewUser'))

        user.save()
        # self = instance

        context = {"name": instance.first_name}
        message = EmailMultiAlternatives(
            subject="How are You", from_email="email_from", reply_to=[instance.email], to=[instance.email])
        print(message)
        html_template = get_template(
            "email/email_name.html").render(context)
        message.attach_alternative(html_template, "text/html")
    return True


class Employe (models.Model):
    name = models.CharField(
        "First Name", max_length=25, null=True, blank=False)
    dob = models.DateField("Date of birth", null=True, blank=False)
    age = models.IntegerField("Age", null=True, blank=False)
    gender = models.CharField("Gender", max_length=6,
                              choices=GENDER, default="Male")
    email = models.EmailField("Email", null=True, blank=False)
    role = models.ForeignKey(
        Employe_role, on_delete=models.SET_NULL, null=True, blank=False)
    address = models.TextField(
        "Address", max_length=50, null=True, blank=False)
    state = models.CharField(
        "State", max_length=50, null=True, blank=False)
    city = models.CharField(
        "City", max_length=50, null=True, blank=False)
    pincode = models.CharField(
        "Pincode", max_length=6, null=True, blank=False)
    phone_number = models.CharField(
        "Phone Number", max_length=10, null=True, blank=False)

    class Meta:
        verbose_name_plural = ("Employe")

    def __str__(self):
        return self.name


class Halls(models.Model):
    name = models.CharField("Hall Name", max_length=20, null=True, blank=False)
    image = models.ImageField(
        "Hall Image", upload_to='Image', null=True, blank=True)
    type = models.ForeignKey(
        Hall_type, on_delete=models.SET_NULL, null=True)
    price = models.FloatField(
        "Hall price", max_length=6, null=True, blank=False)
    capacity = models.CharField(
        "Capacity", max_length=20, null=True, blank=False)
    address = models.TextField("Address", null=True, blank=False)
    owner_name = models.CharField(
        "Owner Name", max_length=15, null=True, blank=False)
    owner_phone = models.CharField(
        "Owner Phone Number", max_length=10, null=True, blank=False)
    owner_email = models.EmailField("Owner Email", null=True, blank=False)
    employe = models.ForeignKey(
        Employe, on_delete=models.SET_NULL, null=True, blank=False)

    class Meta:
        verbose_name_plural = ("Halls")

    def __str__(self):
        return self.name


class Booking (models.Model):
    name = models.CharField("User Name", max_length=100,
                            null=True, blank=False)
    custmor = models.CharField("Customer", max_length=100,
                               null=True, blank=False)
    hall_name = models.CharField("User Name", max_length=100,
                                 null=True, blank=False)
    price = models.IntegerField("Amount", null=True, blank=False)
    booked_on = models.DateField("Booked On", null=True, blank=False)
    booking_date = models.DateField("Booking Date", null=True, blank=False)
    arrival_date = models.DateField("Arrival Date", null=True, blank=False)
    leaving_date = models.DateField("Leaving Date", null=True, blank=False)
    booking_parpus = models.CharField(
        "Booking Parpus", max_length=15, null=True, blank=False)

    class Meta:
        verbose_name_plural = ("Booking")

    def __str__(self):
        return self.name


class Bill (models.Model):
    user_name = models.CharField(
        "User Name", max_length=100, null=True, blank=False)
    booking_id = models.CharField(
        "booking_id", max_length=100, null=True, blank=False)
    custmor = models.CharField(
        "custmor", max_length=100, null=True, blank=False)
    hall_charge = models.FloatField("Hall Charge", null=True, blank=False)
    payment_date = models.DateField("Pyment Date", null=True, blank=False)
    payment_mode = models.CharField(
        "Payment Mode", max_length=100, null=True, blank=False)

    class Meta:
        verbose_name_plural = ("Bill")

    def __str__(self):
        return self.user_name
