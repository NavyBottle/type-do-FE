from rest_framework import serializers
from postget.models import Postget

class PostgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postget
        fields = ('id', 'title', 'author', 'pw', 'content')

    def create(self, validated_data):
        return Postget.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.author = validated_data.get('author', instance.author)
        instance.pw = validated_data.get('pw', instance.pw)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
    