from django.urls import path
from api_log.views import LogView
 
app_name = 'api_user'
urlpatterns = [
    path('', LogView.as_view()),
    # Log에 관한 API를 처리하는 view로 Request를 넘김
    path('<int:get_id>', LogView.as_view())
    # Log pk id가 전달되는 경우
]
