from rest_framework.views import APIView
from rest_framework.response import Response
from api_log.serializers import LogSerializer
from api_log.models import Log
from rest_framework import status

 
class LogView(APIView):
    
    # POST /log
    def post(self, request):
        log_serializer = LogSerializer(data=request.data)
        
        if log_serializer.is_valid():
            log_serializer.save()
            # DB에 저장
            return Response(log_serializer.data, status=status.HTTP_201_CREATED)
            # Client에게 JSON response 전달
        else:
            return Response(log_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # GET /log
    def get(self, request, **kwargs):
        if kwargs.get('log_id') is None:
            log_queryset = Log.objects.all()
            # 모든 Log의 정보 받아오기
            log_queryset_serializer = LogSerializer(log_queryset, many=True)
            # many=True로 다수의 데이터 직렬화 가능
            return Response(log_queryset_serializer.data, status=status.HTTP_200_OK)
        
        else:
            log_id = kwargs.get('log_id')
            log_serializer = LogSerializer(Log.objects.get(log_id=log_id))
            return Response(log_serializer.data, status=status.HTTP_200_OK)

    # PUT /log
    def put(self, request, **kwargs):
        if kwargs.get('log_id') is None:
            return Response("invalid request", status=status.HTTP_400_BAD_REQUEST)
        else:
            log_id = kwargs.get('log_id')
            log_object = Log.objects.get(log_id=log_id)

            update_log_serializer = LogSerializer(log_object, data=request.data)
            if update_log_serializer.is_valid():
                update_log_serializer.save()
                return Response(update_log_serializer.data, status=status.HTTP_200_OK)
            else:
                return Response("invalid request", status=status.HTTP_400_BAD_REQUEST)

    # DELETE /log
    def delete(self, request, **kwargs):
        if kwargs.get('log_id') is None:
            return Response("invalid request", status=status.HTTP_400_BAD_REQUEST)
        else: 
            log_id = kwargs.get('log_id')
            log_object = Log.objects.get(log_id=log_id)
            log_object.delete()
            return Response("delete done", status=status.HTTP_200_OK)            


    
