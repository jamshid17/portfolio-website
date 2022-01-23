from multiprocessing import context
from django.shortcuts import render
from .models import Post
# Create your views here.
def home(request):
    return render(request, 'main/home.html')

def posts(request):
    posts = Post.objects.all()
    context = {"title": "Posts",
            "posts" : posts}
    return render(request, "main/posts.html", context=context)

def post(request, id):
    post = Post.objects.get(id=id)
    context = {"title":"post",
            "post":post}
    return render(request, "main/post.html", context=context)


def impossible(request):
    return render(request, "main/impossible.html", context={"title":"Impossible list"})

