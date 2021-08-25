from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from postget import views

urlpatterns = [
    url(r'^$', views.postget_list),
    url(r'^(?P<pk>[0-9]+)/$', views.postget_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)