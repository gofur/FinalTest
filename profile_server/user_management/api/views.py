from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend

from ..serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend,)


    def create(self, request, *args, **kwargs):
        serializers = self.get_serializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        if self.action == 'create':
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]
