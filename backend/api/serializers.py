from django.contrib.auth.models import User
from rest_framework import serializers
from .models import  vanslist
from rest_framework import generics


class VansListSerializer(serializers.ModelSerializer):
    class Meta:
        model = vanslist
        fields = '__all__'  


class VansList(generics.ListAPIView):
    serializer_class = VansListSerializer
    queryset = vanslist.objects.all()  # Retrieve all vans

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        #model = Note
        fields = ["id", "title", "content", "created_at", "author"],
        extra_kwargs = {"author": {"read_only": True} }


# Optionally, you can include a detail view for vans if needed
# class VanDetail(generics.RetrieveAPIView):
#     serializer_class = VansListSerializer
#     queryset = vanslist.objects.all()
