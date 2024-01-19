# builtin
from rest_framework import generics
from rest_framework.mixins import ListModelMixin, CreateModelMixin, \
    RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.generics import GenericAPIView

# user
from student.api.serializers import StudentSerializer
from student.models import Student


class StudentView(ListModelMixin,
                  CreateModelMixin,
                  RetrieveModelMixin,
                  UpdateModelMixin,
                  DestroyModelMixin,
                  GenericAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
