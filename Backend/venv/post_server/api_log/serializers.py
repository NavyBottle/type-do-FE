from rest_framework import serializers
from api_log.models import Log

class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = '__all__'
        # model Log의 모든 filed를 serialize함