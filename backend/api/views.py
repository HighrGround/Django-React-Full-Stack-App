from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer, VansListSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import vanslist


class VansList(generics.ListAPIView):
    serializer_class = VansListSerializer
    queryset = vanslist.objects.all()  

#only allows if the user is authenticated
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)



        #method to override methods within existing django method
class NoteDelete(generics.DestroyAPIView):
    seruializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
        



class VansListCreate(generics.ListCreateAPIView):
    serializer_class = VansListSerializer
    #permission_classes = [IsAuthenticated]

    '''
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

    '''





# Create your views here.
class CreateUserView(generics.CreateAPIView):
    query = User.objects.all()
    serializer_class = UserSerializer 
    permission_classes = [AllowAny]#change in future?




