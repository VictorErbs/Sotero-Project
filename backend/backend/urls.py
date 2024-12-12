from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from forms.views import UserFormViewSet, form_submission  

router = DefaultRouter()
router.register(r'forms', UserFormViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/form/', form_submission, name='form_submission'), 
]
