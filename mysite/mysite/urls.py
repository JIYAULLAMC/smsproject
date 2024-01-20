from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path("admin/", admin.site.urls),
    path("student/", include("student.urls")),
    path("schema/", get_schema_view(
        title="Your API",
        description="api for the blog",
         # Adjust permissions as needed
        ), name="openapi-schema"),
    path('docs/', include_docs_urls(title='Your API Documentation'), name="schema-api"),

]
