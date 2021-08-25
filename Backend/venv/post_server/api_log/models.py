from django.db import models

# Create your models here.

class Log(models.Model):
    log_id = models.CharField(max_length=128, null=False)
    start = models.CharField(max_length=128, null=False)
    title = models.CharField(max_length=256, null=True)
 
    class Meta:
        db_table = "Log" 
        #Table이름을 "User"로 정한다 default 이름은 api_log_log가 된다.