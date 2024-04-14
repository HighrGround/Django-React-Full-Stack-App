from django.urls import path
from . import views
from .models import vanslist

def get_data(request):
    data = vanslist.objects.all()  # Fetch all objects
    # You can also filter or order data based on request parameters
    return render(request, 'data.json', {'data': data})  # Optional for template rendering (explained later)






urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name= "note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),

]