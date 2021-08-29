from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    # url(r'^admin/', admin.site.urls),
    # url(r'^postget/', include('postget.urls')),
    
    path('admin/', admin.site.urls),
    path('logs/', include('api_log.urls'), name='api_log'), 
    #include 함수를 통해 api_log의 urls.py로 라우팅 해준다.
]