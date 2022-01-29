from unicodedata import name
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('posts/', views.posts, name="posts"),
    path('posts/<int:id>', views.post, name="post-detail"),
    path('impossible-list/', views.impossible, name="impossible-list"),
    path('timer/', views.timer, name='timer'),
] 
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
