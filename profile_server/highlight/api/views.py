from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import AllowAny

from ..models import Highlight
from ..serializers import HighlightSerializer
from django_filters.rest_framework import DjangoFilterBackend

class HiglightViewSet(viewsets.ModelViewSet):

    queryset = Highlight.objects.all()
    serializer_class = HighlightSerializer
    filter_backends = (DjangoFilterBackend,)
    # filter_fields = ('campaign__id', )


    def create(self, request, *args, **kwargs):
        serializers = self.get_serializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data, status = status.HTTP_201_CREATED)
    
    # def get_permissions(sealf):
    #     permissions_classes = [IsAuthenticated]
    #     if self.action == 'create':
    #         permissions_classes = [AllowAny]
    #     return [permission() for permission in permissions_classes]
    