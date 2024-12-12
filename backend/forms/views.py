from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserForm  
from .serializers import UserFormSerializer  


from rest_framework.viewsets import ModelViewSet

class UserFormViewSet(ModelViewSet):
    queryset = UserForm.objects.all()
    serializer_class = UserFormSerializer

# Função para lidar com envios individuais do formulário
@api_view(['POST'])
def form_submission(request):
    serializer = UserFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Formulário enviado com sucesso!"}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
