from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from postget.models import Postget
from postget.serializers import PostgetSerializer

@api_view(['GET', 'POST'])
def postget_list(request, format=None):
    if request.method == 'GET':
        postget = Postget.objects.all()
        serializer = PostgetSerializer(postget, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = PostgetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def postget_detail(request, pk, format=None):
    try:
        postget = Postget.objects.get(pk=pk)
    except Postget.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = PostgetSerializer(postget)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PostgetSerializer(postget, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        postget.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
