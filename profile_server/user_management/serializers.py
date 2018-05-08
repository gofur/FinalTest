from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    email =  serializers.EmailField(required=True)
    username = serializers.CharField(read_only=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('url', 'first_name', 'last_name','username', 'email', 'password')

    def create(self, validate_data):
        user = User.objects.create_user(
            email = validate_data.get('email'),
            username = validate_data.get('email'),
            first_name = validate_data.get('first_name'),
            last_name = validate_data.get('last_name'),
            password = validate_data.get('password'),
        )
        return user


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
